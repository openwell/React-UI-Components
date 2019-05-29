import React from 'react';
import './Button.css';

const actionButton = (props) => {
    return (
        <div className='Action' style={props.style} onClick={props.click}>
            {props.symbol}
        </div>
    )
}

export default actionButton

