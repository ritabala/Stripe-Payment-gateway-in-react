import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import STRIPE_PUBLISHABLE from '../Constants/Stripe';
import PAYMENT_SERVER_URL from '../Constants/Server';
import axios from 'axios';

const CURRENCY = 'EUR';

const fromEuroToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount,description)=>
    (token) =>
    axios.post(PAYMENT_SERVER_URL,{
            description,
            source: token.id,
            currency: CURRENCY,
            amount: fromEuroToCent(amount)
          })
          .then(successPayment)
          .catch(errorPayment);


const Checkout = ({name,description,amount}) =>
    <StripeCheckout
        name={name}
        description={description}
        amount={amount}
        token={onToken(amount,description)}
        stripeKey={STRIPE_PUBLISHABLE}
    />


export default Checkout;
