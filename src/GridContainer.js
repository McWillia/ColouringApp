import React from 'react';
import './App.css';
import GridSquare from './GridSquare.js';

class GridContainer extends React.Component {

    render (){
        const {styles, selected} = this.props;

        const rows = Object.values(styles).map((row, j) => {
            const rowOut = row.map((style, i)=>{
                return <GridSquare
                            style={style.style}
                            key={row.row + " - " + i}
                            selected={selected}
                            rowNumber={j}
                            colNumber={i}
                            onMouseDown={(event) => this.props.onMouseDown(event)}
                            onMouseUp={(event)=>this.props.onMouseUp(event)}
                            onMouseOver={(event)=>this.props.onMouseOver(event)}
                        />;
            });

            return <div key={row.row}>{rowOut}</div>;
        });

        return <div className="GridContainer">{rows}</div>;
    }
}

export default GridContainer;
