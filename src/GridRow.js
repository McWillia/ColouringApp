import React from 'react';
import './App.css';
import GridSquare from './GridSquare.js';

class GridRow extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(value){
        this.props.onClick(value);
    }

    render(){
        const {row, selected} = this.props;
        const rowOut = row.columns.map((style, i)=>{
            return <GridSquare
                        style={style.style}
                        key={row.row + " - " + i}
                        selected={selected}
                        onClick={(val) => this.props.onClick(val)}
                    />;
        });

        return <div>{rowOut}</div>;
    }
}

export default GridRow;
