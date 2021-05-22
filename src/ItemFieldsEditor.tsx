import React, { RefObject, useRef } from "react";
import { Select } from 'react-select-tile';
import './ItemFieldsEditor.css';
import { Item, Stat, StatColors, StatModifier } from "./item";

import CreatableSelect from 'react-select/creatable';
import Creatable, { makeCreatableSelect } from 'react-select/creatable';
import { ItemIconMenuItem } from "./ItemIconMenuItem";
import { Popup } from "reactjs-popup";
import { PopupActions } from "reactjs-popup/dist/types";
import { IconSelector } from "./IconSelector";
import { StylesConfig } from "react-select";
import { StatModifierEditor } from "./StatModifierEditor";
import { v4 as uuidv4 } from 'uuid';

export class ItemFieldsEditor extends React.Component<{ initialItem: Item, itemChange: (item: Item) => void }, { item: Item, popupRef: RefObject<PopupActions> }> {
    constructor(props: { initialItem: Item, itemChange: (item: Item) => void }) {
        super(props);

        const ref = React.createRef<PopupActions>();

        this.state = { item: props.initialItem, popupRef: ref };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.iconChange = this.iconChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.renderStatsEditor = this.renderStatsEditor.bind(this);
    }

    handleNameChange(event: any) {
        this.state.item.name = event.target.value;
        this.setState({ item: this.state.item });
    }
    handleSubmit(event: any) {
        event.preventDefault();
    }


    render() {
        return (
            <div className="item-fields-editor">
                <form onSubmit={this.handleSubmit}>
                    <label className="field-label ml-3"> Name: </label>
                    <input className="item-name-input ml-3 mr-3" type="text" value={this.state.item.name} onChange={this.handleNameChange} />
                    <label className="field-label ml-3"> Icon(click to select or type your own) </label>
                    <div className="ml-3">
                        <IconSelector url={this.state.item.image} urlChange={this.iconChange}></IconSelector>
                    </div>
                    <button className="add-button ml-3" onClick={(e) => this.handleClick()}>ADD ITEM STAT</button>
                    {this.renderStatsEditor()}
                    <button className="continue-button ml-3" onClick={(e) => this.props.itemChange(this.state.item)}>TRY IT!</button>
                </form>
            </div>
        );
    }

    iconChange(url: string) {
        this.state.item.image = url;
        this.setState({ item: this.state.item });
    }

    handleClick() {
        const stat = new StatModifier(1, new Stat('Inland Empire', StatColors.PSY), 'Bratan!')
        this.state.item.stats.push(stat);
        this.setState({ item: this.state.item });
    }

    renderStatsEditor() {
        return (<div>
            {/* <div className="item-stat-editor row">
                <label className="stat-modifier-header">Modifier</label>
                <label className="stat-name-header">Stat</label>
                <label className="stat-comment-header">Comment</label>
                <label className="stat-remove-header">Remove</label>
            </div> */}
            { this.renderStatRows()}
        </div>);
    }

    renderStatRows() {
        if (!this.state.item.stats) return null;
        return this.state.item.stats.map((s, index) => (
            <StatModifierEditor key={uuidv4()} stat={s} statChange={(s)=>{}} statRemove={() => this.removeStat(index)}></StatModifierEditor>));
    }


    removeStat(index: number) {
        this.state.item.stats.splice(index, 1);
        this.setState({ item: this.state.item });
    }

    // renderStatsEditor() {
    //     if (!this.state.item.stats) return null;
    //     return this.state.item.stats.map((s, index) => (
    //         <div key={index} className="item-stat">
    //             <span className="stat-modifier">{ ((s.modifier > 0) && '+') + s.modifier.toString() }</span>
    //             <span className="stat-name" style={ { color: s.stat.color }} >{ ' ' + s.stat.name }</span>
    //             <span className="stat-comment">{ (!!s.comment && ': ') + s.comment }</span>
    //         </div>));
    // }

    
}