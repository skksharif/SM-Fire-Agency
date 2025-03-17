import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUser, FaCity, FaCommentDots } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import "./style.css";
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactPage = () => {

  AOS.init();

  return (
    <>
      <Header />
      <div className="contact-container">
        <h1 className="contact-title"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >📩 Contact Us</h1>

        <div className="contact-content">
          {/* Contact Details Section */}
          <div className="contact-details">
            <div className="contact-item"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              data-aos-delay="200"
            >
              <FaMapMarkerAlt className="icon" />
              <div>
                <h3>Address</h3>
                <p>Bhimavaram</p>
              </div>
            </div>

            <div className="contact-item"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              data-aos-delay="500"
            >
              <FaPhoneAlt className="icon" />
              <div>
                <h3>Phone</h3>
                <p>+91 94403 51007</p>
              </div>
            </div>

            <div className="contact-item"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              data-aos-delay="800"
            >
              <MdEmail className="icon" />
              <div>
                <h3>Email</h3>
                <p>smagency.ap@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="contact-form">
            <h2 
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              data-aos-delay="700"
            >📬 Send Us a Message</h2>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              data-aos-delay="800"
            >Feel free to send us a message for any inquiries or assistance!</p>

            <form>
              <div
                className="input-group"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-delay="900"
              >
                <FaUser className="input-icon" />
                <input type="text" placeholder="Enter your name" required />
              </div>

              <div className="input-group"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-delay="1100"
              >
                <MdEmail className="input-icon" />
                <input type="email" placeholder="Enter your email" required />
              </div>

              <div 
                className="input-group"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-delay="1300"
              >
                <FaPhoneAlt className="input-icon" />
                <input type="tel" placeholder="Enter your phone number" required />
              </div>

              <div className="input-group"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-delay="1500"
              >
                <FaCity className="input-icon" />
                <input type="text" placeholder="Enter your city" required />
              </div>

              <div className="input-group"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-delay="1700"
              >
                <FaCommentDots className="input-icon" 
                />
                <textarea placeholder="Enter your message" required></textarea>
              </div>

              <button type="submit"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-delay="100"
              >Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
