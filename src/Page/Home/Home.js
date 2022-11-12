import React from 'react';
import Banner from './Banner/Banner';
import HeroCard from './HeroCard/HeroCard';
import ServiceCards from './HeroCard/Services/ServiceCards';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner/>
            <HeroCard/>
            <ServiceCards/>
        </div>
    );
};

export default Home;