import React from 'react';
import Header from './Header';
import Footer from './Footer';  // import Footer component

export default function App() {
  return (
    <div style={styles.page}>
      <Header />
      <main style={styles.main}>
        <section style={styles.hero}>
          <h1 style={styles.heading}>Welcome to PSIPOWER</h1>
          <p style={styles.subtext}>
            Empowering the future with clean, reliable energy solutions.
          </p>
        </section>
        {/* You can add more sections here: About, Services, Contact, etc. */}
      </main>
      <Footer /> {/* Add Footer here */}
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: '#f9f9f9', // soft light gray background
    minHeight: '100vh',
    fontFamily: 'Segoe UI, sans-serif',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,           // Take available vertical space
    padding: '2rem',
  },
  hero: {
    textAlign: 'center',
    padding: '2rem',
    background: 'linear-gradient(to right, #e3f2fd, #ffffff)',
    borderRadius: '1rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#003366', // deep blue
    marginBottom: '0.5rem',
  },
  subtext: {
    fontSize: '1.2rem',
    color: '#555',
    maxWidth: '600px',
    margin: '0 auto',
  },
};
