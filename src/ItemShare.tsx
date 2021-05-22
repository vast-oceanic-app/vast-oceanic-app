import React from "react";
import { Item } from "./item";
import { ItemShowcase } from "./ItemShowcase";

export class ItemShare extends React.Component<{encodedItem?: string, path: string}> {

    render() {
        const item: Item = JSON.parse(decodeURIComponent(this.props.encodedItem ?? '')) ;
        return (<ItemShowcase item={item}></ItemShowcase>);
    }
}