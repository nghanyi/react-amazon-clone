import React from 'react';
import './CartProduct.css';
import { useStateValue } from '../StateProvider';

function CartProduct({ id, image, title, price, rating }) {
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
                    <strong>{price}</strong>
                </p>
                <div className="cartProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CartProduct;
