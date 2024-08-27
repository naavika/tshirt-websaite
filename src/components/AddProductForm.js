import React, { useState, useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import './AddProductForm.module.css'; // Import the CSS file

const AddProductForm = () => {
  const { addProduct } = useContext(ProductContext);
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    quantityL: '',
    quantityM: '',
    quantityS: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    setProduct({
      name: '',
      description: '',
      price: '',
      quantityL: '',
      quantityM: '',
      quantityS: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="add-product-form">
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="T-Shirt Name"
      />
      <input
        type="text"
        name="description"
        value={product.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Price"
      />
      <input
        type="number"
        name="quantityL"
        value={product.quantityL}
        onChange={handleChange}
        placeholder="Quantity L"
      />
      <input
        type="number"
        name="quantityM"
        value={product.quantityM}
        onChange={handleChange}
        placeholder="Quantity M"
      />
      <input
        type="number"
        name="quantityS"
        value={product.quantityS}
        onChange={handleChange}
        placeholder="Quantity S"
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;

