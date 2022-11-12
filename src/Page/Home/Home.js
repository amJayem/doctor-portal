import React from 'react';
import Banner from './Banner/Banner';
import HeroCard from './HeroCard/HeroCard';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import ContactUs from './Reviews/ContactUs/ContactUs';
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
            <ContactUs/>
        </div>
    );
};

export default Home;