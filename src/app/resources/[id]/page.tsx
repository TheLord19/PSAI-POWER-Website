// src/app/resources/[id]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import React from 'react';

const resourceContent: { [key: string]: { title: string; content: string } } = {
  'technical-whitepapers': {
    title: 'Technical Whitepapers',
    content: 'Access our library of technical whitepapers covering advanced power system design, protection schemes, grid modernization strategies, and renewable energy integration methodologies. These documents represent our cutting-edge research and practical implementations across North America.'
  },
  'case-studies': {
    title: 'Case Studies',
    content: 'Explore real-world case studies showcasing our successful power system projects. Learn about our work with utilities, industrial clients, and renewable energy providers. Each case study details the challenges faced, solutions implemented, and results achieved.'
  },
  'integration-guides': {
    title: 'Integration Guides',
    content: 'Comprehensive guides for Distributed Energy Resource (DER) interconnections, renewable energy integration, and grid modernization. These technical documents provide step-by-step instructions, best practices, and regulatory compliance information.'
  },
  'compliance-documents': {
    title: 'Compliance Documents',
    content: 'Access regulatory compliance documentation, standards adherence guidelines, and certification materials. Ensure your power systems meet all necessary industry standards and governmental regulations.'
  },
  'technical-briefs': {
    title: 'Technical Briefs',
    content: 'Concise technical briefs covering specific power system topics, innovative solutions, and emerging technologies. Perfect for quick reference and staying updated with industry advancements.'
  },
  'best-practices': {
    title: 'Best Practices',
    content: 'Industry best practices for power system maintenance, optimization, and reliability. These documents compile decades of experience into actionable guidelines for optimal system performance.'
  }
};

export default function ResourceDetailPage() {
  const params = useParams();
  const resourceId = params.id as string;
  const resource = resourceContent[resourceId];

  if (!resource) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900">Resource Not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{resource.title}</h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-700 text-lg leading-relaxed">{resource.content}</p>
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Access Resources</h3>
            <p className="text-blue-700">Contact us to request access to our full resource library or schedule a technical consultation.</p>
          </div>
        </div>
      </div>
    </div>
  );
}