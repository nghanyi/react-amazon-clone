import React, { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";
import CurrencyFormat from "react-currency-format";
import "./Product.css";
import { Skeleton } from "@material-ui/lab";
import { Box } from "@material-ui/core";


function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(true);
  const addToBasket = () => {
    // Dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  useEffect(() => {
      setTimeout(() => {
          setIsLoading(false)
      }, 1000);
  }, []) 
  return (
    <div  className="product">
      {isLoading ? (
        <Box width="100%">
          <Skeleton />
          <Skeleton animation="wave" variant="circle" width={40} height={40} />
          <Skeleton animation={false} />
          <Skeleton height={100} animation="wave" />
        </Box>
      ) : (
        <div className="product">
          <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
              <small>$</small>
              <CurrencyFormat
                renderText={(value) => <strong>{value}</strong>}
                decimalScale={2}
                fixedDecimalScale={true}
                value={price}
                displayType={"text"}
                thousandSeparator={true}
              />
            </p>
            <div className="product__rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p>⭐</p>
                ))}
            </div>
          </div>

          <img src={image} alt="crucial" />

          <button onClick={addToBasket}>Add to Basket</button>
        </div>
      )}
    </div>
  );
}

export default Product;
