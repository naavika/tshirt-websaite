import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import './ProductList.module.css'; // Import the CSS file

const ProductList = () => {
  const { products, updateProductQuantity, addToCart } = useContext(ProductContext);

  const handleBuy = (product, size) => {
    updateProductQuantity(product, size);
    addToCart(product, size);
  };

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index} className="product-item">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <div className="sizes">
            <button onClick={() => handleBuy(product, 'L')}>Buy L ({product.quantityL})</button>
            <button onClick={() => handleBuy(product, 'M')}>Buy M ({product.quantityM})</button>
            <button onClick={() => handleBuy(product, 'S')}>Buy S ({product.quantityS})</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
