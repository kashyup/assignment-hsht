// CheckoutProduct.js
import React from 'react';
import './CheckoutProduct.css';
import { useShop } from '../context/ShopContext';

const CheckoutProduct = ({
  id,
  title,
  description,
  price,
  imgSrc,
  quantity,
  available,
}) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useShop();

  return (
    <div className="checkout-product-container">
      <div className="checkout-product">
        <div className="checkout-product-image-container">
          <img src={imgSrc} alt={title} />
          <div className="checkout-product-details">
            <div className="checkout-product-title">{title}</div>
            <div className="checkout-product-code">Product code: {id * 98}</div>
          </div>
        </div>
        <div className="quantity-control">
          <div className="button-container">
            <button className="button-minus" onClick={() => decreaseQuantity(id)}>
              -
            </button>
            <div className="quantity">{quantity}</div>
            <button className="button-plus" onClick={() => increaseQuantity(id)}>
              +
            </button>
          </div>
          {available < 10 && (
            <div className="availability-notice">
              <span className="font-weight-normal">Only</span> {available}{" "}
              <span className="font-weight-normal">left</span>
            </div>
          )}
        </div>
        <div className="price-and-action">
          <div className="price">£{price * quantity}</div>
          <button className="action-button" onClick={() => removeFromCart(id)}>X</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
