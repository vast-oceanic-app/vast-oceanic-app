import React from "react";
import { Item } from "./item";
import { ItemShowcase } from "./ItemShowcase";
import { Helmet } from "react-helmet";
import { createLink } from "./createLink";
import { Link } from "react-router-dom";

export class ItemShare extends React.Component<{encodedItem?: string, match: { params: any }}> {

    render() {
        const link = this.props.match.params.encodedItem;
        const item: Item = JSON.parse(decodeURIComponent(link ?? '{}'));
        const url = createLink(item);
        return (<div>
            <Helmet>
                <title>{ item.name }</title>
                <meta property="og:image" content={item.image} />
                <meta property="og:url" content={url} />
            </Helmet>

            <div className="nav-link-container">
                <Link to={"/itemCreator/" + (link ?? '')} className="nav-link">&lt;CREATE YOUR OWN&gt;</Link>
            </div>

            <ItemShowcase item={item}></ItemShowcase>
        </div>);
    }
}