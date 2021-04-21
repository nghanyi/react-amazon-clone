import React from 'react';
import './OrderProduct.css';
import moment from 'moment';
import CartProduct from './CartProduct';
import CurrencyFormat from 'react-currency-format';

function OrderProduct({ order }) {
    return (
        <div className="orderProduct">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
            <p className="orderProduct__id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CartProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="orderProduct__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default OrderProduct
