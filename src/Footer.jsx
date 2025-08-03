import React from 'react';

// You can replace the LinkedIn SVG with an image/icon library if you want
const LinkedInIcon = () => (
  <svg
    fill="white"
    height="24"
    width="24"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.79v2.18h.07c.67-1.26 2.3-2.59 4.74-2.59 5.07 0 6 3.34 6 7.68V24h-5v-7.08c0-1.69-.03-3.86-2.35-3.86-2.36 0-2.72 1.85-2.72 3.75V24h-5V8z" />
  </svg>
);

export default function Footer() {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Who We Serve', href: '#who-we-serve' },
    { label: 'Resources', href: '#resources' },
    { label: 'Licenses', href: '#licenses' },
    { label: 'Contact Us', href: '#contact' },
  ];
  const [hover , setHover]= React.useState(false);
  return (
    <footer style={styles.footer}>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <div style={styles.inner}>
        <div style={styles.brandCol}>
          <h2 style={styles.logo}>PSIPOWER</h2>
          <p style={styles.tagline}>Reliable energy solutions</p>
          <p style={styles.phonenumber}>1-800-123-4567</p>
          <button
            style={{
                ...styles.seeMoreButton,
                backgroundColor: hover ? '#fff' : '#003366',
                color: hover ? '#003366' : '#fff',
                borderColor: '#fff',
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            See More
            
          </button>
        </div>

        <div style={styles.linkCols}>
          <div style={styles.col}>
            <strong style={styles.sectionTitle}>EXPLORE</strong>
            <div style={styles.linksGrid}>
              {navItems.map(({ label, href }) => (
                <a key={label} href={href} style={styles.link}>
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div style={styles.col}>
            <strong style={styles.sectionTitle}>FOLLOW US</strong>
            <a
              href="https://linkedin.com/company/psipower"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={styles.socialLink}
            >
              <LinkedInIcon />
              <span style={{ marginLeft: 8 }}>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <div style={styles.bottom}>
        © {new Date().getFullYear()} PSIPOWER. All rights reserved.
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#003366',
    color: '#fff',
    padding: '7rem 4rem',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.9rem',
  },
  inner: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto 2rem',
    gap: '10rem',
  },
  brandCol: {
    flex: '1 1 200px',
    marginRight: '2rem',
    paddingRight: '2rem',
    borderRight: '1px solid rgba(255, 255, 255, 7)',  // vertical line
  },
  linkCols: {
    display: 'flex',
    flex: '3 1 600px',
    gap: '15rem',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  sectionTitle: {
    marginBottom: '1rem',
    fontWeight: '700',
    fontSize: '1.1rem',
  },
  logo: {
    fontSize: '1.5rem',
    margin: 0,
  },
  tagline: {
    margin: '0.5rem 0',
    fontWeight: '300',
  },
  linksGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, auto)',
    gap: '0.8rem 2rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    whiteSpace: 'nowrap',
  },
  socialLink: {
    display: 'inline-flex',
    alignItems: 'center',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '600',
    marginTop: 4,
  },
  bottom: {
    textAlign: 'center',
    borderTop: '1px solid rgba(255,255,255,0.3)',
    paddingTop: '1rem',
    fontSize: '0.8rem',
  },
  phoneNumber: {
    marginTop: '0.5rem',
    marginBottom: '1.2rem',
    fontSize: '1rem',
    color: '#cce4ff',
    fontWeight: '500',
  },

  seeMoreButton: {
    position: 'relative',
    background: '#003366',
    border: '2px solid #fff',
    color: '#fff',
    padding: '0.4rem 1.2rem',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    overflow: 'hidden',
    borderRadius: '27px',
    alignSelf: 'flex-start',
    transition: 'color 0.3s ease-in-out',
    textDecoration: 'none',        // ✅ Prevent underline on hover
    outline: 'none',
  },

  
};
