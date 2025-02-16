import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import "./style.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <FaExclamationTriangle className="not-found-icon" />
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>Sorry, the page you’re looking for doesn’t exist.</p>
      <Link to="/" className="home-button">Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
