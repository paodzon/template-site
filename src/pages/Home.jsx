import React from 'react'
import Cardsection from '../components/Cardsection'
import Herosection from '../components/Herosection'

const Home = () => {
    return (
        <div className='home'>
            <Herosection/>
            <Cardsection/>
        </div>
    )
}

export default Home
