import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import AboutPage from "./Pages/About/AboutPage";
import ClinetsPage from "./Pages/Client/ClientsPage";
import ContactPage from "./Pages/Contact/ContactPage";
import ProductsPage from "./Pages/Products/ProductsPage";
import ServicesPage from "./Pages/Services/ServicesPage";
import NotFoundPage from "./Pages/PageNotFound/NotFoundPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/client" element={<ClinetsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
