import React from 'react';
import Header from './components/Header';
import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import CartSummary from './components/CartSummary';
import { ProductProvider } from './context/ProductContext'; // Import the provider
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <ProductProvider>
      <div className="container">
        <Header />
        <AddProductForm />
        <ProductList />
        <Cart />
        <CartSummary />
      </div>
    </ProductProvider>
  );
};

export default App;
