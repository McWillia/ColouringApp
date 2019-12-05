import React from 'react';
import './App.css';

class GridSquare extends React.Component {

    constructor(props){
        super(props);

        const {rowNumber, colNumber} = this.props;

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);

        this.state = {
            colour:this.props.style.backgroundColor,
            rowNumber:rowNumber,
            colNumber:colNumber
        }
    }


    handleMouseDown(event){
        const {rowNumber, colNumber, colour} = this.state
        this.props.onMouseDown({"colour":colour, "rowNumber":rowNumber, "colNumber":colNumber});
    }

    handleMouseUp(event){
        const {rowNumber, colNumber, colour} = this.state
        this.props.onMouseUp({"colour":colour, "rowNumber":rowNumber, "colNumber":colNumber});
    }

    handleMouseOver(event){
        const {rowNumber, colNumber, colour} = this.state
        this.props.onMouseOver({"colour":colour, "rowNumber":rowNumber, "colNumber":colNumber});
    }

    render (){
        const {selected, style} = this.props;
        if (selected === style.backgroundColor) {
            return (
                <div className="GridSquare active" style={style} >
                {/* eslint-disable-next-line*/}
                    <img />
                </div>
            );
        } else {
            return (
                <div
                    className="GridSquare"
                    style={style}
                    onMouseDown={(event) => this.handleMouseDown(event)}
                    onMouseUp={(event)=>this.handleMouseUp(event)}
                    onMouseOver={(event)=>this.handleMouseOver(event)}
                    >
                    {/* eslint-disable-next-line*/}
                    <img />
                </div>
            );
        }
    }
}


export default GridSquare;
