import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import './CartSummary.module.css'; // Import the CSS file

const CartSummary = () => {
  const { cartItems, clearCart } = useContext(ProductContext);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    alert('Order placed!');
    clearCart();
  };

  const handleCancel = () => {
    clearCart();
  };

  return (
    <div className="cart-summary">
      <h3>Order Summary</h3>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity}{item.size} - ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice}</p>
      <button onClick={handlePlaceOrder}>Place Order</button>
      <button className="cancel-button" onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default CartSummary;
