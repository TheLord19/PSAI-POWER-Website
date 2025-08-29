'use client';
import React from 'react';


function Home() {
    return (
        <section
            className="hero"
            style={{ backgroundImage: `url('/images/welcome-substation.png')` }}
        >
            <div className="hero__overlay">
                <h1 className="hero__heading">Welcome to PSAIPOWER</h1>
                <p className="hero__subtext">
                    Empowering the future with clean, reliable energy solutions.
                </p>
                <button className="hero__cta">Explore Solutions</button>
            </div>
        </section>
    );
}

export default Home;