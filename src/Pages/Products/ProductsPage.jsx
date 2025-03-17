import React from 'react';
import "./style.css";
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProductsPage = () => {

  AOS.init();

  const products = [
    { name: "Sprinklers", image: "./smagency-images/ProductPage-Images/ik13.png" },
    { name: "A B C and B C Dry Powder", image: "./smagency-images/ProductPage-Images/ik1.png" },
    { name: "CO2 Fire Extinguisher", image: "./smagency-images/ProductPage-Images/ik2.png" },
    { name: "Mechanical Foam (AFFF) Fire Extinguisher", image: "./smagency-images/ProductPage-Images/ik3.png" },
    { name: "Water CO2 Type Fire Extinguisher", image: "./smagency-images/ProductPage-Images/ik4.png" },
    { name: "Clean Agent Fire Extinguisher", image: "./smagency-images/ProductPage-Images/ik5.png" },
    { name: "Modular Automatic Fire Extinguishers", image: "./smagency-images/ProductPage-Images/ik6.png" },
    { name: "Fire Balls", image: "./smagency-images/ProductPage-Images/ik7.png" },
    { name: "Hydrant Valves", image: "./smagency-images/ProductPage-Images/ik8.png" },
    { name: "Hose Reels", image: "./smagency-images/ProductPage-Images/ik9.png" },
    { name: "Single and Double Door Hose Boxes", image: "./smagency-images/ProductPage-Images/ik10.png" },
    { name: "Foam Making Branches", image: "./smagency-images/ProductPage-Images/ik11.png" },
    { name: "Mobile Foam Units", image: "./smagency-images/ProductPage-Images/ik12.png" },
    { name: "Water Monitors", image: "./smagency-images/ProductPage-Images/ik14.png" },
    { name: "Smoke Detectors", image: "./smagency-images/ProductPage-Images/ik15.png" },
  ];

  const imageCover = "./smagency-images/ProductPage-Images/fs-11.png";

  return (


    <>
      <Header />
      <div className="products-page">
      <div
        className="imageCover"
        style={{
          backgroundImage: `url(${imageCover})`,
        }}
      >
          <h1
            className="cover-heading"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >SREE MOHITH AGENCY</h1>
          <p
            className="cover-subheading"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >Fire Safety / Protection Equipments, Systems</p>
        </div>

        <h1 className='our-products'
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="70"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >OUR PRODUCTS</h1>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 100}
              data-aos-easing="ease-in-out"
              data-aos-once="false"
            >
              <div className="product-img-container">
                <img src={product.image} alt={product.name} className="product-image" />
              </div>
              <h3 className="product-name">{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;
