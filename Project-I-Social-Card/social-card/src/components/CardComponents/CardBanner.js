import React from 'react';
import './Card.css';

const cardBanner = ({title}) => {
    return (
        <div className='CardBanner'>
            <img src={title} alt=""/>
        </div>
    )
}

export default cardBanner

