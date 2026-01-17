// src/app/who-we-serve/page.tsx
'use client';
import React from 'react';
import Link from 'next/link';

const industries = [
  {
    id: 'utilities-grid-operators',
    title: 'Utilities & Grid Operators',
    description: 'Collaborating with utility companies to improve grid reliability and integrate new energy sources.',
    features: [
      'Grid reliability enhancement',
      'Smart grid transition support',
      'Operational efficiency optimization',
      'Infrastructure modernization',
      'Renewable energy integration'
    ]
  },
  {
    id: 'renewable-energy',
    title: 'Renewable Energy',
    description: 'Providing system design, integration, and optimization solutions for sustainable energy projects.',
    features: [
      'Solar energy integration',
      'Wind power systems',
      'Hydroelectric solutions',
      'Energy storage projects',
      'Grid connection planning'
    ]
  },
  {
    id: 'industrial-manufacturing',
    title: 'Industrial Manufacturing',
    description: 'Tailored solutions for large-scale manufacturing operations requiring reliable power systems.',
    features: [
      'Critical operations power',
      'Energy usage optimization',
      'Downtime reduction',
      'Scalable power solutions',
      'Continuous power assurance'
    ]
  },
  {
    id: 'oil-gas',
    title: 'Oil & Gas',
    description: 'Customized power solutions for offshore platforms, refineries, and pipeline operations.',
    features: [
      'Remote location power',
      'Offshore platform solutions',
      'Refinery power systems',
      'Pipeline infrastructure',
      'Challenging environment expertise'
    ]
  },
  {
    id: 'government-regulatory',
    title: 'Government & Regulatory',
    description: 'Consulting on power infrastructure projects, compliance, and system upgrades.',
    features: [
      'Infrastructure consulting',
      'Regulatory compliance',
      'System upgrade planning',
      'Energy security solutions',
      'Sustainability implementation'
    ]
  },
  {
    id: 'mining-industry',
    title: 'Mining Industry',
    description: 'Highly reliable power systems for remote mining operations and heavy equipment.',
    features: [
      'Remote site power solutions',
      'Heavy equipment power',
      'Grid-connected optimization',
      'Energy management systems',
      'Harsh environment expertise'
    ]
  }
];

export default function WhoWeServePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Add Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-28 px-4"
        style={{ backgroundImage: `url('https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}
      >
        <div className="absolute inset-0 bg-green-900 opacity-60"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Who We Serve</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Delivering specialized power solutions across diverse industries
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <Link 
                key={industry.id} 
                href={`/who-we-serve/${industry.id}`}
                className="block group"
              >
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 h-full transition-all duration-300 hover:shadow-xl hover:border-green-300">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {industry.description}
                  </p>
                  <div className="space-y-2">
                    {industry.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {industry.features.length > 3 && (
                      <p className="text-sm text-green-600 font-medium mt-2">
                        +{industry.features.length - 3} more solutions
                      </p>
                    )}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-green-600 text-sm font-semibold group-hover:underline">
                      View industry solutions →
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