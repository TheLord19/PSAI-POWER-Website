import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import './styles/Header.css';

export default function Header() {
  const navItems = [
    {
      label: 'Services',
      to: '/services',
      dropdown: [
        { label: 'Consulting', to: '/services/consulting' },
        { label: 'Installation', to: '/services/installation' },
        { label: 'Maintenance', to: '/services/maintenance' },
      ],
    },
    {
      label: 'Who We Serve',
      to: '/who-we-serve',
      dropdown: [
        { label: 'Residential', to: '/who-we-serve/residential' },
        { label: 'Commercial', to: '/who-we-serve/commercial' },
        { label: 'Industrial', to: '/who-we-serve/industrial' },
      ],
    },
    { label: 'About', to: '/about' },
    { label: 'Resources', to: '/resources' },
    { label: 'Licenses', to: '/licenses' },
    { label: 'Contact Us', to: '/contact' },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          PSAIPOWER
        </Link>
        <nav className="header__nav">
          {navItems.map(({ label, to, dropdown }, index) => (
            <div
              key={label}
              className={`header__nav-item ${dropdown ? 'has-dropdown' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <NavLink 
                to={to} 
                className={({ isActive }) => 
                  `header__nav-link ${isActive ? 'active' : ''}`
                }
              >
                {label.toUpperCase()}
                <FontAwesomeIcon
                  icon={faAnglesDown}
                  className={`header__arrow-icon ${dropdown ? '' : 'no-dropdown'}`}
                  style={{
                    opacity: dropdown && hoveredIndex === index ? 1 : 0,
                    transform: `translateY(${dropdown && hoveredIndex === index ? 0 : -3}px)`,
                    marginLeft: '6px'
                  }}
                />
              </NavLink>
              {dropdown && hoveredIndex === index && (
                <div className="header__dropdown">
                  {dropdown.map(({ label: dLabel, to: dTo }) => (
                    <NavLink 
                      key={dLabel} 
                      to={dTo} 
                      className={({ isActive }) => 
                        `header__dropdown-link ${isActive ? 'active' : ''}`
                      }
                    >
                      {dLabel}
                    </NavLink>
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
