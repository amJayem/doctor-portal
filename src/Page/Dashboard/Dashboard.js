import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Header from '../Shared/Header/Header';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Header/>
            uid: {user?.uid} <br />
            username: {user?.displayName}
            <Link to='/'>Home</Link>
        </div>
    );
};

export default Dashboard;