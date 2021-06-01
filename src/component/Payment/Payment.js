import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
//import CheckoutForm from './CheckOutForm';
import SplitCardForm from './SplitCardForm';

const Payment = () => {
    
const stripePromise = loadStripe('pk_test_51IeGwFJyvC3yWksiIV7cFi4coXAiD1wfLyiHYcfEvBisXceTnPJqho28LC8tOm3i8x50VTndf0sTpoLqzMZkF09300TvTg0LH3');

    return (
     
        <Elements stripe={stripePromise}>
         <SplitCardForm></SplitCardForm>
        </Elements>
     
    );
};

export default Payment;