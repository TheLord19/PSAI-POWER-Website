// src/app/services/[id]/page.tsx
'use client';
import { useParams } from 'next/navigation';
import React from 'react';
import Link from 'next/link';

const serviceDetails: { [key: string]: any } = {
  'power-system-design': {
    title: 'Power System Design & Engineering',
    description: 'Our team offers end-to-end design services for power systems, ranging from initial feasibility studies to final implementation and testing.',
    fullDescription: `Whether you're looking to build a new substation, upgrade an existing facility, or optimize your transmission network, we provide comprehensive design solutions that incorporate advanced technologies like automation, smart grids, and digital control systems.`,
    features: [
      'Customized System Design tailored to operational needs',
      'Power Distribution & Transmission Substations Design',
      'Substation Layout & Configuration for efficient land use',
      'Electrical Schematics & Protection strategies',
      'Switchgear & Transformer Sizing for optimal performance',
      'Feasibility Studies & detailed planning',
      'Component Selection & vendor coordination',
      'End-to-end Project Management'
    ]
  },
  'grid-modernization': {
    title: 'Grid Modernization & Optimization',
    description: 'As the energy landscape evolves, grids must become smarter, more flexible, and resilient.',
    fullDescription: `Our expertise includes retrofitting and upgrading existing substations, improving their operational capabilities, safety features, and efficiency. We implement condition monitoring systems and advanced control strategies for better performance.`,
    features: [
      'Smart Grid Integration with advanced sensors',
      'Substation Upgrades and modernization',
      'Energy Storage Solutions for grid stability',
      'Advanced Grid Control Systems (SCADA)',
      'Demand Response Programs for load management',
      'Real-time data analytics implementation',
      'Predictive maintenance systems',
      'Grid resilience enhancement'
    ]
  },
  'renewable-integration': {
    title: 'Renewable Energy Integration',
    description: 'Comprehensive solutions for integrating renewable energy sources into the grid.',
    fullDescription: `Integrating renewable energy into existing power systems can be complex due to issues like variability and grid stability. Our experts provide comprehensive solutions for solar, wind, hydro, and storage integration.`,
    features: [
      'Interconnection Studies and grid compliance',
      'Hybrid System Design combining renewable sources',
      'Grid Stability Optimization techniques',
      'Regulatory and Permitting support',
      'Substation Integration for renewables',
      'Advanced forecasting systems',
      'Power electronics integration',
      'Storage system implementation'
    ]
  },
  'system-analysis': {
    title: 'Power System Analysis & Simulation',
    description: 'Detailed system performance analysis using state-of-the-art software tools.',
    fullDescription: `Our power system analysis services provide a detailed understanding of how your system will perform under different conditions using advanced simulation software and methodologies.`,
    features: [
      'Load Flow Studies for steady-state analysis',
      'Fault Analysis & Protection Coordination',
      'Dynamic Stability Analysis for transient conditions',
      'Contingency Analysis for risk assessment',
      'Power Quality Analysis and improvement',
      'Substation Performance Simulation',
      'Harmonic analysis and mitigation',
      'Reliability assessment studies'
    ]
  },
  'electrical-protection': {
    title: 'Electrical System Protection',
    description: 'Design and optimization of protection schemes for safety and reliability.',
    fullDescription: `Protection systems are essential for ensuring the safety and reliability of power systems. We specialize in designing and optimizing protection schemes that protect equipment from faults while minimizing downtime.`,
    features: [
      'Relay Coordination and setting optimization',
      'Short-Circuit and Arc Flash Analysis',
      'Backup Protection Systems design',
      'System-wide Protection Optimization',
      'Substation Protection Schemes',
      'Fault detection and isolation systems',
      'Protection relay programming',
      'Safety risk assessment and mitigation'
    ]
  },
  'energy-audits': {
    title: 'Energy Audits & Efficiency Studies',
    description: 'Identify inefficiencies and suggest optimization strategies.',
    fullDescription: `Our energy audits identify inefficiencies in your power systems and suggest actionable strategies for optimization. We help clients reduce costs and enhance energy efficiency across various facilities.`,
    features: [
      'Energy Consumption Analysis and benchmarking',
      'System Optimization recommendations',
      'Cost-Benefit Analysis for improvements',
      'Compliance & Sustainability support',
      'Energy waste identification',
      'Efficiency upgrade planning',
      'Carbon emission reduction strategies',
      'ROI analysis for energy projects'
    ]
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const serviceId = params.id as string;
  const service = serviceDetails[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link href="/services" className="text-blue-600 hover:underline">
            ← Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/services" className="text-blue-200 hover:text-white mb-6 inline-block">
            ← Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">{service.description}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Main Content */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Overview</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {service.fullDescription}
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Features</h3>
            <div className="space-y-4">
              {service.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1 mr-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar/CTA */}
          <div className="bg-white rounded-xl shadow-md p-8 h-fit">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Get Started</h3>
            <p className="text-gray-600 mb-6">
              Ready to implement these solutions for your power system needs?
            </p>
            <Link
              href="/contact-us"
              className="w-full bg-blue-600 text-white text-center font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors block"
            >
              Contact Our Experts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}