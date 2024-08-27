import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const updateProductQuantity = (product, size) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.name === product.name
          ? { ...p, [`quantity${size}`]: p[`quantity${size}`] - 1 }
          : p
      )
    );
  };

  const addToCart = (product, size) => {
    setCartItems((prevCartItems) => [
      ...prevCartItems,
      { ...product, size, quantity: 1 }
    ]);
  };

  const removeCartItem = (index) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((_, i) => i !== index)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <ProductContext.Provider
      value={{ products, cartItems, addProduct, updateProductQuantity, addToCart, removeCartItem, clearCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};
