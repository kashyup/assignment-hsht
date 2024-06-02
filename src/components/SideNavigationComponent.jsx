import React from 'react';
import './CartComponent.css';
import { useShop } from '../context/ShopContext';

const SideNavigationComponent = ({ onShowCheckout }) => {
  const { cart, wishlist } = useShop();
  const isInCart = cart.length > 0;
  const isInWishlist = wishlist.length > 0;
  
  return (
    <div className="side-navigation-component">
      <div className="column" onClick={onShowCheckout}>
        <div className="badge badge-red">{wishlist.length}</div>
        <img
          loading="lazy"
          src={isInWishlist 
            ? "/icons/wishlist-filled.svg" 
            : "/icons/wishlist.svg"}
          className={`image-small ${isInWishlist ? 'icon-active' : ''}`}
          alt="Wishlist"
        />
      </div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/79c5b4ecbb1c13e023b63910ba9b8a0e2adf76aee07efa44997ac5af3d500af1?apiKey=a45cd760213d4a3985aadae9c042b89d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/79c5b4ecbb1c13e023b63910ba9b8a0e2adf76aee07efa44997ac5af3d500af1?apiKey=a45cd760213d4a3985aadae9c042b89d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/79c5b4ecbb1c13e023b63910ba9b8a0e2adf76aee07efa44997ac5af3d500af1?apiKey=a45cd760213d4a3985aadae9c042b89d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/79c5b4ecbb1c13e023b63910ba9b8a0e2adf76aee07efa44997ac5af3d500af1?apiKey=a45cd760213d4a3985aadae9c042b89d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/79c5b4ecbb1c13e023b63910ba9b8a0e2adf76aee07efa44997ac5af3d500af1?apiKey=a45cd760213d4a3985aadae9c042b89d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/79c5b4ecbb1c13e023b63910ba9b8a0e2adf76aee07efa44997ac5af3d500af1?apiKey=a45cd760213d4a3985aadae9c042b89d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/79c5b4ecbb1c13e023b63910ba9b8a0e2adf76aee07efa44997ac5af3d500af1?apiKey=a45cd760213d4a3985aadae9c042b89d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/79c5b4ecbb1c13e023b63910ba9b8a0e2adf76aee07efa44997ac5af3d500af1?apiKey=a45cd760213d4a3985aadae9c042b89d&"
        className="image-medium"
        alt="Profile"
      />
      <div className="column" onClick={onShowCheckout}>
        <div className="badge badge-blue">{cart.length}</div>
        <img
          loading="lazy"
          src={isInCart 
            ? "/icons/cart-filled.svg" 
            : "/icons/cart.svg"}
          className={`image-gray ${isInCart ? 'icon-active' : ''}`}
          alt="Cart"
        />
      </div>
    </div>
  );
};

export default SideNavigationComponent;
