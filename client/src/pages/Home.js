// Home.js
import React from 'react';
import ProductCard from '../components/ProductCard';

function Home() {
  // Dummy product data
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1',
      price: 20,
      image: 'product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 30,
      image: 'product2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description of Product 3',
      price: 25,
      image: 'product3.jpg',
    },
  ];

  return (
    <div>
      <h2>Featured Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
