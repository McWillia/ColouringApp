import React from 'react';
import './App.css';

class GridSquare extends React.Component {
    constructor (props){
        super(props);
    }

    render(){
        const {style} = this.props;

        return (
            <div className="GridSquare" style={style}>
                <img/>
            </div>
        );
    }
}

export default GridSquare;
