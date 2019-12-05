import React from 'react';
import './App.css';
import GridContainer from './GridContainer.js';

class Canvas extends React.Component {

    constructor(props){
        super(props);
        const {size} = this.props;

        //Make a single column
        var col = [];
        for (var i = 0; i < size; i++) {
            col.push({"style":{"backgroundColor": "white"}});
        }

        var grid = [];
        for (var j = 0; j < size; j++) {
            grid.push(col);
        }
        this.state = {
            grid:grid,
            colouring:false
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);

    }

    colourSquare (x, y) {
        const obj = Object.values(this.state.grid).map((row, i) => {
            if (i === x) {

                return row.map((column,j) => {
                    if (j === y) {
                        // console.log(column);
                        return {style:{backgroundColor:this.props.selected}};
                    } else {
                        return column;
                    }
                })
            } else {
                return row;
            }
        });

        this.setState({
            grid:obj
        })
    }


    handleMouseDown(event){
        this.colourSquare(event.rowNumber, event.colNumber);
        this.setState({colouring:true});
    }

    handleMouseUp(event){
        this.colourSquare(event.rowNumber, event.colNumber);
        this.setState({colouring:false});

    }
    handleMouseOver(event){
        if (this.state.colouring) {
            this.colourSquare(event.rowNumber, event.colNumber);
        }
    }

    render (){

        return (
            <div
                className="Canvas"
                onMouseLeave={()=>{this.setState({colouring:false})}}
                >
                <GridContainer
                    styles={this.state.grid}
                    // onClick={(value) => this.handleClick(value)}
                    // onDragEnter={(event) => this.handleDragEnter(event)}
                    onMouseDown={(event) => this.handleMouseDown(event)}
                    onMouseUp={(event)=>this.handleMouseUp(event)}
                    onMouseOver={(event)=>this.handleMouseOver(event)}
                    />
            </div>
        );
    }
}

export default Canvas;
