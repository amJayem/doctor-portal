import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Header from '../Shared/Header/Header';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    return (
        <div>
            <Header/>
            uid: {user?.uid} <br />
            username: {user?.displayName}
        </div>
    );
};

export default Dashboard;