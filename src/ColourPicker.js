import React from 'react';
import './App.css';
import GridContainer from './GridContainer.js';

class ColourPicker extends React.Component {


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
        return (
            <div className="ColourPicker">
                <GridContainer
                    selected={selected}
                    styles={styles}
                    onMouseDown={()=>{}}
                    onMouseUp={(value) => this.props.onMouseUp(value)}
                    onMouseOver={()=>{}}
                    />
            </div>
        );
    }
}

export default ColourPicker;
