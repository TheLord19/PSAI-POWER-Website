// src/app/resources/page.tsx
'use client';

import React from 'react';
import Card from '@/components/ui/Card';
import Link from 'next/link';

const resources = [
  {
    id: 'technical-whitepapers',
    title: 'Technical Whitepapers',
    description: 'In-depth research papers on power system design, protection, and grid modernization.',
  },
  {
    id: 'case-studies',
    title: 'Case Studies',
    description: 'Real-world examples of successful power system implementations across various industries.',
  },
  {
    id: 'integration-guides',
    title: 'Integration Guides',
    description: 'Comprehensive guides for DER interconnections and renewable energy integration.',
  },
  {
    id: 'compliance-documents',
    title: 'Compliance Documents',
    description: 'Regulatory and standards compliance documentation for power systems.',
  },
  {
    id: 'technical-briefs',
    title: 'Technical Briefs',
    description: 'Concise technical documents on specific power system topics and solutions.',
  },
  {
    id: 'best-practices',
    title: 'Best Practices',
    description: 'Industry best practices for power system maintenance and optimization.',
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50"> {/* Removed py-12 */}

      <section
        className="relative bg-cover bg-center text-white py-28 px-4"
        style={{ backgroundImage: `url('https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}
      >
        <div className="absolute inset-0 bg-purple-900 opacity-60"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources Library</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Access our comprehensive collection of technical documents and research materials
          </p>
        </div>
      </section>

      <div className="py-12"> {/* Keep this for spacing between hero and cards */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map(({ id, title, description }) => (
              <Link href={`/resources/${id}`} key={id} className="block">
                <Card 
                  title={title} 
                  description={description}
                  className="h-full hover:shadow-lg transition-shadow cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}