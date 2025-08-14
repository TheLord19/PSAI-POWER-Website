import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import SubstationImage from './welcome-substation.png'; // your image
import ContactUs from './ContactUs'; 

export default function App() {
  return (
    <div className="page">
      <Header />
      <main className="main">
        
        <section
          className="hero"
          style={{ backgroundImage: `url(${SubstationImage})` }}
        >
          <div className="hero__overlay">
            <h1 className="hero__heading">Welcome to PSAIPOWER</h1>
            <p className="hero__subtext">
              Empowering the future with clean, reliable energy solutions.
            </p>
            <button className="hero__cta">Explore Solutions</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
