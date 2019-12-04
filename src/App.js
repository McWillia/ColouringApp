import React from 'react';
import './App.css';
import GridSquare from './GridSquare.js';
import GridContainer from './GridContainer.js';

class App extends React.Component {



    render(){
        const styles = [
            {
                "row":1,
                "columns":[
                    {
                        "column":1,
                        style:{
                            "backgroundColor": "blue"
                        }
                    },
                    {
                        "column":2,
                        style:{
                            "backgroundColor": "red"
                        }
                    },
                    {
                        "column":3,
                        style:{
                            "backgroundColor": "orange"
                        }
                    }
                ]
            },
            {
                "row":2,
                "columns":[
                    {
                        "column":1,
                        style:{
                            "backgroundColor": "green"
                        }
                    },
                    {
                        "column":2,
                        style:{
                            "backgroundColor": "yellow"
                        }
                    },
                    {
                        "column":3,
                        style:{
                            "backgroundColor": "pink"
                        }
                    }
                ]
            },
            {
                "row":3,
                "columns":[
                    {
                        "column":1,
                        style:{
                            "backgroundColor": "black"
                        }
                    },
                    {
                        "column":2,
                        style:{
                            "backgroundColor": "white"
                        }
                    },
                    {
                        "column":3,
                        style:{
                            "backgroundColor": "purple"
                        }
                    }
                ]
            }
        ];


        return (

            <div className="App">
              <header className="App-header">
                  <GridContainer styles={styles} />
              </header>
          </div>
        );
    }

}

export default App;
