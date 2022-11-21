import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ booking }) => {
  const { price, patient, email, _id } = booking;
  const [clientSecret, setClientSecret] = useState();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "post",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.error("checkout error => ", error);
      setCardError(error.message);
    } else {
      console.log(paymentMethod);
      setCardError("");
    }

    setSuccess("");
    setProcessing(true);

    const { paymentIntent, confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: patient,
            email: email,
          },
        },
      }
    );

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      console.log('card info: ',card);
      setSuccess(`Congratulations! your payment complete`);
      setTransactionId(paymentIntent.id);

      const payment = {
        price, email, transactionId: paymentIntent.id, bookingId: _id
      }

      fetch('http://localhost:5000/payments',{
        method: 'post',
        headers: {
          'content-type': 'application/json',
          authorization: `bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(payment)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // if(data.acknowledge){
          navigate('/dashboard')
        // }
      })
    }
    setProcessing(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary text-white my-5"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-error">{cardError}</p>
      {
        success && <div>
          <p className="text-success">{success}</p>
          <p className="text">Your transaction ID: <span className="font-bold">{transactionId}</span></p>
        </div>
      }
    </>
  );
};

export default CheckoutForm;
