import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaHome, FaInfoCircle, FaBox, FaCog, FaUsers, FaPhone } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import "./style.css";
import 'animate.css';

const Header = () => {
  const location = useLocation();

  return (
    <div className="header">
      {/* Top navbar for laptops */}
      <nav className="navbar">
        <div className="logoHeader">
          <Link to='/'><img src="./smagency-images/HomePage-images/logo.png" alt="SMAGENCY" id="logo" /></Link>
        </div>
        <div className={`navContents`}>
          <ul>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === "/about" ? "active" : ""}>
              <Link to="/about">About Us</Link>
            </li>
            <li className={location.pathname === "/products" ? "active" : ""}>
              <Link to="/products" >Products</Link>
            </li>
            <li className={location.pathname === "/services" ? "active" : ""}>
              <Link to="/services">Services</Link>
            </li>
            <li className={location.pathname === "/client" ? "active" : ""}>
              <Link to="/client">Clients</Link>
            </li>
            <li className={location.pathname === "/contact" ? "active" : ""}>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Bottom navbar for mobiles */}
      <nav className="mobile-navbar">
        <ul>
          <li><Link to="/about"><FaInfoCircle className={location.pathname==="/about"?"active":""} /><span>About</span></Link></li>
          <li><Link to="/products"><FaBox className={location.pathname==="/products"?"active":""} /><span>Products</span></Link></li>
          <li><Link to="/"><FaHome className={location.pathname==="/"?"active":""} /><span>Home</span></Link></li>
          <li><Link to="/services"><MdOutlineMiscellaneousServices className={location.pathname==="/services"?"active":""} /><span>Services</span></Link></li>
          <li><Link to="/contact"><FaPhone className={location.pathname==="/contact"?"active":""} /><span>Contact</span></Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
