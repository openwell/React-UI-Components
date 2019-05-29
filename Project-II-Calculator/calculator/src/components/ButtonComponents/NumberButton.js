import React from 'react';
import './Button.css';

const numberButton = (props) => {
    return (
        <div className='Button' style={props.style} onClick={props.click}>
            {props.number}
        </div>
    )
}

export default numberButton

