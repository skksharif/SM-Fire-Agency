import React from 'react';
import './style.css';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

const ClientsPage = () => {
  const images = [
    "smagency-images/HomePage-Images/ck1.png",
    "smagency-images/HomePage-Images/ck2.png",
    "smagency-images/HomePage-Images/ck3.png",
    "smagency-images/HomePage-Images/ck4.png",
    "smagency-images/HomePage-Images/ck5.png",
    "smagency-images/HomePage-Images/ck6.png",
    "smagency-images/HomePage-Images/ck7.png",
    "smagency-images/HomePage-Images/ck8.png",
    "smagency-images/HomePage-Images/ck9.png",
    "smagency-images/HomePage-Images/ck10.png",
    "smagency-images/HomePage-Images/ck11.png"
  ];

  return (
    <>
      <Header />
      <div className="clients-container">
        <h1 className="clients-title">OUR CLIENTS</h1>
        <div className="clients-slider">
          <div className="clients-track">
            {images.concat(images).map((img, index) => (
              <img key={index} src={img} alt="client" className="client-logo" />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ClientsPage;
