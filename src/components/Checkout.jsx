import React from 'react';
import { useShop } from '../context/ShopContext';
import CheckoutProduct from './CheckoutProduct';
import Footer from './Footer';
import './Checkout.css';

const Checkout = () => {
  const { cart } = useShop();

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + (Number(item.price.replace('£', '')) * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="checkout">
      <div className="checkout-page-heading">Checkout</div>
      <div className="checkout-products">
        {cart.map((item) => (
          <CheckoutProduct
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            imgSrc={item.imgSrc}
            quantity={item.quantity}
            available={item.available}
          />
        ))}
      </div>
      <Footer total={calculateTotal()} />
    </div>
  );
};

export default Checkout;
