import React from 'react';
import '../styles/hNavbar.css';

const Hnavbar = () => {
  return (
    <>
      <div id="navbar2">
        <div className="menuIcon">
          <i className="fa-solid fa-bars"></i>
          <p>All</p>
        </div>
        <div className="menuItems">
          <p>Fresh</p>
          <p>Amazon miniTV</p>
          <p>Sell</p>
          <p>Best Sellers</p>
          <p>Today's Deals</p>
          <p>Mobiles</p>
          <p>Customer Services</p>
          <p>Electronics</p>
          <p>New Releases</p>
          <p>Prime</p>
          <p>Home & Kitchen</p>
          <p>Gift Ideas</p>
          <p>Fashion</p>
        </div>
      </div>
    </>
  );
}

export default Hnavbar;
