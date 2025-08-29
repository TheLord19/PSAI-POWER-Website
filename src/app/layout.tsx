'use client';
import './globals.css';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Header from '../labels/Header';
import Footer from '../labels/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    console.log('window.innerWidth:', window.innerWidth);
    console.log('document.documentElement.clientWidth:', document.documentElement.clientWidth);
    window.scrollTo(0, 0);
    setIsMounted(false);
    const timer = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <html lang="en">
      <body className={isMounted ? 'mounted' : ''}>
        <div className={`header-container ${isMounted ? 'mounted' : ''}`}>
          <Header />
        </div>
        <main className="content-container">
          {children}
        </main>
        <div className={`footer-container ${isMounted ? 'mounted' : ''}`}>
          <Footer />
        </div>
      </body>
    </html>
  );
}
