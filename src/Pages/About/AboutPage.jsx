import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./style.css";
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <Header />
      <div className="aboutPage">
        <div className="about-container">
          <div className="about-img" data-aos="fade-right">
            <img src="./smagency-images/AboutPage-Images/logo.png" alt="Company Logo" />
          </div>
          <div className="about-desc" data-aos="fade-left">
            <h1>About Us</h1>
            <h3>FIRE AND SAFETY SOLUTION</h3>
            <p>
              Sree Mohith Agency, an <strong>ISO 9001:2015</strong> certified company, is a leading provider of
              Fire Hydrant Systems, Sprinkler Systems, and Industrial Safety Equipment. The company acts as a Dealer,
              Distributor, Supplier, Trader, and Service Provider, partnering with reputed manufacturers.
            </p>
            <p>
              With years of experience, Sree Mohith Agency delivers reliable safety solutions that meet industry standards.
              Their products ensure high levels of safety for commercial and industrial use.
            </p>
            <p>
              <strong className='quote'>We are committed to excellence and customer satisfaction.</strong>
            </p>
          </div>
          <div className="abt-btns" data-aos="zoom-in">
            <a href="/products" className="btn">Our Products</a>
            <a href="/services" className="btn">Our Services</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
