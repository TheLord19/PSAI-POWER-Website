// src/app/layout.tsx

import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { archivo, sourceSerif } from "./fonts";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ORG, SITE_URL } from "@/lib/constants";
import { jsonLd, organizationSchema } from "@/lib/structured-data";
import "../styles/globals.css";

const TITLE = "PSAI Power — Power system engineering, Sudbury, Ontario";
const DESCRIPTION =
  "Power system studies, protection and control, arc flash, renewable interconnection, substation design and commissioning for utilities, mines and renewable developers.";

// Pages set their own title, description and canonical via pageMetadata().
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s — PSAI Power" },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: ORG.NAME,
    locale: "en_CA",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export const viewport: Viewport = {
  themeColor: "#172A3A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA" className={`${archivo.variable} ${sourceSerif.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-grow">
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(organizationSchema())}
        />
        <Analytics />
      </body>
    </html>
  );
}
