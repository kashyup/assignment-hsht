import React from 'react';
import './SearchBar.css';

export default function SearchBar({ searchQuery, setSearchQuery }) {
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search products..."
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/73151736bc7bfce7cfb032f49178fa132d5aa763204eb4f24634e6b4e85ccb02?apiKey=a45cd760213d4a3985aadae9c042b89d&"
        alt="Search Icon"
      />
    </div>
  );
}
