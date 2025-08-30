'use client';
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Card from "@/components/Card"; 

interface SectorCard {
  id: string;
  title: string;
  description: string;
  href: string;
}

const WhoWeServeGrid: React.FC = () => {
  const router = useRouter();
  
  const sectors: SectorCard[] = [
    {
      id: "utilities",
      title: "Utilities & Grid Operators",
      description: "Improving grid reliability and integrating new energy sources with precision management tools.",
      href: "/who-we-serve/utilities"
    },
    {
      id: "renewable",
      title: "Renewable Energy",
      description: "Maximizing renewable energy output while ensuring grid stability through innovative solutions.",
      href: "/who-we-serve/renewable"
    },
    {
      id: "industrial",
      title: "Industrial Manufacturing",
      description: "Optimizing energy usage and ensuring continuous power for critical manufacturing operations.",
      href: "/who-we-serve/industrial"
    },
    {
      id: "oil-gas",
      title: "Oil & Gas",
      description: "Customized power system solutions for offshore platforms, refineries, and pipelines.",
      href: "/who-we-serve/oil-gas"
    },
    {
      id: "government",
      title: "Government & Regulatory",
      description: "Consulting on power infrastructure projects, compliance, and system upgrades.",
      href: "/who-we-serve/government"
    },
    {
      id: "mining",
      title: "Mining Industry",
      description: "Power system solutions for remote mining operations and heavy equipment.",
      href: "/who-we-serve/mining"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-700 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Who We Serve</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Delivering innovative power solutions across multiple industries to drive efficiency, sustainability, and growth.
        </p>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Intro Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Diverse Clientele</h2>
          <p className="text-lg text-gray-600">
            At PSAI POWER, we provide tailored energy solutions to a wide range of industries. 
            Our expertise spans from traditional power systems to cutting-edge renewable technologies, 
            ensuring optimal performance for every client.
          </p>
        </div>

        {/* Sectors Grid - 3 cards per row using your Card component */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sectors.map((sector) => (
            <Card
              key={sector.id}
              title={sector.title}
              description={sector.description}
              onClick={() => router.push(sector.href)}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-700 rounded-2xl p-8 md:p-12 text-white mt-16 shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact by Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">250+</div>
              <p className="text-blue-100">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <p className="text-blue-100">Industries Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-blue-100">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">40%</div>
              <p className="text-blue-100">Average Energy Savings</p>
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
          <p className="text-gray-500">© 2025 PSAI POWER. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default WhoWeServeGrid;