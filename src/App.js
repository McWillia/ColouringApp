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
        return (
            <div className="App">
              <header className="App-header">
                <p>
                    <ColourPicker
                        onClick={(value) => this.handleColourPicker(value)}
                        selected={this.state.selected}
                        />
                </p>
                <hr/>
                <p>
                    <Canvas
                        size={10}
                        selected={this.state.selected}

                        />
                </p>
              </header>
          </div>
        );
    }

}

export default App;
