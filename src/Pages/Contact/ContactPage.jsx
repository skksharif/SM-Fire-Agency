import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUser, FaCity, FaCommentDots } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import "./style.css";
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

const ContactPage = () => {
  return (
    <>
      <Header />
      <div className="contact-container">
        <h1 className="contact-title">📩 Contact Us</h1>

        <div className="contact-content">
          {/* Contact Details Section */}
          <div className="contact-details">
            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h3>Address</h3>
                <p>Vishnu College, Bhimavaram</p>
              </div>
            </div>

            <div className="contact-item">
              <FaPhoneAlt className="icon" />
              <div>
                <h3>Phone</h3>
                <p>+91 98 9893 5647</p>
                <p>+91 96 3434 5678</p>
              </div>
            </div>

            <div className="contact-item">
              <MdEmail className="icon" />
              <div>
                <h3>Email</h3>
                <p>svecw@gmail.com</p>
                <p>vishnuspire@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="contact-form">
            <h2>📬 Send Us a Message</h2>
            <p>Feel free to send us a message for any inquiries or assistance!</p>

            <form>
              <div className="input-group">
                <FaUser className="input-icon" />
                <input type="text" placeholder="Enter your name" required />
              </div>

              <div className="input-group">
                <MdEmail className="input-icon" />
                <input type="email" placeholder="Enter your email" required />
              </div>

              <div className="input-group">
                <FaPhoneAlt className="input-icon" />
                <input type="tel" placeholder="Enter your phone number" required />
              </div>

              <div className="input-group">
                <FaCity className="input-icon" />
                <input type="text" placeholder="Enter your city" required />
              </div>

              <div className="input-group">
                <FaCommentDots className="input-icon" />
                <textarea placeholder="Enter your message" required></textarea>
              </div>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
