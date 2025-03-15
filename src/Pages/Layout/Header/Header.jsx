import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./style.css";
import 'animate.css';

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logoHeader">
         <Link to='/'><img src="./smagency-images/HomePage-images/logo.png" alt="SMAGENCY" id="logo" /></Link>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FiX size={30} color="white" /> : <FiMenu size={30} color="white" />}
      </div>

      <div className={`navContents ${menuOpen ? "active" : ""} `}>
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li className={location.pathname === "/about" ? "active" : ""}>
            <Link to="/about" onClick={toggleMenu}>About Us</Link>
          </li>
          <li className={location.pathname === "/products" ? "active" : ""}>
            <Link to="/products" onClick={toggleMenu}>Products</Link>
          </li>
          <li className={location.pathname === "/services" ? "active" : ""}>
            <Link to="/services" onClick={toggleMenu}>Services</Link>
          </li>
          <li className={location.pathname === "/client" ? "active" : ""}>
            <Link to="/client" onClick={toggleMenu}>Clients</Link>
          </li>
          <li className={location.pathname === "/contact" ? "active" : ""}>
            <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
