import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FacebookIcon, FacebookShareButton, RedditIcon, RedditShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton } from "react-share";
import { createLink } from "./createLink";
import { Item } from "./item";
import domtoimage from 'dom-to-image';
import './SharePanel.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faShareAlt, faFileDownload } from '@fortawesome/free-solid-svg-icons'


export class SharePanel extends React.Component<{ item: Item }> {
    constructor(props: { item: Item }) {
        super(props);
        this.nativeShareEnabled = this.nativeShareEnabled.bind(this);
        this.shareImage = this.shareImage.bind(this);
        this.downloadImage = this.downloadImage.bind(this);
        this.copyImage = this.copyImage.bind(this);
        this.getImageBlob = this.getImageBlob.bind(this);
    }

    render() {
        const url = createLink(this.props.item); // 'http://localhost:3000/itemCreator';
        return (<div className="share-panel">
            { this.nativeShareEnabled() && <button className="mr-1 mt-1" onClick={() => this.shareImage()}><FontAwesomeIcon icon={faShareAlt} size="xs" transform="left-4 up-1" />Share</button>}
            <FacebookShareButton className="mt-1 share-button" url={url} quote={this.props.item.name}><FacebookIcon size={24}></FacebookIcon></FacebookShareButton>
            <TwitterShareButton className="mt-1 share-button" url={url} title={this.props.item.name}><TwitterIcon size={24}></TwitterIcon></TwitterShareButton>
            <RedditShareButton className="mt-1 share-button" url={url} title={this.props.item.name}><RedditIcon size={24}></RedditIcon></RedditShareButton>
            <TelegramShareButton className="mr-1 mt-1 share-button" url={url} title={this.props.item.name}><TelegramIcon size={24}></TelegramIcon></TelegramShareButton>
            <CopyToClipboard text={url}><button className="mr-1 mt-1">Copy link to clipboard</button></CopyToClipboard>
            <button className="mr-1 mt-1" onClick={() => this.downloadImage()}><FontAwesomeIcon icon={faFileDownload} size="xs" transform="left-4 up-1" />Download PNG</button>
            { this.copyEnabled() && <button className="mr-1 mt-1" onClick={() => this.copyImage()}>Copy PNG to clipboard</button>}
        </div>);
    }

    nativeShareEnabled() {
        return navigator.share && typeof navigator.share === 'function';
    }
    copyEnabled() {
        return navigator.clipboard && ((navigator.clipboard) as any).write;
    }

    async shareImage() {
        const blob = await this.getImageBlob();
        if (blob) {
            try {
                const file = new File([blob], this.props.item.name + '.png', { type: blob.type });
                navigator.share({
                    title: this.props.item.name,
                    text: this.props.item.name,
                    files: [file]
                } as any)
            } catch (error) {
                console.error(error);
            }
        }
    }

    async downloadImage() {
        const blob = await this.getImageBlob();
        if (blob) {
            try {
                const file = new File([blob], this.props.item.name + '.png', { type: blob.type });
                var pngUrl = window.URL.createObjectURL(file);
                const tempLink = document.createElement('a');
                tempLink.href = pngUrl;
                tempLink.setAttribute('download', this.props.item.name + '.png');
                tempLink.click();
            } catch (error) {
                console.error(error);
            }
        }
    }

    async copyImage() {
        const blob = await this.getImageBlob();
        if (blob) {
            try {
                ((navigator.clipboard) as any).write([new ClipboardItem({
                    'image/png': blob
                })
                ]);
            } catch (error) {
                console.error(error);
            }
        }
        return;
    }

    async getImageBlob() {
        const node = document.getElementById('show-case-hidden');

        if (node) {
            const dataUrl = await domtoimage.toPng(node);
            var img = new Image();
            img.src = dataUrl;
            const blob = await (await fetch(dataUrl)).blob();
            return blob;
        }
        return null;
    }
}

interface ClipboardItem {
    readonly types: string[];
    readonly presentationStyle: "unspecified" | "inline" | "attachment";
    getType(): Promise<Blob>;
}

interface ClipboardItemData {
    [mimeType: string]: Blob | string | Promise<Blob | string>;
}

declare var ClipboardItem: {
    prototype: ClipboardItem;
    new(itemData: ClipboardItemData): ClipboardItem;
}