import React from 'react';
import '../styles/navbar.css'; 
import { FaCartShopping,FaFlag,FaLocationCrosshairs} from 'react-icons/fa6';
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="main">
      {/* First Navbar css->Navbar.css */}
      <div id="navbar">
        <div className="navbarLeft">
          <div className="logo" id="logo">
            <img src='https://www.allaboutlean.com/wp-content/uploads/2019/10/Amazon-Logo-1024x308.png' alt='Logo'/>
          </div>
          <div className="location">
            <i className="fa-solid fa-location-dot"><FaLocationCrosshairs/></i>
            <div>
              <p>Delivering to Noida - 11111</p>
              <h4>UPDATE LOCATION</h4>
            </div>
          </div>
        </div>

        <div className="navbarCenter">
          <div className="searchBox">
            <input type="text" />
            <i>
            <AiOutlineSearch/>
            </i>
          </div>
        </div>

        <div className="navbarRight">
          <div className="flag" id="flag">
          <i>
           <FaFlag/>
          </i>
            <p>IND</p>
          </div>
          <div className="signin">
            <a href="signinPage.html">
              <p>hello, sign in</p>
              <h4>Account & List</h4>
            </a>
          </div>
          <div className="return">
            <p>Return <br />& Order</p>
          </div>
          <div className="cart">
            <FaCartShopping/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
