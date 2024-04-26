// ProductDetail.js
import React from 'react';
import './ProductDetail.css';

function ProductDetail() {
  // add for product
  const product = {
    id: 1,
    name: 'Product Name',
    description: 'Description of the product. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 25.99,
    image: 'https://via.placeholder.com/300',
  };

  return (
    <div className="product-detail-container">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <button className="product-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;
