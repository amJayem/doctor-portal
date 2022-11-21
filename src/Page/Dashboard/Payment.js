import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from './CheckoutForm';
import { useNavigation } from 'react-day-picker';
import Loading from '../Shared/Loading/Loading';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    // console.log(booking);
    const {treatment, AppointmentDate, slot, price} = booking;

    // const navigation = useNavigation();

    // if(navigation.state === 'loading'){
    //     return Loading();
    // }
    return (
        <div>
            <h3 className="text-4xl">Payment for <strong>{treatment}</strong> </h3>
            <p className='my-5'>Please pay <strong>${price}</strong> for your appointment on {AppointmentDate} at {slot}</p>
            <div className='w-96 my-8'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;