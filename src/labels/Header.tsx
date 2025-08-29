'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown, faMagnifyingGlass, faXmark, faGlobe } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/Header.module.css';

export default function Header() {
  const navItems = [
    {
      label: 'Services',
      href: '/services',
      dropdown: [
        {
          heading: 'Consulting',
          items: [
            { label: 'Power System Design', href: '/services#consulting1' },
            { label: 'Grid Modernization', href: '/services#consulting2' },
            { label: 'Renewable Integration', href: '/services#consulting3' },
            { label: 'Power Analysis', href: '/services#consulting4' },
          ],
        },
        {
          heading: 'Maintenance',
          items: [
            { label: 'Preventive Maintenance', href: '/services#maintenance1' },
            { label: 'Corrective Maintenance', href: '/services#maintenance2' },
            { label: 'System Optimization', href: '/services#maintenance3' },
          ],
        },
      ],
    },
    {
      label: 'Who We Serve',
      href: '/who-we-serve',
      dropdown: [
        {
          heading: 'Utilities & Grid Operators',
          items: [
            { label: 'Grid Reliability', href: '/who-we-serve#utilities' },
            { label: 'Smart Grid Transition', href: '/who-we-serve#utilities2' },
          ],
        },
        {
          heading: 'Renewable Energy',
          items: [
            { label: 'Solar', href: '/who-we-serve#renewable-solar' },
            { label: 'Wind', href: '/who-we-serve#renewable-wind' },
            { label: 'Hydro', href: '/who-we-serve#renewable-hydro' },
            { label: 'Energy Storage', href: '/who-we-serve#renewable-storage' },
          ],
        },
        {
          heading: 'Industrial Manufacturing',
          items: [
            { label: 'Factories', href: '/who-we-serve#industrial-factories' },
            { label: 'Production Plants', href: '/who-we-serve#industrial-plants' },
          ],
        },
        {
          heading: 'Oil & Gas',
          items: [
            { label: 'Offshore Platforms', href: '/who-we-serve#oil-gas1' },
            { label: 'Refineries', href: '/who-we-serve#oil-gas2' },
            { label: 'Pipelines', href: '/who-we-serve#oil-gas3' },
          ],
        },
        {
          heading: 'Government & Regulatory',
          items: [
            { label: 'Consulting', href: '/who-we-serve#gov-consulting' },
            { label: 'Compliance', href: '/who-we-serve#gov-compliance' },
          ],
        },
        {
          heading: 'Mining Industry',
          items: [
            { label: 'Remote Power Supply', href: '/who-we-serve#mining1' },
            { label: 'Heavy Equipment Power', href: '/who-we-serve#mining2' },
            { label: 'Grid-Connected Solutions', href: '/who-we-serve#mining3' },
            { label: 'Energy Optimization', href: '/who-we-serve#mining4' },
          ],
        },
      ],
    },
    { label: 'About', href: '/about' },
    { label: 'Resources', href: '/resources' },
    { label: 'Licenses', href: '/licenses' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('EN');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleLanguage = () => {
    setCurrentLanguage(prev => prev === 'EN' ? 'FR' : 'EN');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const splitColumns = <T,>(items: T[], maxPerColumn = 3): T[][] => {
    const columns: T[][] = [];
    let currentColumn: T[] = [];
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
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <Link href="/" className={styles.header__logo}>
            PSAI POWER
          </Link>
          
          {/* Language Toggle - Top Right Corner */}
          <div className={styles.language_toggle}>
            <button 
              className={currentLanguage === 'EN' ? styles.active : ''}
              onClick={() => setCurrentLanguage('EN')}
            >
              EN
            </button>
            <span>|</span>
            <button 
              className={currentLanguage === 'FR' ? styles.active : ''}
              onClick={() => setCurrentLanguage('FR')}
            >
              FR
            </button>
          </div>

          <nav className={styles.header__nav}>
            {navItems.map(({ label, href, dropdown }, index) => (
              <div
                key={label}
                className={`${styles.header__nav_item} ${dropdown ? styles.has_dropdown : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link href={href} className={styles.header__nav_link}>
                  {label.toUpperCase()}
                  {dropdown && (
                    <FontAwesomeIcon
                      icon={faAnglesDown}
                      className={styles.header__arrow_icon}
                      style={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        transform: `translateY(${hoveredIndex === index ? 0 : -3}px)`,
                        marginLeft: '6px',
                      }}
                    />
                  )}
                </Link>

                {dropdown && hoveredIndex === index && (
                  <div className={`${styles.header__dropdown} ${styles.multi_column}`}>
                    {splitColumns(dropdown).map((column, colIdx) => (
                      <div key={colIdx} className={styles.dropdown_column}>
                        {column.map(({ heading, items }) => (
                          <div key={heading} className={styles.dropdown_section}>
                            <div className={styles.dropdown_heading}>{heading}</div>
                            {items.map(({ label: dLabel, href: dHref }) => (
                              <Link href={dHref} key={dLabel} className={styles.header__dropdown_link}>
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
            
            {/* Search Button */}
            <button 
              className={styles.search_toggle}
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </nav>
        </div>
      </header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className={styles.search_overlay}>
          <div className={styles.search_container}>
            <form onSubmit={handleSearch} className={styles.search_form}>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.search_input}
                autoFocus
              />
              <button type="submit" className={styles.search_submit}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
            <button 
              onClick={() => setIsSearchOpen(false)}
              className={styles.search_close}
              aria-label="Close search"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}