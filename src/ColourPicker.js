import React from 'react';
import './App.css';
import GridContainer from './GridContainer.js';

class ColourPicker extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            rgb:{
                r:153,
                g:255,
                b:255
            }
        }
    }

    handleColourChange(variable, value){
        var rgbNew = this.state.rgb;

        if (variable === 'r') {
            rgbNew.r = value.target.value;
        } else if (variable === 'g') {
            rgbNew.g = value.target.value;
        } else if (variable === 'b') {
            rgbNew.b = value.target.value;
        }

        this.setState({rgb:rgbNew});
    }

    render (){
        const styles =
        [
            [
                {
                    style:{
                        "backgroundColor": "blue"
                    }
                },
                {
                    style:{
                        "backgroundColor": "red"
                    }
                },
                {
                    style:{
                        "backgroundColor": "orange"
                    }
                }
            ],
            [
                {
                    style:{
                        "backgroundColor": "green"
                    }
                },
                {
                    style:{
                        "backgroundColor": "yellow"
                    }
                },
                {
                    style:{
                        "backgroundColor": "pink"
                    }
                }
            ],
            [
                {
                    style:{
                        "backgroundColor": "Black"
                    }
                },
                {
                    style:{
                        "backgroundColor": "white"
                    }
                },
                {
                    style:{
                        "backgroundColor": "purple"
                    }
                }
            ]

        ];
        const {selected} = this.props;
        const {r, g, b} = this.state.rgb;

        return (
            <div className="ColourPicker">
                <div>
                    <GridContainer
                        selected={selected}
                        styles={styles}
                        onMouseDown={()=>{}}
                        onMouseUp={(value) => this.props.onMouseUp(value)}
                        onMouseOver={()=>{}}
                        />
                </div>
                <br/>
                <div>
                <GridContainer
                    styles={[[{style:{"backgroundColor": "rgb(" + r + "," + g + "," + b + ")"}}]]}
                    selected={selected}

                    onMouseDown={()=>{}}
                    onMouseUp={(value) => this.props.onMouseUp(value)}
                    onMouseOver={()=>{}}
                    />

                R:
                <input
                   name="r"
                   type="number"
                   value={this.state.rgb.r}
                   onChange={(event)=>this.handleColourChange("r", event)}
                   max={255}
                   min={0}
                   />
               <br/>
               G:
               <input
                  name="g"
                  type="number"
                  value={this.state.rgb.g}
                  onChange={(event)=>this.handleColourChange("g", event)}
                  max={255}
                  min={0}
                  />
              <br/>
              B:
              <input
                 name="b"
                 type="number"
                 value={this.state.rgb.b}
                 onChange={(event)=>this.handleColourChange("b", event)}
                 max={255}
                 min={0}
                 />
                </div>
            </div>
        );
    }
}

export default ColourPicker;
