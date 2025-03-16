import React, { useState, useEffect, useRef } from 'react';
import "./style.css";
import Header from '../Layout/Header/Header';
import Footer from "../Layout/Footer/Footer";
import { FaUsers, FaProjectDiagram, FaUserTie, FaCalendarAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
  "./smagency-images/HomePage-Images/fire-11.png",
  "./smagency-images/HomePage-Images/fire-22.png",
  "./smagency-images/HomePage-Images/fire-33.png",
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const statsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Smooth animation duration (1s)
      easing: 'ease-in-out',
      once: true, // Ensures animation happens only once
    });
  }, []);

  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='homePage-section'>
      <Header />

      {/* Carousel Section */}
      <div className="carousel">
        <div className="carousel-inner">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`carousel-img ${index === currentIndex ? "active" : ""}`}
              data-aos="fade-up"
            />
          ))}
        </div>
      </div>
      <p className='breaf-text'
        data-aos="zoom-in"
        data-aos-duration="300"
      >
        Ensuring safety with trusted solutions <span className='diableinMobile'> — Sree Mohith Agency delivers certified fire and safety systems for ultimate protection and peace of mind.</span>
      </p>

      {/* Stats Section */}
      <div ref={statsRef} className="stats-section">
        <h1 
          className="stats-heading"
          data-aos="zoom-in"
          data-aos-duration="500"
        >
          Fire Safety Products Dealers, Distributors, Suppliers, Traders, Sales, and Services Provider
        </h1>

        <div className="stats-container">
          {[
            { icon: <FaUsers />, value: "170", text: "Happy Clients" },
            { icon: <FaProjectDiagram />, value: "395", text: "Project Complete" },
            { icon: <FaUserTie />, value: "30", text: "No. of Employees" },
            { icon: <FaCalendarAlt />, value: "15", text: "Years of Service" }
          ].map((stat, index) => (
            <div
              key={index}
              className="stat-box"
              data-aos="zoom-in"
              data-aos-delay={index * 150} // Smooth staggered effect
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
            >
              <p className='stat-icon'>{stat.icon}</p>
              <h2>{stat.value}</h2>
              <p>{stat.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certification Section */}
      <div className="certification-box">
        <div className="cert-content">
          <img 
            className="cert-img" 
            src="./smagency-images/HomePage-Images/cert.jpg" 
            alt="Sree Mohith Agency Certificate" 
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          />
          <p className="cert-desc"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <span className='cert-desc-title'>Sree Mohith Agency</span>
              Sree Mohith Agency, an ISO 9001:2015 certified company, is a leading provider of Fire Hydrant Systems, Sprinkler Systems, and Industrial Safety Equipment. 
              The company acts as a Dealer, Distributor, Supplier, Trader, and Service Provider, partnering with reputed manufacturers. With years of experience, 
              Sree Mohith Agency delivers reliable safety solutions that meet industry standards. Their products ensure high levels of safety for commercial and industrial use. 
              The company is committed to excellence and customer satisfaction.          </p>
        </div>
      </div>

      {/* Clients Section */}
      <div className="clients-section">
        <h1 data-aos="fade-up">Our Trusted Clients</h1>
        <div className="clients-grid">
          {[...Array(11)].map((_, i) => (
            <div 
              className="client" 
              key={i}
              data-aos="flip-left"
              data-aos-delay={i * 80}
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
            >
              <img src={`./smagency-images/HomePage-Images/ck${i + 1}.png`} alt={`Client ${i + 1}`} />
              <div className="overlay">Trusted Partner</div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
