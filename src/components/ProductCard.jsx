import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import './ProductCard.css';

const ProductCard = ({ id, title, description, price, imgSrc, available }) => {
  const { cart, wishlist, addToCart, addToWishlist, removeFromCart, removeFromWishlist } = useShop();
  const [isInCart, setIsInCart] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    setIsInCart(cart.some(item => item.id === id));
    setIsInWishlist(wishlist.some(item => item.id === id));
  }, [cart, wishlist, id]);

  const handleAddToCart = () => {
    if (isInCart) {
      removeFromCart(id);
    } else {
      addToCart({ id, title, description, price, imgSrc, available });
    }
  };

  const handleAddToWishlist = () => {
    if (isInWishlist) {
      removeFromWishlist(id);
    } else {
      addToWishlist({ id, title, description, price, imgSrc, available });
    }
  };

  return (
    <div className="product-card">
      <div className="product-details-container">
        <div className="product-image">
          <img src={imgSrc} alt={title} />
        </div>
        <div className="product-details">
          <div className="product-title-container">
            <div className="product-title">{title}</div>
            <div className="product-description">{description}</div>
            <div className="product-availability">
              {available > 10 ? (
                <span>Available</span>
              ) : (
                <>
                  <span className="font-weight-normal">Only</span> {available}{" "}
                  <span className="font-weight-normal">left</span>
                </>
              )}
            </div>
            <div className="flex-container">
              <div className="product-price">
                {price}
              </div>
              <div className="product-icons">
                <img
                  loading="lazy"
                  src={isInCart 
                    ? "/icons/cart-filled.svg" 
                    : "/icons/cart.svg"}
                  className={`icon ${isInCart ? 'icon-active' : ''}`}
                  alt="Add to cart"
                  onClick={handleAddToCart}
                />
                <img
                  loading="lazy"
                  src={isInWishlist 
                    ? "/icons/wishlist-filled.svg" 
                    : "/icons/wishlist.svg"}
                  className={`icon-special ${isInWishlist ? 'icon-active' : ''}`}
                  alt="Add to wishlist"
                  onClick={handleAddToWishlist}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
