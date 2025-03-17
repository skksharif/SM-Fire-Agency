import React from 'react';
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-container">
        
        {/* Location Section */}
        <div className="location-section">
          <h5>Address:</h5>
          <p>534201</p>
          <p>Bhimavaram</p>
          <p>West Godavari</p>
          <p>ANdhra Pradesh</p>
        </div>

        {/* Map Section */}
        <div className="map-container">
          <img src="/smagency-images/HomePage-Images/google-map.png" alt="Location" className="footer-image" />
        </div>

        {/* About Us Section */}
        <div className="abtus">
          <h3>About Us</h3>
          <p>We are dedicated to providing the best services to our customers. Our team is committed to excellence and innovation.</p>
        </div>
      </div>
      <hr />

      {/* Footer Text */}
      <p className="footer-text">&copy; 2025 SREE MOHITH AGENCY. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
