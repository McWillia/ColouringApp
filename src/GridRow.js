import React from 'react';
import './App.css';
import GridSquare from './GridSquare.js';

class GridRow extends React.Component{

    render(){
        const {row} = this.props;
        const rowOut = row.columns.map((style, i)=>{
            return <GridSquare style={style.style} key={row.row + " - " + i}/>;
        });

        return <div>{rowOut}</div>;
    }
}

export default GridRow;
