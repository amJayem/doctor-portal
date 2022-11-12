import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Page/Shared/Footer/Footer';
import Header from '../Page/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;