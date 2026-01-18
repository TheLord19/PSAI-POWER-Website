// src/app/licenses/page.tsx
'use client';
import React from 'react';

export default function LicensesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-28 px-4"
        style={{ backgroundImage: `url('https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}
      >
        <div className="absolute inset-0 bg-orange-900 opacity-60"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Licenses & Certifications</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Our credentials and regulatory compliance certifications
          </p>
        </div>
      </section>

      {/* Under Construction Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          
          {/* Sharper Construction Animation with Clock */}
          <div className="flex justify-center mb-8">
            <div className="relative w-32 h-32">
              {/* Outer rotating ring - SLOWER */}
              <div className="absolute inset-0 border-4 border-blue-500 border-dashed rounded-full animate-spin-very-slow"></div>
              
              {/* Clock Face */}
              <div className="absolute inset-2 bg-white rounded-full shadow-inner">
                {/* Clock Center - Positioned slightly below center */}
                <div className="absolute top-[50%] left-1/2 w-3 h-3 bg-blue-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>

                {/* Hour Hand - VERY SLOW moving */}
                <div className="absolute top-[33%] left-1/2 w-1 h-8 bg-blue-800 rounded-full transform -translate-x-1/2 -translate-y-1/2 origin-[50%_100%] animate-hour-hand-very-slow"></div>

                {/* Minute Hand - SLOW moving */}
                <div className="absolute top-[31%] left-1/2 w-1 h-10 bg-blue-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 origin-[50%_100%] animate-minute-hand-slow"></div>

                {/* Second Hand - MEDIUM moving */}
                <div className="absolute top-[26%] left-1/2 w-0.5 h-12 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 origin-[50%_100%] animate-second-hand-medium"></div>
                
                
              </div>
              
              
            </div>
          </div>

          {/* Moving Text Animation */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-pulse">
              Page Under Construction
            </h2>
            <div className="flex justify-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
            </div>
          </div>

          {/* Animated Progress Bar - 50% and slower */}
          <div className="mb-8">
            <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full animate-progress-slow"
                style={{ width: '50%' }}
              ></div>
            </div>
            <p className="text-gray-600 text-sm">We're working hard to bring you this content - 50% complete</p>
          </div>

          {/* Content Preview */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 border-2 border-dashed border-gray-300">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Coming Soon:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <p className="text-gray-600 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
                  Professional Engineering Licenses
                </p>
                <p className="text-gray-600 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                  Safety Certifications
                </p>
                <p className="text-gray-600 flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 animate-pulse"></span>
                  Compliance Documentation
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></span>
                  Industry Accreditations
                </p>
                <p className="text-gray-600 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></span>
                  Quality Management Systems
                </p>
                <p className="text-gray-600 flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 animate-pulse"></span>
                  Regulatory Compliance
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info with Animation */}
          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500 animate-pulse-slow">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Need immediate assistance?</h3>
            <p className="text-blue-700 mb-4">
              Contact us directly for license verification or certification inquiries.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105 duration-300 shadow-lg">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        /* Very slow rotation for blue ring */
        @keyframes spin-very-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-very-slow {
          animation: spin-very-slow 8s linear infinite;
        }

        /* Clock hand animations - SLOWER */
        @keyframes hour-hand-very-slow {
          from { transform: translate(-50%, -45%) rotate(0deg); }
          to { transform: translate(-50%, -45%) rotate(360deg); }
        }
        .animate-hour-hand-very-slow {
          animation: hour-hand-very-slow 60s linear infinite;
        }

        @keyframes minute-hand-slow {
          from { transform: translate(-50%, -45%) rotate(0deg); }
          to { transform: translate(-50%, -45%) rotate(360deg); }
        }
        .animate-minute-hand-slow {
          animation: minute-hand-slow 30s linear infinite;
        }

        @keyframes second-hand-medium {
          from { transform: translate(-50%, -45%) rotate(0deg); }
          to { transform: translate(-50%, -45%) rotate(360deg); }
        }
        .animate-second-hand-medium {
          animation: second-hand-medium 10s linear infinite;
        }

        
        /* Existing animations */
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        @keyframes hammer-swing {
          0%, 100% { transform: rotate(45deg); }
          50% { transform: rotate(55deg); }
        }
        .animate-hammer-swing {
          animation: hammer-swing 1.5s ease-in-out infinite;
        }
        
        @keyframes wrench-rotate {
          0%, 100% { transform: rotate(-45deg); }
          50% { transform: rotate(-35deg); }
        }
        .animate-wrench-rotate {
          animation: wrench-rotate 2s ease-in-out infinite;
        }
        
        @keyframes ping-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        .animate-ping-slow {
          animation: ping-slow 2s ease-in-out infinite;
        }
        
        @keyframes progress-slow {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(1); }
          100% { transform: scaleX(0); }
        }
        .animate-progress-slow {
          animation: progress-slow 12s ease-in-out infinite;
          transform-origin: left;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}