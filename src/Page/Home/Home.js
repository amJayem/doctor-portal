import React from 'react';
import Banner from './Banner/Banner';
import HeroCard from './HeroCard/HeroCard';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Reviews from './Reviews/Reviews';
import ServiceCards from './Services/ServiceCards';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner/>
            <HeroCard/>
            <ServiceCards/>
            <MakeAppointment/>
            <Reviews/>
        </div>
    );
};

export default Home;