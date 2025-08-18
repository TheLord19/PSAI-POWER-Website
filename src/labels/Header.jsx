import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/Header.css';

export default function Header() {
  const navItems = [
    {
      label: 'Services',
      href: '/services',
      dropdown: [
        { heading: 'Consulting', items: [
            { label: 'Power System Design', href: '/services#consulting1' },
            { label: 'Grid Modernization', href: '/services#consulting2' },
            { label: 'Renewable Integration', href: '/services#consulting3' },
            { label: 'Power Analysis', href: '/services#consulting4' },
          ] 
        },
        { heading: 'Installation', items: [
            { label: 'Substation Installation', href: '/services#installation1' },
            { label: 'Switchgear Setup', href: '/services#installation2' },
          ] 
        },
        { heading: 'Maintenance', items: [
            { label: 'Preventive Maintenance', href: '/services#maintenance1' },
            { label: 'Corrective Maintenance', href: '/services#maintenance2' },
            { label: 'System Optimization', href: '/services#maintenance3' },
          ] 
        },
      ],
    },
    {
      label: 'Who We Serve',
      href: '/who-we-serve',
      dropdown: [
        { heading: 'Utilities & Grid Operators', items: [
            { label: 'Grid Reliability', href: '/who-we-serve#utilities' },
            { label: 'Smart Grid Transition', href: '/who-we-serve#utilities2' },
          ]
        },
        { heading: 'Renewable Energy', items: [
            { label: 'Solar', href: '/who-we-serve#renewable-solar' },
            { label: 'Wind', href: '/who-we-serve#renewable-wind' },
            { label: 'Hydro', href: '/who-we-serve#renewable-hydro' },
            { label: 'Energy Storage', href: '/who-we-serve#renewable-storage' },
          ]
        },
        { heading: 'Industrial Manufacturing', items: [
            { label: 'Factories', href: '/who-we-serve#industrial-factories' },
            { label: 'Production Plants', href: '/who-we-serve#industrial-plants' },
          ]
        },
        { heading: 'Oil & Gas', items: [
            { label: 'Offshore Platforms', href: '/who-we-serve#oil-gas1' },
            { label: 'Refineries', href: '/who-we-serve#oil-gas2' },
            { label: 'Pipelines', href: '/who-we-serve#oil-gas3' },
          ]
        },
        { heading: 'Government & Regulatory', items: [
            { label: 'Consulting', href: '/who-we-serve#gov-consulting' },
            { label: 'Compliance', href: '/who-we-serve#gov-compliance' },
          ]
        },
        { heading: 'Mining Industry', items: [
            { label: 'Remote Power Supply', href: '/who-we-serve#mining1' },
            { label: 'Heavy Equipment Power', href: '/who-we-serve#mining2' },
            { label: 'Grid-Connected Solutions', href: '/who-we-serve#mining3' },
            { label: 'Energy Optimization', href: '/who-we-serve#mining4' },
          ]
        },
      ],

    },
    { label: 'About', href: '/about' },
    { label: 'Resources', href: '/resources' },
    { label: 'Licenses', href: '/licenses' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Helper to split dropdown into columns of max 3 items
  const splitColumns = (items, maxPerColumn = 3) => {
    const columns = [];
    let currentColumn = [];
    items.forEach((item, idx) => {
      currentColumn.push(item);
      if ((idx + 1) % maxPerColumn === 0) {
        columns.push(currentColumn);
        currentColumn = [];
      }
    });
    if (currentColumn.length) columns.push(currentColumn);
    return columns;
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          PSAI POWER
        </Link>
        <nav className="header__nav">
          {navItems.map(({ label, href, dropdown }, index) => (
            <div
              key={label}
              className={`header__nav-item ${dropdown ? 'has-dropdown' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link to={href} className="header__nav-link">
                {label.toUpperCase()}
                {dropdown && (
                  <FontAwesomeIcon
                    icon={faAnglesDown}
                    className="header__arrow-icon"
                    style={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      transform: `translateY(${hoveredIndex === index ? 0 : -3}px)`,
                      marginLeft: '6px',
                    }}
                  />
                )}
              </Link>

              {dropdown && hoveredIndex === index && (
                <div className="header__dropdown multi-column">
                  {splitColumns(dropdown).map((column, colIdx) => (
                    <div key={colIdx} className="dropdown-column">
                      {column.map(({ heading, items }) => (
                        <div key={heading} className="dropdown-section">
                          <div className="dropdown-heading">{heading}</div>
                          {items.map(({ label: dLabel, href: dHref }) => (
                            <Link key={dLabel} to={dHref} className="header__dropdown-link">
                              {dLabel}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
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
