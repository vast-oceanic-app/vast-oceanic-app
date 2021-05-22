import React from "react";
import './ItemIconMenuItem.css'

export class ItemIconMenuItem extends React.Component<{ children?: string }> {
    constructor(props: { children?: string }) {
        super(props);
    }

    render() {
        return (
            <div className="menu-item-image-container">
                <img className="item-image" src={this.props.children}></img>
            </div>
        );
    }
}