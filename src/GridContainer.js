import React from 'react';
import './App.css';
import GridSquare from './GridSquare.js';

class GridContainer extends React.Component {

    render (){
        const {styles, selected} = this.props;
        console.log("HERHEH");
        console.log(Object.values(styles));

        const rows = Object.values(styles).map((row, j) => {
            const rowOut = row.map((style, i)=>{
                return <GridSquare
                            style={style.style}
                            key={row.row + " - " + i}
                            selected={selected}
                            onClick={(val) => this.props.onClick(val)}
                            rowNumber={j}
                            colNumber={i}
                        />;
            });

            return <div>{rowOut}</div>;
        });

        return <div className="GridContainer">{rows}</div>;
    }
}

export default GridContainer;

/*return <GridRow
        row={row}
        key={row.row}
        selected={selected}
        onClick={(value) => this.props.onClick(value)}
        />;*/
