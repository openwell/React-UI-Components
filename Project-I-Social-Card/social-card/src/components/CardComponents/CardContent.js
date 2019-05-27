import React from 'react';
import './Card.css';

const cardContent = ({bannerTitle, bannerPara, bannerLink}) => {
    return (
        <div className='CardContent'>
            <h3>{bannerTitle}</h3>
            <p>{bannerPara}</p>
            <a href={bannerLink}>reactjs.com</a>
        </div>
    )
}

export default cardContent

