// src/app/services/page.tsx
'use client';
import React from 'react';
import Link from 'next/link';

const services = [
  {
    id: 'power-system-design',
    title: 'Power System Design & Engineering',
    description: 'End-to-end design services from feasibility studies to final implementation and testing.',
    features: [
      'Customized System Design',
      'Substation Design & Configuration', 
      'Feasibility Studies & Planning',
      'Component Selection & Sizing',
      'Project Management'
    ]
  },
  {
    id: 'grid-modernization',
    title: 'Grid Modernization & Optimization', 
    description: 'Advanced solutions to modernize and optimize existing power grids.',
    features: [
      'Smart Grid Integration',
      'Substation Upgrades',
      'Energy Storage Solutions',
      'Advanced Grid Control Systems',
      'Demand Response Programs'
    ]
  },
  {
    id: 'renewable-integration',
    title: 'Renewable Energy Integration',
    description: 'Comprehensive solutions for integrating solar, wind, hydro, and storage into the grid.',
    features: [
      'Interconnection Studies',
      'Hybrid System Design',
      'Grid Stability Optimization',
      'Regulatory Compliance Support',
      'Substation Integration'
    ]
  },
  {
    id: 'system-analysis',
    title: 'Power System Analysis & Simulation',
    description: 'Detailed system performance analysis using state-of-the-art software tools.',
    features: [
      'Load Flow Studies',
      'Fault Analysis & Protection Coordination',
      'Dynamic Stability Analysis',
      'Contingency Analysis',
      'Power Quality Analysis'
    ]
  },
  {
    id: 'electrical-protection', 
    title: 'Electrical System Protection',
    description: 'Design and optimization of protection schemes for safety and reliability.',
    features: [
      'Relay Coordination',
      'Short-Circuit Analysis',
      'Arc Flash Analysis',
      'Backup Protection Systems',
      'System-wide Protection Optimization'
    ]
  },
  {
    id: 'energy-audits',
    title: 'Energy Audits & Efficiency Studies',
    description: 'Identify inefficiencies and suggest optimization strategies.',
    features: [
      'Energy Consumption Analysis',
      'System Optimization',
      'Cost-Benefit Analysis',
      'Compliance & Sustainability',
      'Regulatory Support'
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Add this Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-28 px-4"
        style={{ backgroundImage: `url('https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive power system solutions tailored to your specific needs
          </p>
        </div>
      </section>

      {/* Keep the existing content below */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link 
                key={service.id} 
                href={`/services/${service.id}`}
                className="block group"
              >
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 h-full transition-all duration-300 hover:shadow-xl hover:border-blue-300">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <p className="text-sm text-blue-600 font-medium mt-2">
                        +{service.features.length - 3} more features
                      </p>
                    )}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-blue-600 text-sm font-semibold group-hover:underline">
                      Learn more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}