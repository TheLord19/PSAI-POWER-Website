// who-we-serve/[sector]/page.tsx

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface SectorDetail {
  id: string;
  title: string;
  description: string;
  content: React.ReactNode;
}

const sectorData: Record<string, SectorDetail> = {
  utilities: {
    id: "utilities",
    title: "Utilities & Grid Operators",
    description: "Improving grid reliability and integrating new energy sources",
    content: (
      <div className="space-y-6">
        <p>
          We collaborate with utility companies to improve grid reliability, integrate new energy sources, 
          and enhance operational efficiency. Whether you're transitioning to a smart grid or optimizing 
          an existing one, we offer the tools and expertise to manage your grid infrastructure with precision.
        </p>
        <h3 className="text-xl font-semibold text-blue-900 mt-8">Our Services for Utilities</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Grid modernization and smart grid implementation</li>
          <li>Renewable energy integration solutions</li>
          <li>Grid reliability and resilience planning</li>
          <li>Demand response and energy management systems</li>
          <li>Distribution automation and control systems</li>
        </ul>
      </div>
    ),
  },
  renewable: {
    id: "renewable",
    title: "Renewable Energy",
    description: "Maximizing renewable energy output and grid stability",
    content: (
      <div className="space-y-6">
        <p>
          With the world increasingly focused on sustainability, we provide renewable energy system design, 
          integration, and optimization solutions for solar, wind, hydro, and energy storage projects. 
          From project planning to grid connection, we help clients maximize their renewable energy output 
          while ensuring grid stability.
        </p>
        <h3 className="text-xl font-semibold text-blue-900 mt-8">Renewable Energy Solutions</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Solar farm design and grid integration</li>
          <li>Wind power development and optimization</li>
          <li>Hydroelectric power system modernization</li>
          <li>Energy storage system implementation</li>
          <li>Hybrid renewable energy systems</li>
        </ul>
      </div>
    ),
  },
  // Add content for other sectors...
};

interface PageProps {
  params: Promise<{
    sector: string;
  }>;
}

export default async function SectorPage({ params }: PageProps) {
  const { sector } = await params; // Await params if necessary
  const sectorDetail = sectorData[sector];

  if (!sectorDetail) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="text-3xl">⚡</div>
              <span className="text-2xl font-bold">PSAI POWER</span>
            </div>
            <ul className="hidden md:flex space-x-8">
              <li><Link href="/" className="hover:text-blue-200 transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-blue-200 transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-blue-200 transition-colors">About</Link></li>
              <li><Link href="/who-we-serve" className="font-semibold text-blue-300">Who We Serve</Link></li>
              <li><Link href="/contact" className="hover:text-blue-200 transition-colors">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <nav className="flex text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/who-we-serve" className="hover:text-blue-600">Who We Serve</Link>
          <span className="mx-2">/</span>
          <span className="text-blue-800 font-medium">{sectorDetail.title}</span>
        </nav>
      </div>

      {/* Sector Detail */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-12">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{sectorDetail.title}</h1>
              <p className="text-xl text-gray-600">{sectorDetail.description}</p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              {sectorDetail.content}
            </div>

            <div className="mt-12 text-center">
              <Link 
                href="/who-we-serve" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All Sectors
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="text-2xl">⚡</div>
            <span className="text-2xl font-bold">PSAI POWER</span>
          </div>
          <p className="text-gray-400 mb-6">Innovative power solutions for a sustainable future</p>
          <div className="flex justify-center space-x-8 mb-6">
            <Link href="/privacy" className="text-blue-400 hover:text-blue-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-blue-400 hover:text-blue-300 transition-colors">Terms of Service</Link>
            <Link href="/careers" className="text-blue-400 hover:text-blue-300 transition-colors">Careers</Link>
            <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">Contact Us</Link>
          </div>
          <p className="text-gray-500">© 2022023 PSAI POWER. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(sectorData).map((sector) => ({
    sector,
  }));
}
