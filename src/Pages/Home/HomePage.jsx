import React from 'react'
import "./style.css"
import Header from '../Layout/Header/Header'
import Footer from "../Layout/Footer/Footer"
import { useState, useEffect } from "react";
import { FaUsers, FaProjectDiagram, FaUserTie, FaCalendarAlt } from "react-icons/fa";
import 'animate.css';

const images = [
  "./smagency-images/HomePage-Images/fire-11.png",
  "./smagency-images/HomePage-Images/fire-22.png",
  "./smagency-images/HomePage-Images/fire-33.png",
];

const clients = [
  { src: "ck2.png", alt: "Our Trusted Partner" },
  { src: "ck1.png", alt: "Providing Solutions" },
  { src: "ck3.png", alt: "Innovative Technologies" },
  { src: "ck4.png", alt: "Committed to Quality" },
  { src: "ck5.png", alt: "Leading Innovations" },
  { src: "ck6.png", alt: "Quality Service" },
  { src: "ck7.png", alt: "Trusted Supplier" },
  { src: "ck8.png", alt: "Expert Solutions" },
  { src: "ck9.png", alt: "Trusted in the Industry" },
  { src: "ck10.png", alt: "Innovation Leaders" },
  { src: "ck11.png", alt: "Reliable Partners" },
];
const HomePage = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
        <Header />
        <div className="carousel">
          <button className="carousel-btn prev" onClick={prevSlide}>❮</button>
          <div className="carousel-inner">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className={index === currentIndex ? "active" : ""}
              />
            ))}
          </div>
        </div>

        <div className="certification-box">
          <div className="cert-content">
            <img className="cert-img animate__animated animate__slideInLeft" src="./smagency-images/HomePage-Images/certi.png" alt="Sree Mohith Agency Certificate" />
            <p className="cert-desc animate__animated animate__slideInRight">
              Sree Mohith Agency, an ISO 9001:2015 certified company, is a leading provider of Fire Hydrant Systems, Sprinkler Systems, and Industrial Safety Equipment. 
              The company acts as a Dealer, Distributor, Supplier, Trader, and Service Provider, partnering with reputed manufacturers. With years of experience, 
              Sree Mohith Agency delivers reliable safety solutions that meet industry standards. Their products ensure high levels of safety for commercial and industrial use. 
              The company is committed to excellence and customer satisfaction.
            </p>
          </div>
        </div>

        <div className="stats-section">
          <h1 className="stats-heading">
            Fire Safety Products Dealers, Distributors, Suppliers, Traders, Sales, and Services Provider
          </h1>
          <div className="stats-container animate__animated animate__zoomIn">
            <div className="stat-box">
              <FaUsers className="stat-icon" />
              <h2>170</h2>
              <p>Happy Clients</p>
            </div>

            <div className="stat-box">
              <FaProjectDiagram className="stat-icon" />
              <h2>395</h2>
              <p>Project Complete</p>
            </div>

            <div className="stat-box">
              <FaUserTie className="stat-icon" />
              <h2>30</h2>
              <p>No. of Employees</p>
            </div>

            <div className="stat-box">
              <FaCalendarAlt className="stat-icon" />
              <h2>15</h2>
              <p>Years of Service</p>
            </div>
          </div>
        </div>

        <div class="clients-section">
          <h1>Our Trusted Clients</h1>
          <div class="clients-grid">
            <div class="client">
              <img src="./smagency-images/HomePage-Images/ck2.png" alt="Our Trusted Partner" />
              <div class="overlay">Our Trusted Partner</div>
            </div>
            <div class="client">
              <img src="./smagency-images/HomePage-Images/ck1.png" alt="Providing Solutions" />
              <div class="overlay">Providing Solutions</div>
            </div>
            <div class="client">
              <img src="./smagency-images/HomePage-Images/ck3.png" alt="Innovative Technologies" />
              <div class="overlay">Innovative Technologies</div>
            </div>
            <div class="client">
              <img src="./smagency-images/HomePage-Images/ck4.png" alt="Committed to Quality" />
              <div class="overlay">Committed to Quality</div>
            </div>
            <div class="client">
              <img src="./smagency-images/HomePage-Images/ck5.png" alt="Leading Innovations" />
              <div class="overlay">Leading Innovations</div>
            </div>
            <div class="client">
              <img src="./smagency-images/HomePage-Images/ck6.png" alt="Quality Service" />
              <div class="overlay">Quality Service</div>
            </div>
            <div class="client">
              <img src="./smagency-images/HomePage-Images/ck7.png" alt="Trusted Supplier" />
              <div class="overlay">Trusted Supplier</div>
            </div>
            <div class="client">
              <img src="./smagency-images/HomePage-Images/ck8.png" alt="Expert Solutions" />
              <div class="overlay">Expert Solutions</div>
            </div>
            <div class="client">
              <img src="./smagency-images/HomePage-Images/ck9.png" alt="Trusted in the Industry" />
              <div class="overlay">Trusted in the Industry</div>
            </div>
            <div class="client">
              <img src="./smagency-images/HomePage-Images/ck10.png" alt="Innovation Leaders" />
              <div class="overlay">Innovation Leaders</div>
            </div>
            <div class="client">
              <img src="./smagency-images/HomePage-Images/ck11.png" alt="Reliable Partners" />
              <div class="overlay">Reliable Partners</div>
            </div>
          </div>
        </div>


        <Footer />
    </>
  )
}

export default HomePage