// src/app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import '../styles/globals.css';

import PageTransition from '../components/layout/PageTransition';
import { Analytics } from '@vercel/analytics/react'; // ✅ ADD THIS

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PSAI POWER - Powering the Future with Energy Solutions',
  description:
    'Trusted power engineering solutions ensuring grid reliability, modernization, and seamless renewable energy integration across Canada and North America.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased flex flex-col min-h-screen bg-gray-50`}
      >
        <Header />

        <main className="flex-grow">
          <PageTransition>
            {children}
          </PageTransition>
        </main>

        <Footer />

        <Analytics /> {/* ✅ ADD THIS (bottom of body) */}
      </body>
    </html>
  );
}
