import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import './styles/Header.css';

export default function Header() {
  const navItems = [
    { label: 'About', href: '#about' },
    {
      label: 'Services',
      href: '#services',
      dropdown: [
        { label: 'Consulting', href: '#consulting' },
        { label: 'Installation', href: '#installation' },
        { label: 'Maintenance', href: '#maintenance' },
      ],
    },
    {
      label: 'Who We Serve',
      href: '#who-we-serve',
      dropdown: [
        { label: 'Residential', href: '#residential' },
        { label: 'Commercial', href: '#commercial' },
        { label: 'Industrial', href: '#industrial' },
      ],
    },
    { label: 'Resources', href: '#resources' },
    { label: 'Licenses', href: '#licenses' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo">
          PSAIPOWER
        </a>
        <nav className="header__nav">
          {navItems.map(({ label, href, dropdown }, index) => (
            <div
              key={label}
              className={`header__nav-item ${dropdown ? 'has-dropdown' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a href={href} className="header__nav-link">
                {label.toUpperCase()}
                {/* Always render the icon to maintain spacing */}
                <FontAwesomeIcon
                  icon={faAnglesDown}
                  className={`header__arrow-icon ${dropdown ? '' : 'no-dropdown'}`}
                  style={{
                    opacity: dropdown && hoveredIndex === index ? 1 : 0,
                    transform: `translateY(${dropdown && hoveredIndex === index ? 0 : -3}px)`,
                    marginLeft: '6px'
                  }}
                />
              </a>
              {dropdown && hoveredIndex === index && (
                <div className="header__dropdown">
                  {dropdown.map(({ label: dLabel, href: dHref }) => (
                    <a key={dLabel} href={dHref} className="header__dropdown-link">
                      {dLabel}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
