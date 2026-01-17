// src/app/who-we-serve/[id]/page.tsx
'use client';
import { useParams } from 'next/navigation';
import React from 'react';
import Link from 'next/link';

const industryDetails: { [key: string]: any } = {
  'utilities-grid-operators': {
    title: 'Utilities & Grid Operators',
    description: 'We collaborate with utility companies to improve grid reliability, integrate new energy sources, and enhance operational efficiency.',
    fullDescription: `Whether you're transitioning to a smart grid or optimizing an existing one, we offer the tools and expertise to manage your grid infrastructure with precision. Our solutions help utilities modernize their systems while maintaining reliability and compliance.`,
    solutions: [
      'Grid reliability enhancement and modernization',
      'Smart grid integration and advanced sensor deployment',
      'Renewable energy source integration up to 150MW',
      'Operational efficiency optimization programs',
      'Infrastructure upgrade planning and implementation',
      'Real-time grid monitoring and control systems',
      'Demand response and load management solutions',
      'Regulatory compliance and reporting support'
    ],
    projects: [
      'Grid modernization for regional utilities',
      'Substation automation projects',
      'Renewable integration studies',
      'Emergency response system upgrades'
    ]
  },
  'renewable-energy': {
    title: 'Renewable Energy',
    description: 'With the world increasingly focused on sustainability, we provide renewable energy system design, integration, and optimization solutions.',
    fullDescription: `From project planning to grid connection, we help clients maximize their renewable energy output while ensuring grid stability. Our expertise spans solar, wind, hydro, and energy storage projects of all scales.`,
    solutions: [
      'Solar farm design and grid interconnection',
      'Wind power system integration and optimization',
      'Hydroelectric power system engineering',
      'Battery energy storage system design',
      'Hybrid renewable system development',
      'Grid stability and power quality assurance',
      'Interconnection studies and compliance',
      'Performance monitoring and optimization'
    ],
    projects: [
      '150MW solar farm integration',
      'Wind-to-grid connection projects',
      'Hybrid renewable microgrids',
      'Energy storage system implementation'
    ]
  },
  'industrial-manufacturing': {
    title: 'Industrial Manufacturing',
    description: 'Power systems for industrial environments require a unique blend of reliability, efficiency, and scalability.',
    fullDescription: `We offer tailored solutions for large-scale manufacturing operations, helping businesses optimize their energy usage, reduce downtime, and ensure continuous power for critical operations in demanding industrial environments.`,
    solutions: [
      'Critical operation power reliability',
      'Energy consumption optimization',
      'Downtime reduction strategies',
      'Scalable power infrastructure',
      'Power quality improvement',
      'Backup power system design',
      'Energy efficiency audits',
      'Process optimization consulting'
    ],
    projects: [
      'Automotive plant power systems',
      'Heavy manufacturing energy optimization',
      'Critical process power assurance',
      'Industrial energy management systems'
    ]
  },
  'oil-gas': {
    title: 'Oil & Gas',
    description: 'Customized power solutions for offshore platforms, refineries, and pipeline operations.',
    fullDescription: `The oil and gas sector faces specific challenges, including powering remote locations and managing complex electrical infrastructure. We deliver customized power system solutions that meet the demands of challenging environments.`,
    solutions: [
      'Remote location power solutions',
      'Offshore platform power systems',
      'Refinery electrical infrastructure',
      'Pipeline monitoring power',
      'Exploration site power supply',
      'Harsh environment electrical design',
      'Safety and compliance systems',
      'Emergency power backup'
    ],
    projects: [
      'Offshore platform power upgrades',
      'Refinery electrical modernization',
      'Remote pipeline power systems',
      'Exploration camp power solutions'
    ]
  },
  'government-regulatory': {
    title: 'Government & Regulatory',
    description: 'Consulting on power infrastructure projects, compliance, and system upgrades.',
    fullDescription: `We work with governmental organizations and regulatory bodies to provide consulting on power infrastructure projects, compliance, and system upgrades. Our team ensures you meet regulatory standards while implementing future-proof solutions.`,
    solutions: [
      'Infrastructure project consulting',
      'Regulatory compliance guidance',
      'System upgrade planning',
      'Energy security solutions',
      'Sustainability implementation',
      'Policy development support',
      'Standards compliance auditing',
      'Public infrastructure planning'
    ],
    projects: [
      'National grid modernization',
      'Regulatory compliance frameworks',
      'Public utility upgrades',
      'Energy security initiatives'
    ]
  },
  'mining-industry': {
    title: 'Mining Industry',
    description: 'Highly reliable power systems for remote mining operations and heavy equipment.',
    fullDescription: `Mining operations require highly reliable power systems to support equipment and machinery in often remote, harsh environments. We specialize in providing power system solutions that ensure uninterrupted power for mining operations.`,
    solutions: [
      'Remote site power solutions',
      'Heavy equipment power systems',
      'Grid-connected optimization',
      'Energy management systems',
      'Harsh environment expertise',
      'Backup power for critical operations',
      'Power distribution for mining sites',
      'Energy cost optimization'
    ],
    projects: [
      'Remote mine power infrastructure',
      'Heavy equipment electrical systems',
      'Mining camp power solutions',
      'Processing plant power optimization'
    ]
  }
};

export default function IndustryDetailPage() {
  const params = useParams();
  const industryId = params.id as string;
  const industry = industryDetails[industryId];

  if (!industry) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Industry Not Found</h1>
          <Link href="/who-we-serve" className="text-green-600 hover:underline">
            ← Back to Industries
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-900 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/who-we-serve" className="text-green-200 hover:text-white mb-6 inline-block">
            ← Back to Industries
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{industry.title}</h1>
          <p className="text-xl text-green-100 max-w-3xl">{industry.description}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Main Content */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Industry Overview</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {industry.fullDescription}
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Solutions</h3>
            <div className="space-y-4 mb-8">
              {industry.solutions.map((solution: string, index: number) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 mr-4">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{solution}</span>
                </div>
              ))}
            </div>

            {industry.projects && (
              <>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Example Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {industry.projects.map((project: string, index: number) => (
                    <div key={index} className="bg-green-50 rounded-lg p-4">
                      <p className="text-green-800 font-medium">{project}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Sidebar/CTA */}
          <div className="bg-white rounded-xl shadow-md p-8 h-fit">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Get Industry Solutions</h3>
            <p className="text-gray-600 mb-6">
              Ready to implement tailored power solutions for your industry?
            </p>
            <Link
              href="/contact-us"
              className="w-full bg-green-600 text-white text-center font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors block"
            >
              Contact Our Experts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}