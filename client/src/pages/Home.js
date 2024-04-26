// Home.js
import React from 'react';
import ProductCard from '../components/ProductCard';
import './Home.css';

function Home() {
  //Added Data
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
    <div className="home-container">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
