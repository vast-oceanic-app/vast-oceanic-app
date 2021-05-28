import React from 'react';
import { FacebookIcon, FacebookShareButton, RedditIcon, RedditShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton } from 'react-share';
import { Item } from './item';
import { ItemShowcase } from './ItemShowcase';
import './ItemShowcasePopup.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { createLink } from './createLink';
import domtoimage from 'dom-to-image';
import { SharePanel } from './SharePanel';

export class ItemShowcasePopup extends React.Component<{item: Item, close: () => void}> {
    constructor(props: {item: Item, close: () => void}) {
        super(props);
    }

    render() {
        const url = createLink(this.props.item); // 'http://localhost:3000/itemCreator';
        return (<div className="show-case-popup">
            <ItemShowcase item={this.props.item}></ItemShowcase>
            <SharePanel item={this.props.item}></SharePanel>
        </div>);
    }
}