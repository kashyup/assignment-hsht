import React from "react";
import { useShop } from "../context/ShopContext";
import "./Footer.css";

const Footer = ({ total }) => {
  return (
    <>
    <div className="footer-inner-container">
        <div className="custom-divider" />
        <div className="subtotal-container">
          <div className="subtotal-text">Subtotal</div>
          <div className="subtotal-price">£{total}</div>
        </div>
        <div className="seprator" />
        <div className="seprator-zindex" />
        <div className="discount-container">
          <div className="discount-text">Discount</div>
          <div className="discount">£0.00</div>
        </div>
        <div className="total-seprator" />
        <div className="divider" />
        <div className="total-container">
          <div className="total-text">Total</div>
          <div className="total-price-container">
            <div className="total-price">£{total}</div>
            <div className="checkout-button">Checkout</div>
          </div>
        </div>
      </div>
      <div className="separator-total"></div>
    </>
      
  );
};

export default Footer;
