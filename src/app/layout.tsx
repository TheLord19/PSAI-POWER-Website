import './globals.css'; 
import React from 'react';
import Header from '../labels/Header';
import Footer from '../labels/Footer';

export const metadata = {
  title: 'PSAIPower',
  description: 'Reliable energy solutions',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
