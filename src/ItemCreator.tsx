import React, { RefObject } from "react";
import './ItemCreator.css';
import { Item, Stat, StatColors, StatModifier } from "./item";
import { ItemFieldsEditor } from "./ItemFieldsEditor";
import { ItemShowcase } from "./ItemShowcase";
import Popup from "reactjs-popup";
import { PopupActions } from "reactjs-popup/dist/types";
import { ItemShowcasePopup } from "./ItemShowcasePopup";

export class ItemCreator extends React.Component<{match: { params: any }}, { item: Item, open: boolean, popupRef: RefObject<PopupActions>}> {

    constructor(props: {match: { params: any }}) {
        super(props);

        const ref = React.createRef<PopupActions>();
        this.closeTooltip = () => ref?.current?.close();

        // const item = new Item('Slavic Shirt', 'https://static.wikia.nocookie.net/discoelysium_gamepedia_en/images/b/b5/Shirt_dress_disco.png', [
        //   new StatModifier(1, new Stat('Inland Empire', '#523f89'), 'Mysterious russian soul'),
        //   new StatModifier(20, new Stat('years to Putin\'s presidency', '#9a998f'), 'Somehow incompatible with democratic ideals')
        // ]);
        let item = new Item('Kim\'s Bomber Jacket', process.env.PUBLIC_URL + '/item-icons/kims_jacket_4.png', [
            new StatModifier(1, new Stat('Hand-Eye Coordination', StatColors.MOT), 'Airman Kitsuragi'),
            new StatModifier(1, new Stat('Volta do Mar', StatColors.FYS), 'A feather on the wind')
          ],
          'conceptual');
        if (this.props.match.params.encodedItem) {
            item = JSON.parse(decodeURIComponent(this.props.match.params.encodedItem));;
        } 
        this.state = { item: item, open: false, popupRef: ref };

        this.onItemChange.bind(this);
    }

    closeTooltip: () => void | undefined;

    render() {
        const closeModal = () => this.setState({ open: false });

        return (<div><div className="row item-creator">
            <div className="d-none d-lg-block col-lg-6">
                <ItemShowcase item={this.state.item}></ItemShowcase>
            </div>
            <div className="col-lg-6">
                <ItemFieldsEditor initialItem={this.state.item} itemChange={this.onItemChange.bind(this)}></ItemFieldsEditor>
                <Popup onClose={closeModal}
                    ref={this.state.popupRef}
                    position="bottom right"
                    open={this.state.open}
                    closeOnDocumentClick
                    mouseLeaveDelay={300}
                    mouseEnterDelay={0}
                    contentStyle={{ padding: '0px', border: 'none' }}
                    arrow={false}
                    modal
                    className="show-case"
                >
                    {(close: () => void) => (<ItemShowcasePopup item={this.state.item} close={close}></ItemShowcasePopup>)}

                </Popup>
            </div>
        </div>
            <div id="show-case-hidden">
                <ItemShowcase item={this.state.item}></ItemShowcase>
            </div>
        </div>);
    }

    onItemChange(item: Item) {
        this.setState({item: item});
        if (window.innerWidth <= 992) {
            // show showcase in popup
            this.setState({open: true});
        }
    }
}