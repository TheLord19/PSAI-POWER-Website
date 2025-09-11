// src/app/about/page.tsx
'use client';

import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Image */}
      <section
        className="relative bg-cover bg-center text-white py-28 px-4"
        style={{ backgroundImage: `url('https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About PSAI POWER</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Trusted global leader in power system design, protection, and control
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-lg text-gray-700 mb-16 text-center max-w-4xl mx-auto leading-relaxed">
          At PSAI POWER, we are a trusted global leader in power system design, protection, and control. 
          With extensive experience across diverse regions, including North America, Latin America, the Caribbean, and Asia, 
          we have successfully delivered innovative, reliable, and cost-effective power solutions for utilities, mines, and industrial clients.
        </p>

        <div className="grid gap-12 md:grid-cols-3">
          {/* Mission Card */}
          <div className="relative bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
            <div className="absolute -top-8 left-8 bg-blue-500 text-white p-4 rounded-full shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 4h-1v-2a1 1 0 00-2 0v2H9v-4h1" />
                <circle cx="12" cy="8" r="1" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              We pride ourselves on our customer-centric approach, working closely with clients to develop tailored solutions that meet their specific needs. Our team is dedicated to delivering innovative power measurement and protection instruments that are easy to install and ensure minimal outage durations.
            </p>
          </div>

          {/* Vision Card */}
          <div className="relative bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
            <div className="absolute -top-8 left-8 bg-green-500 text-white p-4 rounded-full shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276a1 1 0 000-1.448L15 4m-6 6l-4.553 2.276a1 1 0 000 1.448L9 16" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 16v4m6-4v4" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              We go beyond traditional approaches to bring forward-thinking technologies that improve both the performance and reliability of power systems while minimizing disruptions. Our goal is to lead the industry in advanced grid optimization, renewable energy integration, and cutting-edge protection schemes.
            </p>
          </div>

          {/* Expertise Card */}
          <div className="relative bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
            <div className="absolute -top-8 left-8 bg-purple-500 text-white p-4 rounded-full shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L15 12.75 9.75 8.5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12.75v6.25M15 12.75l6.25-2.5" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Expertise</h2>
            <p className="text-gray-700 leading-relaxed">
              Our expertise spans a wide range of power system applications, including Distributed Energy Resource (DER) interconnections to the distribution grid with successful integrations up to 150MW. We understand the unique challenges each project presents and approach each one with a deep understanding of the technical and regulatory environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;