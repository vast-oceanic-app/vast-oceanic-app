import React from "react";
import { Stat, StatColors, StatModifier } from "./item";
import CreatableSelect from 'react-select/creatable';
import './StatModifierEditor.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";

export class StatModifierEditor extends React.Component<{ stat: StatModifier, statChange: (stat: StatModifier) => void, statRemove: () => void }, { stat: StatModifier }> {
    constructor(props: { stat: StatModifier, statChange: (stat: StatModifier) => void, statRemove: () => void }) {
        super(props);
        this.state = { stat: props.stat };
    }


    render() {
        const options = [
            {
                label: 'INT',
                options: [
                    new Stat('Logic', StatColors.INT),
                    new Stat('Encyclopedia', StatColors.INT),
                    new Stat('Rhetoric', StatColors.INT),
                    new Stat('Drama', StatColors.INT),
                    new Stat('Conceptualization', StatColors.INT),
                    new Stat('Visual Calculus', StatColors.INT)
                ]
            },
            {
                label: 'PSY',
                options: [
                    new Stat('Volition', StatColors.PSY),
                    new Stat('Inland Empire', StatColors.PSY),
                    new Stat('Empathy', StatColors.PSY),
                    new Stat('Authority', StatColors.PSY),
                    new Stat('Esprit de Corps', StatColors.PSY),
                    new Stat('Suggestion', StatColors.PSY)
                ]
            },
            {
                label: 'FYS',
                options: [
                    new Stat('Endurance', StatColors.FYS),
                    new Stat('Pain Threshold', StatColors.FYS),
                    new Stat('Physical Instrument', StatColors.FYS),
                    new Stat('Electro-Chemistry', StatColors.FYS),
                    new Stat('Shivers', StatColors.FYS),
                    new Stat('Half Light', StatColors.FYS),
                ]
            },
            {
                label: 'MOT',
                options: [
                    new Stat('Hand-Eye Coordination', StatColors.MOT),
                    new Stat('Perception', StatColors.MOT),
                    new Stat('Reaction Speed', StatColors.MOT),
                    new Stat('Savoir Faire', StatColors.MOT),
                    new Stat('Interfacing', StatColors.MOT),
                    new Stat('Composure', StatColors.MOT)
                ]
            },
            {
                label: 'MISC',
                options: [
                    new Stat('Volta do Mar', StatColors.FYS)
                ]
            }
        ];
        const colourStyles = {
            option: (styles: any, object: { data: Stat, isDisabled: boolean, isFocused: boolean, isSelected: boolean }) => {
                return {
                    ...styles,
                    color: object.data.color,
                };
            },
            singleValue: (styles: any, object: { data: Stat, isFocused?: boolean, isSelected?: boolean }) => {
                return {
                    ...styles,
                    color: object.data.color,
                };
            }
        };
        return (<div className="item-stat-editor row no-gutters">
            <div className="col-2 col-lg-auto mt-3">
                <input className="mr-3 mr-lg-0 stat-modifier-input" type="number" placeholder="Modifier" value={this.state.stat.modifier} onChange={this.handleModifierChange} />
            </div>
            <div className="col-10 col-lg-auto mt-3">
                <CreatableSelect className="ml-3 mr-0 mr-lg-3 stat-name-input"
                    isClearable
                    placeholder="Select stat or type in your own..."
                    defaultValue={this.state.stat.stat}
                    onChange={this.handleChange}
                    options={options}
                    getNewOptionData={(inputValue, optionLabel) => new Stat(inputValue, StatColors.Misc)}
                    getOptionValue={option => option.name}
                    getOptionLabel={option => option.name}
                    styles={colourStyles}
                    theme={theme => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                            ...theme.colors,
                            primary: 'white',
                            primary75: 'green',
                            primary50: 'white',
                            primary25: 'white',
                            neutral0: 'black',
                            neutral5: 'green',
                            neutral10: 'red',
                            neutral20: 'white',
                            neutral30: 'white',
                            neutral40: 'white'
                        },
                    })}
                />

            </div>
            <div className="col-9 col-md-10 col-lg-auto mt-3">
                <input className="mr-lg-3 stat-comment-input" type="text" placeholder="Comment" value={this.state.stat.comment} onChange={this.handleCommentChange} />
            </div>
            <div className="col-3 col-md-2 col-lg-auto mt-3 stat-remove-container">
                <button className="stat-remove" onClick={this.props.statRemove}><FontAwesomeIcon icon={faBackspace}/></button>
            </div>
        </div>);
    }

    handleModifierChange = (event: any) => {
        this.state.stat.modifier = event.target.value;
        this.setState({ stat: this.state.stat });
        this.props.statChange(this.state.stat);
    }

    handleCommentChange = (event: any) => {
        this.state.stat.comment = event.target.value;
        this.setState({ stat: this.state.stat });
        this.props.statChange(this.state.stat);
    }

    handleChange = (newValue: any, actionMeta: any) => {
        this.state.stat.stat = newValue;
        this.setState({ stat: this.state.stat });
        this.props.statChange(this.state.stat);
    };
}