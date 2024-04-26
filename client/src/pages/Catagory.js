// Category.js
import React from 'react';
import ProductCard from '../components/ProductCard';
import './Catagory.css';

function Category() {
  // Mock data for products in the category
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of product 1',
      price: 10,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of product 2',
      price: 20,
      image: 'https://via.placeholder.com/150',
    },
    // Add more products as needed
  ];

  return (
    <div className="category-container">
      <h2 className="category-title">Category Name</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Category;
