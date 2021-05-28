import React from 'react';
import { Item, Stat, StatColors } from './item';
import './ItemShowcase.css'

export class ItemShowcase extends React.Component<{item: Item}> {
    constructor(props: {item: Item}) {
        super(props);
        this.renderStats = this.renderStats.bind(this)
        this.renderImage = this.renderImage.bind(this)
    }

    render() {
        return (
        <div id="item-showcase" className="item-showcase row flex-nowrap">
            <div className="col-auto col-image">
                {/* <div className="item-image" style={ { backgroundImage: 'url(' + this.props.item.image + ')' }}></div> */}
                { this.renderImage() }
            </div>
            <div className="item-info-container">
                <div className="item-name">
                    { this.props.item.name }
                </div>
                <svg className="textbreak" width="100" viewBox="0 0 100 1" xmlns="http://www.w3.org/2000/svg">                    
                    <defs>
                      <filter id="f1" x="0" y="0">
                        {/* <feGaussianBlur in="SourceGraphic" stdDeviation="1" /> */}
                        <feTurbulence type="fractalNoise" baseFrequency="2.5" numOctaves="5" stitchTiles="stitch" result="f1">
                        </feTurbulence>
                        <feColorMatrix type="matrix" values="0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 -2.0 1.5" result="f2">
                        </feColorMatrix>
                        <feComposite operator="in" in2="f2b" in="SourceGraphic" result="f3">
                        </feComposite>
                        <feTurbulence type="fractalNoise" baseFrequency="2.5" numOctaves="3" result="noise">
                        </feTurbulence>
                        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="0.25" in="f3" result="f4">
                        </feDisplacementMap>
                      </filter>
                    </defs>
                    <rect x="0" y="0" width="100" height="0.25" fill="#FFFFFF" filter="url(#f1)"/>
                    {/* <line x1="0" y1="0" x2="100" y2="0" stroke="#FFFFFF" strokeWidth="5" filter="url(#f1)"/> */}
                </svg>
                <div className="item-stat-container">
                    { this.renderStats() }
                </div>
            </div>
        </div>
        );
    }

    renderStats() {
        if (!this.props.item.stats) return null;
        return this.props.item.stats.map((s, index) => (
            <div key={index} className="item-stat">
                <span className="stat-modifier">{((s.modifier >= 0) && '+')}{ s.modifier.toString() }</span>
                <span className="stat-name" style={ { color: s.stat?.color ?? StatColors.Misc }} >{ ' ' + (s.stat?.name ?? '') }</span>
                {(this.props.item.displayType == 'conceptual' && <span className="stat-comment">{(!!s.comment && ': ')}{ s.comment }</span>)}
            </div>));
    }

    renderImage() {
        return <div className="item-image-container">
                <div className="item-image-border"></div>
                <img className="item-image" src={this.props.item.image}></img>
            </div>;
    }
}