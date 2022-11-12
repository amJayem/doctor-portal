import React from 'react';
import Banner from './Banner/Banner';
import HeroCard from './HeroCard/HeroCard';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner/>
            <HeroCard/>
        </div>
    );
};

export default Home;