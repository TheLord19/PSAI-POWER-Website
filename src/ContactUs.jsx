import React, { useState } from 'react';
import styles from './styles/ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData); // Replace with your API call
    alert('Thanks for reaching out! We’ll contact you soon.');
  };

  return (
    <div className={styles.ContactUs}>
      {/* Reuse your header component here */}

      <div className={styles.contactContainer}>
        <h1>Contact Us</h1>
        <p>Get in touch for energy efficiency solutions—no office visit needed.</p>

        <div className={styles.contactGrid}>
          {/* Left Column: Form */}
          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column: Contact Info (No Map) */}
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>📞</div>
              <div>
                <h3>Phone</h3>
                <p>+1 (123) 456-7890</p>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>✉️</div>
              <div>
                <h3>Email</h3>
                <p>contact@psaipower.com</p>
              </div>
            </div>
            
            {/* Removed address/map, added remote status */}
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>🌐</div>
              <div>
                <h3>Availability</h3>
                <p>Fully remote—serving clients nationwide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;