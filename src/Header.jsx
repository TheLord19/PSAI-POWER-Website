import React, { useState } from 'react';

export default function Header() {
  const navItems = [
    // { label: 'Home', href: '#' },
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

  // Track which nav item is hovered to show dropdown
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <a href="/" style={styles.logoText}>
          PSIPOWER
        </a>
        <nav style={styles.nav}>
          {navItems.map(({ label, href, dropdown }, index) => (
            <div
              key={label}
              style={styles.navItem}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a
                href={href}
                style={styles.navLink}
                onMouseEnter={e => (e.target.style.borderBottomColor = '#0078d4')}
                onMouseLeave={e => (e.target.style.borderBottomColor = 'transparent')}
              >
                {label.toUpperCase()}
              </a>
              {dropdown && hoveredIndex === index && (
                <div style={styles.dropdown}>
                  {dropdown.map(({ label: dLabel, href: dHref }) => (
                    <a
                      key={dLabel}
                      href={dHref}
                      style={styles.dropdownLink}
                      onMouseEnter={e => (e.target.style.backgroundColor = '#e6f0ff')}
                      onMouseLeave={e => (e.target.style.backgroundColor = 'transparent')}
                    >
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

const styles = {
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    backgroundColor: '#fff', // pure white background
    boxShadow: '0 2px 8px rgb(0 0 0 / 0.1)',
    padding: '0.5rem 0',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem ',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoText: {
    fontWeight: '700',
    fontSize: '1.5rem',
    color: '#0d214d',
    textDecoration: 'none',
    margin:'3rem',
    // justifyContent:'spaced-between'
    marginRight: '23rem',  // set only right margin for spacing from nav
  },
  nav: {
    display: 'flex',
    gap: '2rem',
    marginLeft: 'auto',
    paddingRight:'2rem' // push nav to right edge inside container
  },
  navItem: {
    position: 'relative', // needed for dropdown absolute positioning
  },
  navLink: {
    color: '#333',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.9rem',
    borderBottom: '2px solid transparent',
    paddingBottom: 4,
    transition: 'border-color 0.25s ease',
    cursor: 'pointer',
  },
  dropdown: {
    position: 'absolute',
    top: 'calc(100% + 6px)', // just below nav link, with slight gap
    left: 0,
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgb(0 0 0 / 0.1)',
    borderRadius: 4,
    minWidth: 160,
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1500,
  },
  dropdownLink: {
    padding: '0.5rem 1rem',
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500',
    fontSize: '0.9rem',
    whiteSpace: 'nowrap',
  },
};
