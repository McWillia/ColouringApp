import React from 'react';
import './App.css';
import ColourPicker from './ColourPicker.js';
import Canvas from './Canvas.js';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: "purple"
        }
        this.handleColourPicker = this.handleColourPicker.bind(this);

    }

    handleColourPicker(value){
        console.log("Changing to selection to " + value.colour);
        this.setState({selected:value.colour});
    }



    render(){
        console.log(this.state.selected);
        return (
            <div className="App">
              <header className="App-header">
                <div>
                    <ColourPicker
                        onMouseDown={()=>{}}
                        onMouseUp={(value) => this.handleColourPicker(value)}
                        onMouseOver={()=>{}}
                        selected={this.state.selected}
                        />
                </div>
                <hr/>
                <div>
                    <Canvas
                        size={12}
                        selected={this.state.selected}

                        />
                </div>
              </header>
          </div>
        );
    }

}

export default App;
