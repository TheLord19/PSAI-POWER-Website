'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/Footer.module.css'; 

const LinkedInIcon = () => (
  <svg
    className={styles.footer__social_icon} // ← Use styles.className
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
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Who We Serve', href: '/who-we-serve' },
    { label: 'Resources', href: '/resources' },
    { label: 'Licenses', href: '/licenses' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <footer className={styles.footer}> {/* ← Use styles.className */}
      <div className={styles.footer__inner}>
        <div className={styles.footer__brand_col}>
          <h2 className={styles.footer__logo}>PSAIPOWER</h2>
          <p className={styles.footer__tagline}>Reliable energy solutions</p>
          <p className={styles.footer__phone}>1-800-123-4567</p>
          <button
            className={`${styles.footer__button} ${isHovered ? styles.footer__button_hover : ''}`} // ← Fixed
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            See More
          </button>
        </div>

        <div className={styles.footer__link_cols}>
          <div className={styles.footer__col}>
            <strong className={styles.footer__section_title}>EXPLORE</strong>
            <div className={styles.footer__links_grid}>
              {navItems.map(({ label, href }) => (
                <Link key={label} href={href} className={styles.footer__link}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.footer__col}>
            <strong className={styles.footer__section_title}>FOLLOW US</strong>
            <a
              href="https://linkedin.com/company/psipower"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={styles.footer__social_link}
            >
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footer__bottom}>
        © {new Date().getFullYear()} PSAIPOWER. All rights reserved.
      </div>
    </footer>
  );
}