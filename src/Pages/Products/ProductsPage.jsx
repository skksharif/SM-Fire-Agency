import React from 'react';
import "./style.css";
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

const ProductsPage = () => {
  const products = [
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
    { name: "Sprinklers", image: "./smagency-images/ProductPage-Images/ik13.png" },
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
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "black",  // White text for contrast
          fontWeight: "bold",
          fontSize: "1.8rem",
          textTransform: "uppercase",
          letterSpacing: "2px",
          textShadow: "2px 2px 10px rgba(255, 166, 2, 0.84)",
          backdropFilter: "brightness(0.7)", // Slight dim effect on background
          margin: "0 0 50px 0",
          borderRadius : "10px",
        }}
      >
        <h1 style={{ margin: "0", fontSize: "2.5rem", color: "black" }}>SREE MOHITH AGENCY</h1>
        <p style={{ margin: "5px 0", fontSize: "1.2rem" , color: "black"}}>
          Fire Safety / Protection Equipments, Systems
        </p>
      </div>


        <h1 className='our-products'>OUR PRODUCTS</h1>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
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
