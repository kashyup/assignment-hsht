// Categories.js
import React from "react";
import "./Categories.css";

export default function Categories({ onCategoryChange }) {
  const handleCategoryClick = (category) => {
    onCategoryChange(category);
  };

  return (
    <div className="categories">
      <div className="item" onClick={() => handleCategoryClick('all')}>
        All items
      </div>
      <div className="item item-drinks" onClick={() => handleCategoryClick('drinks')}>
        Drinks
      </div>
      <div className="item item-fruit" onClick={() => handleCategoryClick('fruit')}>
        Fruit
      </div>
      <div className="item item-bakery" onClick={() => handleCategoryClick('bakery')}>
        Bakery
      </div>
    </div>
  );
}
