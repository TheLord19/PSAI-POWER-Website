import React from 'react';

import Header from './Header';
import Footer from './Footer';
import './App.css';
import SubstationImage from './welcome-substation.png';
import ContactUs from './ContactUs'; 

export default function App() {
  return (
    <Router> {/* Wrap everything in Router */}
      <div className="page">
        <Header /> {/* Header will now handle navigation links */}
        <main className="main">
          <Routes> {/* Define your routes here */}
            {/* Homepage Route */}
            <Route 
              path="/" 
              element={
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
              } 
            />
            
            {/* Contact Page Route */}
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
