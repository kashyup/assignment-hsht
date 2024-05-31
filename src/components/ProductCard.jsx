import React from "react";
import { useShop } from "../context/ShopContext";
import "./ProductCard.css";

const ProductCard = ({ id, title, description, price, imgSrc, available }) => {
  const { addToCart, addToWishlist } = useShop();

  const handleAddToCart = () => {
    addToCart({ id, title, description, price, imgSrc, available });
  };

  const handleAddToWishlist = () => {
    addToWishlist({ id, title, description, price, imgSrc, available });
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
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d2afb6e9c1503727fe35464e3ebacc57d3de3fcbf1f664c7f5f1dce04c76e99?apiKey=a45cd760213d4a3985aadae9c042b89d&"
                    alt="Add to wishlist"
                    className="icon"
                    onClick={handleAddToCart}
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef57d74cfed954885e52934d68a3e51ea2fafa7d733caa37514a21dc998a0f8e?apiKey=a45cd760213d4a3985aadae9c042b89d&"
                    alt="Add to cart"
                    className="icon-special"
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
