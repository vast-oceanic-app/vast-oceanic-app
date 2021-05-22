import React, { RefObject } from "react";
import { Popup } from "reactjs-popup";
import { PopupActions } from "reactjs-popup/dist/types";
import './IconSelector.css'

export class IconSelector extends React.Component<{ url: string, urlChange: (item: string) => void }, {popupRef: RefObject<PopupActions>}> {
    constructor(props: { url: string, urlChange: (item: string) => void }) {
        super(props);

        const ref = React.createRef<PopupActions>();
        this.closeTooltip = () => ref?.current?.close();

        this.state = { popupRef: ref };
        this.renderOptions = this.renderOptions.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.renderImage = this.renderImage.bind(this);
    }

    closeTooltip: () => void | undefined;

    render() {
        return (
            <Popup
                        ref={this.state.popupRef}
                        trigger={this.renderImage()}
                        position="bottom left"
                        on="click"
                        closeOnDocumentClick
                        mouseLeaveDelay={300}
                        mouseEnterDelay={0}
                        contentStyle={{ padding: '0px', border: 'none' }}
                        arrow={false}
                        className="icon-selector"
                    >
                        <div className="menu row mx-0">
                            {this.renderOptions()}
                        </div>
                    </Popup>
        );
    }
    renderOptions() {
        const options = [
            { value: "kims_jacket_4", label: "/item-icons/kims_jacket_4.png" },
            { value: "kims_jacket_black_4", label: "/item-icons/kims_jacket_black_4.png" },
            { value: "Hat_amphibian_sports_visor", label: "/item-icons/Hat_amphibian_sports_visor.webp" },
            { value: "Hat_bum", label: "/item-icons/Hat_bum.webp" },
            { value: "Hat_camionneur", label: "/item-icons/Hat_camionneur.webp" },
            { value: "Hat_faln", label: "/item-icons/Hat_faln.webp" },
            { value: "Hat_mullen", label: "/item-icons/Hat_mullen.webp" },
            { value: "Hat_rcm", label: "/item-icons/Hat_rcm.webp" },
            { value: "Hat_revolutionary", label: "/item-icons/Hat_revolutionary.webp" },
            { value: "Hat_samaran", label: "/item-icons/Hat_samaran.webp" },
            { value: "Glasses_biker", label: "/item-icons/Glasses_biker.webp" },
            { value: "Glasses_bugeyes", label: "/item-icons/Glasses_bugeyes.webp" },
            { value: "Glasses_flipup", label: "/item-icons/Glasses_flipup.webp" },
            { value: "Glasses_megabinos", label: "/item-icons/Glasses_megabinos.webp" },
            { value: "Glasses_rect", label: "/item-icons/Glasses_rect.webp" },
            { value: "Glasses_self_destruction", label: "/item-icons/Glasses_self_destruction.webp" },
            { value: "Glasses_sub_insulindics", label: "/item-icons/Glasses_sub_insulindics.webp" },
            { value: "Jacket_carabineer", label: "/item-icons/Jacket_carabineer.webp" },
            { value: "Jacket_faln", label: "/item-icons/Jacket_faln.webp" },
            { value: "Jacket_fritte_raincoat", label: "/item-icons/Jacket_fritte_raincoat.webp" },
            { value: "Jacket_fucktheworld", label: "/item-icons/Jacket_fucktheworld.webp" },
            { value: "Jacket_interisolar", label: "/item-icons/Jacket_interisolar.webp" },
            { value: "Jacket_interisolar_white", label: "/item-icons/Jacket_interisolar_white.webp" },
            { value: "Jacket_kimono_robe", label: "/item-icons/Jacket_kimono_robe.webp" },
            { value: "Jacket_korovjev", label: "/item-icons/Jacket_korovjev.webp" },
            { value: "Jacket_mullen", label: "/item-icons/Jacket_mullen.webp" },
            { value: "Jacket_nansencoat", label: "/item-icons/Jacket_nansencoat.webp" },
            { value: "Jacket_navalcoat", label: "/item-icons/Jacket_navalcoat.webp" },
            { value: "Jacket_patrol_cloak", label: "/item-icons/Jacket_patrol_cloak.webp" },
            { value: "Jacket_pissflaubert", label: "/item-icons/Jacket_pissflaubert.webp" },
            { value: "Jacket_rcm", label: "/item-icons/Jacket_rcm.webp" },
            { value: "Jacket_suede", label: "/item-icons/Jacket_suede.webp" },
            { value: "Jacket_windbreaker_surf", label: "/item-icons/Jacket_windbreaker_surf.webp" },
            { value: "Neck_bowtie", label: "/item-icons/Neck_bowtie.webp" },
            { value: "Neck_scented_scarf", label: "/item-icons/Neck_scented_scarf.webp" },
            { value: "Neck_setting_sun_medal", label: "/item-icons/Neck_setting_sun_medal.webp" },
            { value: "Neck_teratorn_tie", label: "/item-icons/Neck_teratorn_tie.webp" },
            { value: "Neck_tie", label: "/item-icons/Neck_tie.webp" },
            { value: "Neck_winter_scarf", label: "/item-icons/Neck_winter_scarf.webp" },
            { value: "Neck_winter_scarf_red", label: "/item-icons/Neck_winter_scarf_red.webp" },
            { value: "Shirt_dress_disco", label: "/item-icons/Shirt_dress_disco.webp" },
            { value: "Shirt_faln", label: "/item-icons/Shirt_faln.webp" },
            { value: "Shirt_hjelmdall", label: "/item-icons/Shirt_hjelmdall.webp" },
            { value: "Shirt_interisolar", label: "/item-icons/Shirt_interisolar.webp" },
            { value: "Shirt_mesh", label: "/item-icons/Shirt_mesh.webp" },
            { value: "Shirt_polo", label: "/item-icons/Shirt_polo.webp" },
            { value: "Shirt_t500", label: "/item-icons/Shirt_t500.webp" },
            { value: "Shirt_tank_top", label: "/item-icons/Shirt_tank_top.webp" },
            { value: "Gloves_bum", label: "/item-icons/Gloves_bum.webp" },
            { value: "Gloves_faln", label: "/item-icons/Gloves_faln.webp" },
            { value: "Gloves_garden", label: "/item-icons/Gloves_garden.webp" },
            { value: "Gloves_t500", label: "/item-icons/Gloves_t500.webp" },
            { value: "Pants_bellbottom", label: "/item-icons/Pants_bellbottom.webp" },
            { value: "Pants_carabineer", label: "/item-icons/Pants_carabineer.webp" },
            { value: "Pants_faln", label: "/item-icons/Pants_faln.webp" },
            { value: "Pants_interisolar", label: "/item-icons/Pants_interisolar.webp" },
            { value: "Pants_interisolar_white", label: "/item-icons/Pants_interisolar_white.webp" },
            { value: "Pants_itchy_angry", label: "/item-icons/Pants_itchy_angry.webp" },
            { value: "Pants_jeans", label: "/item-icons/Pants_jeans.webp" },
            { value: "Pants_jeans_black", label: "/item-icons/Pants_jeans_black.webp" },
            { value: "Pants_jeans_red", label: "/item-icons/Pants_jeans_red.webp" },
            { value: "Pants_rcm", label: "/item-icons/Pants_rcm.webp" },
            { value: "Shoes_cavalry", label: "/item-icons/Shoes_cavalry.webp" },
            { value: "Shoes_faln", label: "/item-icons/Shoes_faln.webp" },
            { value: "Shoes_fancy_loafer", label: "/item-icons/Shoes_fancy_loafer.webp" },
            { value: "Shoes_fancy_loafer_brown", label: "/item-icons/Shoes_fancy_loafer_brown.webp" },
            { value: "Shoes_snakeskin", label: "/item-icons/Shoes_snakeskin.webp" },
            { value: "Shoes_snakeskin_red", label: "/item-icons/Shoes_snakeskin_red.webp" },
            { value: "Shoes_t500", label: "/item-icons/Shoes_t500.webp" },
            { value: "Boombox", label: "/item-icons/Boombox.webp" },
            { value: "Chaincutters", label: "/item-icons/Chaincutters.webp" },
            { value: "Flashlight", label: "/item-icons/Flashlight.webp" },
            { value: "Gun_ruby", label: "/item-icons/Gun_ruby.webp" },
            { value: "Gun_villiers", label: "/item-icons/Gun_villiers.webp" },
            { value: "Ledger_of_failure_and_hatred", label: "/item-icons/Ledger_of_failure_and_hatred.webp" },
            { value: "Medal_rene", label: "/item-icons/Medal_rene.webp" },
            { value: "Missing_jacket_filthy", label: "/item-icons/Missing_jacket_filthy.webp" },
            { value: "Sabre_big", label: "/item-icons/Sabre_big.webp" }
          ];

        return options.map((s, index) => (
            <div key={index} className="menu-item-image-container col-auto">
                <img className="item-image" src={s.label} onClick={(e) => this.handleClick(s.label)}></img>
            </div>));
    }

    handleClick(url: string) {
        this.closeTooltip();
        this.props.urlChange(url);
    }

    renderImage() {
        return <div className="item-image-container">
                <div className="item-image-border"></div>
                <img className="item-image" src={this.props.url}></img>
            </div>;
    }
}