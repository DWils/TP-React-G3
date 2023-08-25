import React from 'react';

const Payment = () => {
  return (
    <div className="payment-container">
      <button className="payment-button card-payment">
        Payer par carte bancaire
        <img src="./public/symboles.png" alt="" className="payment-image" />
        <img src="./public/carte.png" alt="" className="payment-image" />
      </button>
      <button className="payment-button paypal-payment">
        Payer par PayPal
        <img src="./public/pay-pal.png" alt="" className="payment-image" />
      </button>
    </div>
  );
}

export default Payment;