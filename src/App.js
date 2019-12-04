import React from 'react';
import './App.css';
import GridSquare from './GridSquare.js';

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
                    }
                ]
            }
        ];

        const grid = styles.map((row, columns) => {
            console.log(row)
            return row.columns.map((column)=>{
                return <GridSquare style={column.style} />
            });
        });

        console.log(grid);

        return (

            <div className="App">
              <header className="App-header">
              {grid}
              </header>
          </div>
        );
    }

}

export default App;
