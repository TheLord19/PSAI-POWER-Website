'use client';

import React from 'react';
import Card from '@/components/Card';
import Link from 'next/link';

const services = [
  {
    id: 'consulting',
    title: 'Consulting Services',
    description: 'Expert advice to optimize your energy systems and infrastructure.',
  },
  {
    id: 'installation',
    title: 'Installation Services',
    description: 'Professional installation of electrical systems with guaranteed safety.',
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    description: 'Reliable ongoing support and maintenance for uninterrupted power.',
  },
  {
    id: 'custom-solutions',
    title: 'Custom Solutions',
    description: 'Tailored energy solutions designed to meet your unique needs.',
  },
];

export default function ServicesPage() {
  return (
    <section className="services-list max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map(({ id, title, description }) => (
          <Link href={`/services/${id}`} key={id} passHref legacyBehavior>
            <a>
              <Card title={title} description={description} />
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}
