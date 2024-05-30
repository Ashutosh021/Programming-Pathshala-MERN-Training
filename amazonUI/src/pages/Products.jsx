import React from 'react';
import '../styles/products.css';

const Products = () => {
  const productList = [
    {
      id: 1,
      name: 'Product 1',
      price: '₹ 1000',
      image: 'https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/1.png'
    },
    {
      id: 2,
      name: 'Honeyyy 😋',
      price: '₹ 2000',
      image: 'https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/1.png'
    },
    {
      id: 3,
      name: 'Shimla Mirchii 🤐',
      price: '₹ 3000',
      image: 'https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/1.png'
    },
    {
      id: 4,
      name: 'Mirchiiii 🥵',
      price: '₹ 4000',
      image: 'https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/1.png'
    }
  ];

  return (
    <div className="products-container">
      <h1>Products</h1>
      <div className="products-list">
        {productList.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
