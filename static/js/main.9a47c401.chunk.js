(this["webpackJsonpmy-vast-oceanic-app"]=this["webpackJsonpmy-vast-oceanic-app"]||[]).push([[0],{42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);a(37);var n=a(0),i=a.n(n),s=a(19),l=a.n(s),c=(a(42),a(13)),o=(a(43),a(5)),r=function e(t,a,n){Object(o.a)(this,e),this.name=t,this.image=a,this.stats=n},b=function e(t,a,n){Object(o.a)(this,e),this.modifier=t,this.stat=a,this.comment=n},m=function e(t,a){Object(o.a)(this,e),this.name=t,this.color=a},u=function e(){Object(o.a)(this,e)};u.INT="#4798a8",u.PSY="#523f89",u.FYS="#993550",u.MOT="#e5b934",u.Misc="#9a998f";var h=a(7),p=a(9),d=a(8),j=a(6),_=(a(44),a(1)),v=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).renderStats=n.renderStats.bind(Object(j.a)(n)),n.renderImage=n.renderImage.bind(Object(j.a)(n)),n}return Object(h.a)(a,[{key:"render",value:function(){return Object(_.jsxs)("div",{className:"item-showcase row flex-nowrap",children:[Object(_.jsx)("div",{className:"col-auto",children:this.renderImage()}),Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:"item-name",children:this.props.item.name}),Object(_.jsxs)("svg",{className:"textbreak",width:"100%",viewBox:"0 0 100 1",xmlns:"http://www.w3.org/2000/svg",children:[Object(_.jsx)("defs",{children:Object(_.jsxs)("filter",{id:"f1",x:"0",y:"0",children:[Object(_.jsx)("feTurbulence",{type:"fractalNoise",baseFrequency:"2.5",numOctaves:"5",stitchTiles:"stitch",result:"f1"}),Object(_.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 -2.0 1.5",result:"f2"}),Object(_.jsx)("feComposite",{operator:"in",in2:"f2b",in:"SourceGraphic",result:"f3"}),Object(_.jsx)("feTurbulence",{type:"fractalNoise",baseFrequency:"2.5",numOctaves:"3",result:"noise"}),Object(_.jsx)("feDisplacementMap",{xChannelSelector:"R",yChannelSelector:"G",scale:"0.25",in:"f3",result:"f4"})]})}),Object(_.jsx)("rect",{x:"0",y:"0",width:"100",height:"0.25",fill:"#FFFFFF",filter:"url(#f1)"})]}),Object(_.jsx)("div",{children:this.renderStats()})]})]})}},{key:"renderStats",value:function(){return this.props.item.stats?this.props.item.stats.map((function(e,t){return Object(_.jsxs)("div",{className:"item-stat",children:[Object(_.jsxs)("span",{className:"stat-modifier",children:[e.modifier>0&&"+",e.modifier.toString()]}),Object(_.jsx)("span",{className:"stat-name",style:{color:e.stat.color},children:" "+e.stat.name}),Object(_.jsxs)("span",{className:"stat-comment",children:[!!e.comment&&": ",e.comment]})]},t)})):null}},{key:"renderImage",value:function(){return Object(_.jsxs)("div",{className:"item-image-container",children:[Object(_.jsx)("div",{className:"item-image-border"}),Object(_.jsx)("img",{className:"item-image",src:this.props.item.image})]})}}]),a}(i.a.Component),f=a(30),w=function(e){return window.location.origin+"/vast-oceanic-app#/itemShare/"+encodeURIComponent(JSON.stringify(e))},O=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e,t=JSON.parse(decodeURIComponent(null!==(e=this.props.match.params.encodedItem)&&void 0!==e?e:"{}")),a=w(t);return Object(_.jsxs)("div",{children:[Object(_.jsxs)(f.a,{children:[Object(_.jsx)("title",{children:"Nested Title"}),Object(_.jsx)("meta",{name:"description",content:"Some description."}),Object(_.jsx)("meta",{property:"og:title",content:"MyApp"}),Object(_.jsx)("meta",{property:"og:description",content:"MyApp"}),Object(_.jsx)("meta",{property:"og:image",content:t.image}),Object(_.jsx)("meta",{property:"og:url",content:a})]}),Object(_.jsx)(v,{item:t})]})}}]),a}(i.a.Component),g=(a(48),a(49),a(22)),k=(a(50),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;Object(o.a)(this,a),(n=t.call(this,e)).closeTooltip=void 0;var s=i.a.createRef();return n.closeTooltip=function(){var e;return null===s||void 0===s||null===(e=s.current)||void 0===e?void 0:e.close()},n.state={popupRef:s},n.renderOptions=n.renderOptions.bind(Object(j.a)(n)),n.handleClick=n.handleClick.bind(Object(j.a)(n)),n.renderImage=n.renderImage.bind(Object(j.a)(n)),n}return Object(h.a)(a,[{key:"render",value:function(){return Object(_.jsx)(g.a,{ref:this.state.popupRef,trigger:this.renderImage(),position:"bottom left",on:"click",closeOnDocumentClick:!0,mouseLeaveDelay:300,mouseEnterDelay:0,contentStyle:{padding:"0px",border:"none"},arrow:!1,className:"icon-selector",children:Object(_.jsx)("div",{className:"menu row mx-0",children:this.renderOptions()})})}},{key:"renderOptions",value:function(){var e=this;return[{value:"kims_jacket_4",label:"/item-icons/kims_jacket_4.png"},{value:"kims_jacket_black_4",label:"/item-icons/kims_jacket_black_4.png"},{value:"Hat_amphibian_sports_visor",label:"/item-icons/Hat_amphibian_sports_visor.webp"},{value:"Hat_bum",label:"/item-icons/Hat_bum.webp"},{value:"Hat_camionneur",label:"/item-icons/Hat_camionneur.webp"},{value:"Hat_faln",label:"/item-icons/Hat_faln.webp"},{value:"Hat_mullen",label:"/item-icons/Hat_mullen.webp"},{value:"Hat_rcm",label:"/item-icons/Hat_rcm.webp"},{value:"Hat_revolutionary",label:"/item-icons/Hat_revolutionary.webp"},{value:"Hat_samaran",label:"/item-icons/Hat_samaran.webp"},{value:"Glasses_biker",label:"/item-icons/Glasses_biker.webp"},{value:"Glasses_bugeyes",label:"/item-icons/Glasses_bugeyes.webp"},{value:"Glasses_flipup",label:"/item-icons/Glasses_flipup.webp"},{value:"Glasses_megabinos",label:"/item-icons/Glasses_megabinos.webp"},{value:"Glasses_rect",label:"/item-icons/Glasses_rect.webp"},{value:"Glasses_self_destruction",label:"/item-icons/Glasses_self_destruction.webp"},{value:"Glasses_sub_insulindics",label:"/item-icons/Glasses_sub_insulindics.webp"},{value:"Jacket_carabineer",label:"/item-icons/Jacket_carabineer.webp"},{value:"Jacket_faln",label:"/item-icons/Jacket_faln.webp"},{value:"Jacket_fritte_raincoat",label:"/item-icons/Jacket_fritte_raincoat.webp"},{value:"Jacket_fucktheworld",label:"/item-icons/Jacket_fucktheworld.webp"},{value:"Jacket_interisolar",label:"/item-icons/Jacket_interisolar.webp"},{value:"Jacket_interisolar_white",label:"/item-icons/Jacket_interisolar_white.webp"},{value:"Jacket_kimono_robe",label:"/item-icons/Jacket_kimono_robe.webp"},{value:"Jacket_korovjev",label:"/item-icons/Jacket_korovjev.webp"},{value:"Jacket_mullen",label:"/item-icons/Jacket_mullen.webp"},{value:"Jacket_nansencoat",label:"/item-icons/Jacket_nansencoat.webp"},{value:"Jacket_navalcoat",label:"/item-icons/Jacket_navalcoat.webp"},{value:"Jacket_patrol_cloak",label:"/item-icons/Jacket_patrol_cloak.webp"},{value:"Jacket_pissflaubert",label:"/item-icons/Jacket_pissflaubert.webp"},{value:"Jacket_rcm",label:"/item-icons/Jacket_rcm.webp"},{value:"Jacket_suede",label:"/item-icons/Jacket_suede.webp"},{value:"Jacket_windbreaker_surf",label:"/item-icons/Jacket_windbreaker_surf.webp"},{value:"Neck_bowtie",label:"/item-icons/Neck_bowtie.webp"},{value:"Neck_scented_scarf",label:"/item-icons/Neck_scented_scarf.webp"},{value:"Neck_setting_sun_medal",label:"/item-icons/Neck_setting_sun_medal.webp"},{value:"Neck_teratorn_tie",label:"/item-icons/Neck_teratorn_tie.webp"},{value:"Neck_tie",label:"/item-icons/Neck_tie.webp"},{value:"Neck_winter_scarf",label:"/item-icons/Neck_winter_scarf.webp"},{value:"Neck_winter_scarf_red",label:"/item-icons/Neck_winter_scarf_red.webp"},{value:"Shirt_dress_disco",label:"/item-icons/Shirt_dress_disco.webp"},{value:"Shirt_faln",label:"/item-icons/Shirt_faln.webp"},{value:"Shirt_hjelmdall",label:"/item-icons/Shirt_hjelmdall.webp"},{value:"Shirt_interisolar",label:"/item-icons/Shirt_interisolar.webp"},{value:"Shirt_mesh",label:"/item-icons/Shirt_mesh.webp"},{value:"Shirt_polo",label:"/item-icons/Shirt_polo.webp"},{value:"Shirt_t500",label:"/item-icons/Shirt_t500.webp"},{value:"Shirt_tank_top",label:"/item-icons/Shirt_tank_top.webp"},{value:"Gloves_bum",label:"/item-icons/Gloves_bum.webp"},{value:"Gloves_faln",label:"/item-icons/Gloves_faln.webp"},{value:"Gloves_garden",label:"/item-icons/Gloves_garden.webp"},{value:"Gloves_t500",label:"/item-icons/Gloves_t500.webp"},{value:"Pants_bellbottom",label:"/item-icons/Pants_bellbottom.webp"},{value:"Pants_carabineer",label:"/item-icons/Pants_carabineer.webp"},{value:"Pants_faln",label:"/item-icons/Pants_faln.webp"},{value:"Pants_interisolar",label:"/item-icons/Pants_interisolar.webp"},{value:"Pants_interisolar_white",label:"/item-icons/Pants_interisolar_white.webp"},{value:"Pants_itchy_angry",label:"/item-icons/Pants_itchy_angry.webp"},{value:"Pants_jeans",label:"/item-icons/Pants_jeans.webp"},{value:"Pants_jeans_black",label:"/item-icons/Pants_jeans_black.webp"},{value:"Pants_jeans_red",label:"/item-icons/Pants_jeans_red.webp"},{value:"Pants_rcm",label:"/item-icons/Pants_rcm.webp"},{value:"Shoes_cavalry",label:"/item-icons/Shoes_cavalry.webp"},{value:"Shoes_faln",label:"/item-icons/Shoes_faln.webp"},{value:"Shoes_fancy_loafer",label:"/item-icons/Shoes_fancy_loafer.webp"},{value:"Shoes_fancy_loafer_brown",label:"/item-icons/Shoes_fancy_loafer_brown.webp"},{value:"Shoes_snakeskin",label:"/item-icons/Shoes_snakeskin.webp"},{value:"Shoes_snakeskin_red",label:"/item-icons/Shoes_snakeskin_red.webp"},{value:"Shoes_t500",label:"/item-icons/Shoes_t500.webp"},{value:"Boombox",label:"/item-icons/Boombox.webp"},{value:"Chaincutters",label:"/item-icons/Chaincutters.webp"},{value:"Flashlight",label:"/item-icons/Flashlight.webp"},{value:"Gun_ruby",label:"/item-icons/Gun_ruby.webp"},{value:"Gun_villiers",label:"/item-icons/Gun_villiers.webp"},{value:"Ledger_of_failure_and_hatred",label:"/item-icons/Ledger_of_failure_and_hatred.webp"},{value:"Medal_rene",label:"/item-icons/Medal_rene.webp"},{value:"Missing_jacket_filthy",label:"/item-icons/Missing_jacket_filthy.webp"},{value:"Sabre_big",label:"/item-icons/Sabre_big.webp"}].map((function(t,a){return Object(_.jsx)("div",{className:"menu-item-image-container col-auto",children:Object(_.jsx)("img",{className:"item-image",src:"/vast-oceanic-app"+t.label,onClick:function(a){return e.handleClick(t.label)}})},a)}))}},{key:"handleClick",value:function(e){this.closeTooltip(),this.props.urlChange(e)}},{key:"renderImage",value:function(){return Object(_.jsxs)("div",{className:"item-image-container",children:[Object(_.jsx)("div",{className:"item-image-border"}),Object(_.jsx)("img",{className:"item-image",src:this.props.url})]})}}]),a}(i.a.Component)),S=a(36),x=(a(58),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleModifierChange=function(e){n.state.stat.modifier=e.target.value,n.setState({stat:n.state.stat}),n.props.statChange(n.state.stat)},n.handleCommentChange=function(e){n.state.stat.comment=e.target.value,n.setState({stat:n.state.stat}),n.props.statChange(n.state.stat)},n.handleChange=function(e,t){n.state.stat.stat=e,n.setState({stat:n.state.stat}),n.props.statChange(n.state.stat)},n.state={stat:e.stat},n}return Object(h.a)(a,[{key:"render",value:function(){var e=[{label:"INT",options:[new m("Logic",u.INT),new m("Encyclopedia",u.INT),new m("Rhetoric",u.INT),new m("Drama",u.INT),new m("Conceptualization",u.INT),new m("Visual Calculus",u.INT)]},{label:"PSY",options:[new m("Volition",u.PSY),new m("Inland Empire",u.PSY),new m("Empathy",u.PSY),new m("Authority",u.PSY),new m("Esprit de Corps",u.PSY),new m("Suggestion",u.PSY)]},{label:"FYS",options:[new m("Endurance",u.FYS),new m("Pain Threshold",u.FYS),new m("Physical Instrument",u.FYS),new m("Electro-Chemistry",u.FYS),new m("Shivers",u.FYS),new m("Half Light",u.FYS)]},{label:"MOT",options:[new m("Hand-Eye Coordination",u.MOT),new m("Perception",u.MOT),new m("Reaction Speed",u.MOT),new m("Savoir Faire",u.MOT),new m("Interfacing",u.MOT),new m("Composure",u.MOT)]},{label:"MISC",options:[new m("Volta do Mar",u.FYS)]}],t={option:function(e,t){return Object(c.a)(Object(c.a)({},e),{},{color:t.data.color})},singleValue:function(e,t){return Object(c.a)(Object(c.a)({},e),{},{color:t.data.color})}};return Object(_.jsxs)("div",{className:"item-stat-editor row",children:[Object(_.jsx)("div",{className:"col-2 col-lg-auto mt-3",children:Object(_.jsx)("input",{className:"stat-modifier-input ml-3",type:"number",placeholder:"Modifier",value:this.state.stat.modifier,onChange:this.handleModifierChange})}),Object(_.jsx)("div",{className:"col-10 col-lg-auto mt-3",children:Object(_.jsx)(S.a,{className:"stat-name-input mr-3 mr-lg-0",isClearable:!0,placeholder:"Select stat or type in your own...",defaultValue:this.state.stat.stat,onChange:this.handleChange,options:e,getNewOptionData:function(e,t){return new m(e,u.Misc)},getOptionValue:function(e){return e.name},getOptionLabel:function(e){return e.name},styles:t,theme:function(e){return Object(c.a)(Object(c.a)({},e),{},{borderRadius:0,colors:Object(c.a)(Object(c.a)({},e.colors),{},{primary:"white",primary75:"green",primary50:"white",primary25:"white",neutral0:"black",neutral5:"green",neutral10:"red",neutral20:"white",neutral30:"white",neutral40:"white"})})}})}),Object(_.jsx)("div",{className:"col-10 col-lg-auto mt-3",children:Object(_.jsx)("input",{className:"stat-comment-input ml-3 ml-lg-0",type:"text",placeholder:"Comment",value:this.state.stat.comment,onChange:this.handleCommentChange})}),Object(_.jsx)("div",{className:"col-2 col-lg-auto mt-3",children:Object(_.jsx)("button",{className:"stat-remove  mr-3",onClick:this.props.statRemove,children:"X"})})]})}}]),a}(i.a.Component)),y=a(76),C=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;Object(o.a)(this,a),n=t.call(this,e);var s=i.a.createRef();return n.state={item:e.initialItem,popupRef:s},n.handleNameChange=n.handleNameChange.bind(Object(j.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(j.a)(n)),n.iconChange=n.iconChange.bind(Object(j.a)(n)),n.handleClick=n.handleClick.bind(Object(j.a)(n)),n.renderStatsEditor=n.renderStatsEditor.bind(Object(j.a)(n)),n}return Object(h.a)(a,[{key:"handleNameChange",value:function(e){this.state.item.name=e.target.value,this.setState({item:this.state.item})}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(_.jsx)("div",{className:"item-fields-editor",children:Object(_.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(_.jsx)("label",{className:"field-label ml-3",children:" Name: "}),Object(_.jsx)("input",{className:"item-name-input ml-3 mr-3",type:"text",value:this.state.item.name,onChange:this.handleNameChange}),Object(_.jsx)("label",{className:"field-label ml-3",children:" Icon(click to select or type your own) "}),Object(_.jsx)("div",{className:"ml-3",children:Object(_.jsx)(k,{url:this.state.item.image,urlChange:this.iconChange})}),Object(_.jsx)("button",{className:"add-button ml-3",onClick:function(t){return e.handleClick()},children:"ADD ITEM STAT"}),this.renderStatsEditor(),Object(_.jsx)("button",{className:"continue-button ml-3",onClick:function(t){return e.props.itemChange(e.state.item)},children:"TRY IT!"})]})})}},{key:"iconChange",value:function(e){this.state.item.image=e,this.setState({item:this.state.item})}},{key:"handleClick",value:function(){var e=new b(1,new m("Inland Empire",u.PSY),"Bratan!");this.state.item.stats.push(e),this.setState({item:this.state.item})}},{key:"renderStatsEditor",value:function(){return Object(_.jsx)("div",{children:this.renderStatRows()})}},{key:"renderStatRows",value:function(){var e=this;return this.state.item.stats?this.state.item.stats.map((function(t,a){return Object(_.jsx)(x,{stat:t,statChange:function(e){},statRemove:function(){return e.removeStat(a)}},Object(y.a)())})):null}},{key:"removeStat",value:function(e){this.state.item.stats.splice(e,1),this.setState({item:this.state.item})}}]),a}(i.a.Component),N=a(68),I=a(69),J=a(70),P=a(71),T=a(72),G=a(73),M=a(74),F=a(75),R=(a(59),a(33)),Y=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=w(this.props.item);return Object(_.jsxs)("div",{className:"show-case-popup",children:[Object(_.jsx)(v,{item:this.props.item}),Object(_.jsx)("button",{className:"action-button action-button-big mt-2",onClick:function(){return e.props.close()},children:"BACK"}),Object(_.jsx)(N.a,{url:t,children:Object(_.jsx)(I.a,{size:25})}),Object(_.jsx)(J.a,{url:t,children:Object(_.jsx)(P.a,{size:25})}),Object(_.jsx)(T.a,{url:t,children:Object(_.jsx)(G.a,{size:25})}),Object(_.jsx)(M.a,{url:t,children:Object(_.jsx)(F.a,{size:25})}),Object(_.jsx)(R.CopyToClipboard,{text:t,children:Object(_.jsx)("button",{children:"Copy link to clipboard"})})]})}}]),a}(i.a.Component),E=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;Object(o.a)(this,a),(n=t.call(this,e)).closeTooltip=void 0;var s=i.a.createRef();n.closeTooltip=function(){var e;return null===s||void 0===s||null===(e=s.current)||void 0===e?void 0:e.close()};var l=new r("Slavic Shirt","https://static.wikia.nocookie.net/discoelysium_gamepedia_en/images/b/b5/Shirt_dress_disco.png",[new b(1,new m("Inland Empire","#523f89"),"Mysterious russian soul"),new b(20,new m("years to Putin's presidency","#9a998f"),"Somehow incompatible with democratic ideals")]);return n.state={item:l,open:!1,popupRef:s},n.onItemChange.bind(Object(j.a)(n)),n}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return Object(_.jsxs)("div",{className:"row item-creator",children:[Object(_.jsx)("div",{className:"d-none d-lg-block col-lg-6",children:Object(_.jsx)(v,{item:this.state.item})}),Object(_.jsxs)("div",{className:"col-lg-6",children:[Object(_.jsx)(C,{initialItem:this.state.item,itemChange:this.onItemChange.bind(this)}),Object(_.jsx)(g.b,{onClose:function(){return e.setState({open:!1})},ref:this.state.popupRef,position:"bottom right",open:this.state.open,closeOnDocumentClick:!0,mouseLeaveDelay:300,mouseEnterDelay:0,contentStyle:{padding:"0px",border:"none"},arrow:!1,modal:!0,className:"show-case",children:function(t){return Object(_.jsx)(Y,{item:e.state.item,close:t})}})]})]})}},{key:"onItemChange",value:function(e){this.setState({item:e}),window.innerWidth<=740&&this.setState({open:!0})}}]),a}(i.a.Component),H=(a(63),a(35)),D=a(4);var L=function(){var e=new r("Slavic Shirt","https://static.wikia.nocookie.net/discoelysium_gamepedia_en/images/b/b5/Shirt_dress_disco.png",[new b(1,new m("Inland Empire","#523f89"),"Mysterious russian soul"),new b(20,new m("years to Putin's presidency","#9a998f"),"Somehow incompatible with democratic ideals")]),t=encodeURIComponent(JSON.stringify(e));return console.log(t),Object(_.jsx)("div",{className:"App container-fluid",style:{backgroundImage:"url(/vast-oceanic-app/background.png)"},children:Object(_.jsx)(H.a,{basename:"/vast-oceanic-app",children:Object(_.jsxs)(D.c,{children:[Object(_.jsx)(D.a,{path:"/itemCreator",children:Object(_.jsx)(E,{path:"itemCreator"})}),Object(_.jsx)(D.a,{path:"/itemShare/:encodedItem",render:function(e){return Object(_.jsx)(O,Object(c.a)({},e))}})]})})})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,77)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),n(e),i(e),s(e),l(e)}))};l.a.render(Object(_.jsx)(i.a.StrictMode,{children:Object(_.jsx)(L,{})}),document.getElementById("root")),A()}},[[65,1,2]]]);
//# sourceMappingURL=main.9a47c401.chunk.js.map