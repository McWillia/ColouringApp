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
        for (var i = 0; i < size; i++) {
            grid.push(col);
        }
        this.state = grid;

        this.handleClick = this.handleClick.bind(this);

    }


    handleClick(event){

        const obj = Object.values(this.state).map((row, i) => {
            if (i === event.rowNumber) {

                return row.map((column,j) => {
                    if (j === event.colNumber) {
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

        console.log(obj);


        this.setState(
            obj
        )
    }


    render (){
        console.log(Object.values(this.state));

        return (
            <div className="Canvas">
                <GridContainer
                    styles={this.state}
                    onClick={(value) => this.handleClick(value)}
                    />
            </div>
        );
    }
}

export default Canvas;
