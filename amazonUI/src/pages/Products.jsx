import React from 'react';
import '../styles/products.css';

const Products = () => {
  const productList = [
    {
      id: 1,
      name: 'Product 1',
      price: '₹ 1000',
      description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque vel nesciunt exercitationem dolorem enim tempora fugit blanditiis quas magni dignissimos sed hic, esse provident architecto saepe labore eveniet pariatur excepturi.',
      image: 'https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/1.png'
    },
    {
      id: 1,
      name: 'Product 2',
      price: '₹ 1400',
      description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque vel nesciunt exercitationem dolorem enim tempora fugit blanditiis quas magni dignissimos sed hic, esse provident architecto saepe labore eveniet pariatur excepturi.',
      image: 'https://cdn.dummyjson.com/products/images/groceries/Apple/1.png'
    },
    {
      id: 1,
      name: 'Product 3',
      price: '₹ 1700',
      description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque vel nesciunt exercitationem dolorem enim tempora fugit blanditiis quas magni dignissimos sed hic, esse provident architecto saepe labore eveniet pariatur excepturi.',
      image: 'https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/1.png'
    },
    {
      id: 2,
      name: 'Product 2',
      price: '₹ 2000',
      description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque vel nesciunt exercitationem dolorem enim tempora fugit blanditiis quas magni dignissimos sed hic, esse provident architecto saepe labore eveniet pariatur excepturi.',
      image: 'https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/1.png'
    },
    {
      id: 3,
      name: 'Product 3',
      price: '₹ 3000',
      description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque vel nesciunt exercitationem dolorem enim tempora fugit blanditiis quas magni dignissimos sed hic, esse provident architecto saepe labore eveniet pariatur excepturi.',
      image: 'https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/1.png'
    },
    {
      id: 4,
      name: 'Product 4 ',
      price: '₹ 4000',
      description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque vel nesciunt exercitationem dolorem enim tempora fugit blanditiis quas magni dignissimos sed hic, esse provident architecto saepe labore eveniet pariatur excepturi.',
      image: 'https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/1.png'
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
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
