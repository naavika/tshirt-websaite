import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import './Header.module.css'; // Import the CSS file

const Header = () => {
  const context = useContext(ProductContext);
  
  if (!context) {
    return <div>Error: ProductContext is not available.</div>;
  }

  const { cartItems } = context;

  return (
    <header className="header">
      <h1 className="logo">T-Shirt Store</h1>
      <button className="cart-button">
        Cart ({cartItems.length})
      </button>
    </header>
  );
};

export default Header;
