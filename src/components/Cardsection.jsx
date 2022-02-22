import React from 'react';
import Card from './Card';
import data from '../data.json';
import './Cardsection.css';

function Cardsection() {
    console.log(data)

    const renderCard = data.map((card,i) =>{
        if(i<=1){
            return(<Card key={i} title={card.title} img={card.img} />)
        }
        
    })

    const renderCard2 = data.map((card,i) =>{
        if(i>=2){
            return(<Card key={i} title={card.title} img={card.img} size='small' />)
        }
        
    })

    return (
        <div className='card__section'>
            <h1>Check out these EPIC Destinations!

            </h1>
            <div className='card__container'>
                <div className='card__wrapper'>
                    <div className='card__items'>
                        {renderCard}
                    </div>
                    <div className='card__items'>
                        {renderCard2}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cardsection
