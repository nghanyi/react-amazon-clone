import React, { useEffect, useState } from 'react';
import { useStateValue } from '../StateProvider';
import './Checkout.css';
import CartProduct from './CartProduct';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';
import axios from '../axios';
import { db } from '../firebase';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);
    
    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [basket])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // PaymentIntent = payment confirmation
            db.collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                  basket: basket,
                  amount: paymentIntent.amount,
                  created: paymentIntent.created
              });

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders');
        });
    };

    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    };

    return (
        <div className="checkout">
            <div className="checkout__container">
                <h1>
                    Checkout (<Link to="/cart">{basket?.length} items</Link>)
                </h1>

                <div className="checkout__section">
                    <div className="checkout__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="checkout__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Singapore, Singapore</p>
                    </div>
                </div>

                <div className="checkout__section">
                    <div className="checkout__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="checkout__items">
                        {basket.map(item => (
                            <CartProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className="checkout__section">
                    <div className="checkout__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="checkout__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="checkout__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                 />
                                 <button disabled={ processing || disabled || succeeded }>
                                     <span>
                                         {processing ? <p>Processing</p> : "Buy Now"}
                                     </span>
                                 </button>
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
