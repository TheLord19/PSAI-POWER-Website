import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./labels/Header";
import Footer from "./labels/Footer";

import Home from "./labels/Home";
import About from "./labels/About";
import Services from "./labels/Services";
import WhoWeServe from "./labels/WhoWeServe";
import ContactUs from "./labels/ContactUs";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="page">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/who-we-serve" element={<WhoWeServe />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
