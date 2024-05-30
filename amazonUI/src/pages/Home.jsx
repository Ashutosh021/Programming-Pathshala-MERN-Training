import React from 'react'
import { Link } from 'react-router-dom'
import Products from './Products'

const Home = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/products" style={{ marginRight: '10px' }}>Products</Link>
      <Link to="/search" style={{ marginRight: '10px' }}>Search</Link>
      <Products />
    </div>
  )
}

export default Home
