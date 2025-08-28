'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import '../styles/ContactUs.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thanks for reaching out! We’ll contact you soon.');
  };

  return (
    <div className="ContactUs">
      <div className="contactContainer">
        <h1>Contact Us</h1>
        <p>Get in touch for energy efficiency solutions—no office visit needed.</p>

        <div className="contactGrid">
          {/* Left Column: Form */}
          <div className="contactForm">
            <form onSubmit={handleSubmit}>
              <div className="formGroup">
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

              <div className="formGroup">
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

              <div className="formGroup">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submitButton">
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column: Contact Info */}
          <div className="contactInfo">
            <div className="contactItem">
              <div className="contactIcon">📞</div>
              <div>
                <h3>Phone</h3>
                <p>+1 (123) 456-7890</p>
              </div>
            </div>

            <div className="contactItem">
              <div className="contactIcon">✉️</div>
              <div>
                <h3>Email</h3>
                <p>1234@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
