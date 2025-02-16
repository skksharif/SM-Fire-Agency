import React from 'react';
import './style.css';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

const services = [
  { 
    title: "Supply and Integration of Fire Hydrant System", 
    description: "We provide high-quality fire hydrant system integration for safety across residential, commercial, and industrial spaces.",
    image: "./smagency-images/ServicesPage-images/service-1.png" 
  },
  { 
    title: "Sprinkler System", 
    description: "Installation and maintenance of fire sprinkler systems, ensuring effective fire protection in homes, offices, and industries.",
    image: "./smagency-images/ServicesPage-images/service-2.jpg"
  },
  { 
    title: "Smoke Detection and Alarm Systems", 
    description: "Advanced smoke detection systems that trigger immediate alerts for quick evacuation and fire hazard protection.",
    image: "./smagency-images/ServicesPage-images/service-3.jpg"
  },
  { 
    title: "Fire Alarm System", 
    description: "Reliable fire alarm systems designed for early hazard detection and quick response in residential and industrial spaces.",
    image: "./smagency-images/ServicesPage-images/service-4.jpg" 
  },
  { 
    title: "Water Curtain & Wet Riser System", 
    description: "Water curtain barriers and wet riser systems to contain fire spread and ensure a steady water supply for firefighting.",
    image: "./smagency-images/ServicesPage-images/service-5.jpg" 
  },
  { 
    title: "Fire Drawings", 
    description: "We create precise fire drawings, including layouts for hydrants, sprinklers, alarms, and evacuation routes.",
    image: "./smagency-images/ServicesPage-images/service-6.png" 
  },
  { 
    title: "All Types of Fire Extinguishers", 
    description: "Supplying CO2, ABC, foam, and dry chemical powder extinguishers for various fire hazards.",
    image: "./smagency-images/ServicesPage-images/service-7.jpeg" 
  },
  { 
    title: "Full Range of Fire Fighting Equipment", 
    description: "Providing fire extinguishers, hydrants, sprinklers, hoses, and safety gear for maximum protection.",
    image: "./smagency-images/ServicesPage-images/service-8.jpg" 
  },
  { 
    title: "Annual Maintenance Contracts (AMC)", 
    description: "We offer AMC contracts to ensure regular fire safety maintenance and compliance with safety standards.",
    image: "./smagency-images/ServicesPage-images/service-9.jpg" 
  }
];

const ServicesPage = () => {
  return (
    <>
      <Header />
      <div className="services-container">
        <h1 className="services-title">Services We Offer</h1>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.image} alt={service.title} className="service-image" />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;
