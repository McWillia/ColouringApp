import React from 'react';
import './App.css';
import GridSquare from './GridSquare.js';

class App extends React.Component {
    const style = {
        "background-color": "blue"
    }
    render(){
        return (

            <div className="App">
              <header className="App-header">
                  <GridSquare style={style}/>
              </header>
          </div>
        );
    }

}

export default App;
