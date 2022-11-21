import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const { data } = useLoaderData();
    return (
        <div>
            <h3 className="text-4xl">Payment</h3>
        </div>
    );
};

export default Payment;