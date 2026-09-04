// src/app/layout.tsx

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "../styles/globals.css";

import PageTransition from "../components/layout/PageTransition";
import I18nProvider from "../components/layout/I18nProvider";
import ScrollMeter from "../components/effects/ScrollMeter";
import { Analytics } from "@vercel/analytics/react";
import { CONTACT } from "@/lib/constants";

const outfit = Outfit({ subsets: ["latin"] });

const SITE_URL = "https://psaipowerinc.ca";
const SITE_TITLE = "PSAI POWER - Powering the Future with Energy Solutions";
const SITE_DESCRIPTION =
  "Trusted power engineering solutions ensuring grid reliability, modernization, and seamless renewable energy integration across Canada and North America.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "PSAI Power Inc.",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_CA",
    images: [
      {
        url: "/images/hero/services.jpg",
        width: 1200,
        height: 630,
        alt: "PSAI Power Inc. — Power Engineering Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/hero/services.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "PSAI Power Inc.",
  url: SITE_URL,
  email: CONTACT.EMAIL,
  telephone: CONTACT.PHONE,
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.ADDRESS.LINE1,
    addressLocality: "Sudbury",
    addressRegion: "ON",
    postalCode: "P3A 2V5",
    addressCountry: "CA",
  },
  areaServed: "CA",
  sameAs: [CONTACT.LINKEDIN],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased flex flex-col min-h-screen bg-gray-50`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <I18nProvider>
          <Header />

          <main className="flex-grow">
            <PageTransition>{children}</PageTransition>
          </main>

          <Footer />
          <ScrollMeter />
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  );
}
