// Header.js
import React from 'react';
import './Header.css';
import SideNavigationComponent from './SideNavigationComponent';
import SearchBar from './SearchBar';

const Header = ({ onShowCheckout, searchQuery, setSearchQuery }) => {
  return (
    <div className="header">
      <div className="header-title">GROCERIES</div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="header-cart">
        <SideNavigationComponent onShowCheckout={onShowCheckout} />
      </div>
    </div>
  );
};

export default Header;
