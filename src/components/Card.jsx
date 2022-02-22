import React from 'react';
import './Card.css';

const Card = ({title, img, size}) =>{
    return(<div className={size ? 'card small' : 'card'}>
        <div className='card__image'>
        <img src={img} alt=''/>
        </div>
        <div className='card__content'>
            <h5>{title}</h5>
        </div>
    </div>)
}

export default Card