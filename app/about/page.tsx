// src/app/about/page.tsx
'use client';

import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-28 px-4"
        style={{ backgroundImage: `url('https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}
      >
        <div className="absolute inset-0 bg-slate-900 opacity-60"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-4">About PSAI POWER</h1>
          <p className="text-xl max-w-3xl mx-auto text-slate-200">
            Trusted global leader in power system design, protection, and control
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Introduction Text */}
          <div className="text-center mb-16">
            <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
              At PSAI POWER, we are a trusted global leader in power system design, protection, and control. 
              With extensive experience across diverse regions, including North America, Latin America, the Caribbean, and Asia, 
              we have successfully delivered innovative, reliable, and cost-effective power solutions for utilities, mines, and industrial clients.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mission Card */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 4h-1v-2a1 1 0 00-2 0v2H9v-4h1" />
                    <circle cx="12" cy="8" r="1" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
                <p className="text-slate-600 leading-relaxed">
                  We pride ourselves on our customer-centric approach, working closely with clients to develop tailored solutions that meet their specific needs. Our team is dedicated to delivering innovative power measurement and protection instruments that are easy to install and ensure minimal outage durations.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276a1 1 0 000-1.448L15 4m-6 6l-4.553 2.276a1 1 0 000 1.448L9 16" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 16v4m6-4v4" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
                <p className="text-slate-600 leading-relaxed">
                  We go beyond traditional approaches to bring forward-thinking technologies that improve both the performance and reliability of power systems while minimizing disruptions. Our goal is to lead the industry in advanced grid optimization, renewable energy integration, and cutting-edge protection schemes.
                </p>
              </div>
            </div>

            {/* Expertise Card */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L15 12.75 9.75 8.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12.75v6.25M15 12.75l6.25-2.5" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Expertise</h2>
                <p className="text-slate-600 leading-relaxed">
                  Our expertise spans a wide range of power system applications, including Distributed Energy Resource (DER) interconnections to the distribution grid with successful integrations up to 150MW. We understand the unique challenges each project presents and approach each one with a deep understanding of the technical and regulatory environments.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-16 bg-indigo-50 rounded-lg p-8 border border-indigo-100">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Global Reach, Local Expertise</h3>
              <p className="text-indigo-700 text-lg leading-relaxed">
                With projects spanning across continents and diverse regulatory environments, 
                PSAI POWER brings global best practices combined with deep local market understanding 
                to deliver power solutions that excel in performance, reliability, and compliance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;