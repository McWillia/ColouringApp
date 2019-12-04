import React from 'react';
import './App.css';

class GridSquare extends React.Component {

    constructor(props){
        super(props);

        const {rowNumber, colNumber} = this.props;

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            colour:this.props.style.backgroundColor,
            rowNumber:rowNumber,
            colNumber:colNumber
        }
    }

    handleClick(event){
        const {rowNumber, colNumber, colour} = this.state
        this.props.onClick({"colour":colour, "rowNumber":rowNumber, "colNumber":colNumber});
    }

    render (){
        const {selected, style} = this.props;
        if (selected === style.backgroundColor) {
            return (
                <div className="GridSquare active" style={style} >
                    <img />
                </div>
            );
        } else {
            return (
                <div className="GridSquare" style={style} onClick={(event) => this.handleClick(event)}>
                    <img />
                </div>
            );
        }
    }
}


export default GridSquare;
