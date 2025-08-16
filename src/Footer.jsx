import React, { useState } from 'react';
import './styles/Footer.css';

const LinkedInIcon = () => (
  <svg
    className="footer__social-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.79v2.18h.07c.67-1.26 2.3-2.59 4.74-2.59 5.07 0 6 3.34 6 7.68V24h-5v-7.08c0-1.69-.03-3.86-2.35-3.86-2.36 0-2.72 1.85-2.72 3.75V24h-5V8z" />
  </svg>
);

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Who We Serve', href: '#who-we-serve' },
    { label: 'Resources', href: '#resources' },
    { label: 'Licenses', href: '#licenses' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand-col">
          <h2 className="footer__logo">PSAIPOWER</h2>
          <p className="footer__tagline">Reliable energy solutions</p>
          <p className="footer__phone">1-800-123-4567</p>
          <button
            className={`footer__button ${isHovered ? 'footer__button--hover' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            See More
          </button>
        </div>

        <div className="footer__link-cols">
          <div className="footer__col">
            <strong className="footer__section-title">EXPLORE</strong>
            <div className="footer__links-grid">
              {navItems.map(({ label, href }) => (
                <a key={label} href={href} className="footer__link">
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer__col">
            <strong className="footer__section-title">FOLLOW US</strong>
            <a
              href="https://linkedin.com/company/psipower"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer__social-link"
            >
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        © {new Date().getFullYear()} PSAIPOWER. All rights reserved.
      </div>
    </footer>
  );
}