import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import './Cart.module.css'; // Import the CSS file

const Cart = () => {
  const { cartItems, removeCartItem } = useContext(ProductContext);

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity}{item.size} - ${item.price}
            <button onClick={() => removeCartItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
