import React from 'react';
import './CartProduct.css';
import { useStateValue } from '../StateProvider';
import CurrencyFormat from 'react-currency-format';

function CartProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // Remove item from backet
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return (
        <div className="cartProduct">
            <img className="cartProduct__image" src={image} alt=""/>

            <div className="cartProduct__info">
                <p className="cartProduct__title">{title}</p>
                <p className="cartProduct__price">
                    <small>$</small>
                    <CurrencyFormat
                        renderText={(value) => (
                            <strong>{value}</strong>
                        )}
                        decimalScale={2}
                        fixedDecimalScale={true}
                        value={price}
                        displayType={"text"}
                        thousandSeparator={true}
                    />
                </p>
                <div className="cartProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>
    )
}

export default CartProduct;
