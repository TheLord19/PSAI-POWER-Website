'use client';
import './globals.css';
import React, { useEffect, useState } from 'react';
import Header from '@/labels/Header';
import Footer from '@/labels/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
