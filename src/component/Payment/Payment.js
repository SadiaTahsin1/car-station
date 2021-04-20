import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import SimpleCardForm from './SimpleCardForm';

const Payment = ({handlePayment}) => {
    
const stripePromise = loadStripe('pk_test_51IeGwFJyvC3yWksiIV7cFi4coXAiD1wfLyiHYcfEvBisXceTnPJqho28LC8tOm3i8x50VTndf0sTpoLqzMZkF09300TvTg0LH3');

    return (
     
        <Elements stripe={stripePromise}>
         <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements>
     
    );
};

export default Payment;