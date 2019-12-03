import React from 'react';
import './App.css';

class GridSquare extends React.Component {
    constructor (props){
        super(props);
    }

    render(){
        const {colour} = this.props;

        return (
            <div class="GridSquare" >
                <img/>
            </div>
        );
    }
}

export default GridSquare;
