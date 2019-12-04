import React from 'react';
import './App.css';
import GridRow from './GridRow.js';

class GridContainer extends React.Component {
    render (){
        const {styles} = this.props;

        const rows = styles.map((row) => {
            return <GridRow row={row} key={row.row} />;
        });

        return <div className="GridContainer">{rows}</div>;
    }
}

export default GridContainer;
