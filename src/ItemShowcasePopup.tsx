import React from 'react';
import { FacebookIcon, FacebookShareButton, RedditIcon, RedditShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton } from 'react-share';
import { Item } from './item';
import { ItemShowcase } from './ItemShowcase';
import './ItemShowcasePopup.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { createLink } from './createLink';

export class ItemShowcasePopup extends React.Component<{item: Item, close: () => void}> {
    constructor(props: {item: Item, close: () => void}) {
        super(props);
    }

    render() {
        const url = createLink(this.props.item); // 'http://localhost:3000/itemCreator';
        return (<div className="show-case-popup">
            <ItemShowcase item={this.props.item}></ItemShowcase>
            <button className="action-button action-button-big mt-2" onClick={() => this.props.close()}>BACK</button>
            <FacebookShareButton url={url}><FacebookIcon size={25}></FacebookIcon></FacebookShareButton>
            <TwitterShareButton url={url}><TwitterIcon size={25}></TwitterIcon></TwitterShareButton>
            <RedditShareButton url={url}><RedditIcon size={25}></RedditIcon></RedditShareButton>
            <TelegramShareButton url={url}><TelegramIcon size={25}></TelegramIcon></TelegramShareButton>
            <CopyToClipboard text={url}><button>Copy link to clipboard</button></CopyToClipboard>
        </div>);
    }
}