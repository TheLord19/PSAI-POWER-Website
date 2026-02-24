// src/app/licenses/page.tsx
'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Award, HardHat, Globe, Zap } from 'lucide-react'; // kept for potential future use

export default function LicensesPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative text-white py-28 px-4 overflow-hidden">
        <Image
          src="/images/hero/licenses.jpg"
          alt="Licenses Background"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-orange-900 opacity-60 z-10"></div>
        <div className="relative max-w-7xl mx-auto text-center z-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('licenses-hero-title')}</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            {t('licenses-hero-subtitle')}
          </p>
        </div>
      </section>

      {/* Licenses Grid */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 'peo',
                name: "Professional Engineers Ontario",
                acronym: "PEO",
                type: "Professional License",
                color: "blue",
                logoBg: "bg-blue-700",
                logoContent: (
                  <div className="flex flex-col items-center justify-center w-full h-full">
                    <span className="text-2xl font-black tracking-tight text-white leading-none">PEO</span>
                    <span className="text-[9px] font-semibold text-blue-200 tracking-widest uppercase mt-0.5 text-center leading-tight">Engineers<br />Ontario</span>
                  </div>
                )
              },
              {
                id: 'egbc',
                name: "Engineers & Geoscientists British Columbia",
                acronym: "EGBC",
                type: "Professional License",
                color: "emerald",
                logoBg: "bg-white border border-slate-200",
                logoContent: (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src="/images/logos/egbc.png" alt="EGBC Logo" className="w-full h-full object-contain p-1" />
                )
              },
              {
                id: 'wsib',
                name: "Workplace Safety & Insurance Board",
                acronym: "WSIB",
                type: "Safety Certification",
                color: "orange",
                logoBg: "bg-orange-600",
                logoContent: (
                  <div className="flex flex-col items-center justify-center w-full h-full">
                    <span className="text-2xl font-black tracking-tight text-white leading-none">WSIB</span>
                    <span className="text-[9px] font-semibold text-orange-100 tracking-widest uppercase mt-0.5 text-center leading-tight">Safety &<br />Insurance</span>
                  </div>
                )
              },
              {
                id: 'enggeomb',
                name: "Engineers Geoscientists Manitoba",
                acronym: "EngGeoMB",
                type: "Professional License",
                color: "indigo",
                logoBg: "bg-indigo-700",
                logoContent: (
                  <div className="flex flex-col items-center justify-center w-full h-full">
                    <span className="text-xl font-black tracking-tight text-white leading-none">EGM</span>
                    <span className="text-[9px] font-semibold text-indigo-200 tracking-widest uppercase mt-0.5 text-center leading-tight">Engineers<br />Geosci. MB</span>
                  </div>
                )
              },
              {
                id: 'ieee',
                name: "Institute of Electrical and Electronics Engineers",
                acronym: "IEEE",
                type: "Membership",
                color: "cyan",
                logoBg: "bg-[#00629B]",
                logoContent: (
                  <div className="flex flex-col items-center justify-center w-full h-full">
                    <span className="text-2xl font-black tracking-tight text-white leading-none">IEEE</span>
                    <span className="text-[8px] font-semibold text-blue-200 tracking-wider uppercase mt-0.5 text-center leading-tight">Electrical &<br />Electronics</span>
                  </div>
                )
              }
            ].map((license) => (
              <div key={license.id} className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${license.color}-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500`}></div>

                <div className="relative z-10">
                  <div className={`w-20 h-20 ${license.logoBg} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-md transition-all overflow-hidden`}>
                    {license.logoContent}
                  </div>

                  <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold tracking-wider uppercase mb-4">
                    {license.type}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">
                    {license.name}
                  </h3>

                  <p className="text-slate-500 font-mono text-sm">
                    {license.acronym}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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