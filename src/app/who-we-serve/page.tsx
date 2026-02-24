// src/app/who-we-serve/page.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function WhoWeServePage() {
  const { t } = useTranslation();

  const industries = [
    {
      id: 'utilities-grid-operators',
      title: t('wws-ugo-title'),
      description: t('wws-ugo-desc'),
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        t('wws-ugo-f1'),
        t('wws-ugo-f2'),
        t('wws-ugo-f3'),
        t('wws-ugo-f4'),
        t('wws-ugo-f5')
      ]
    },
    {
      id: 'renewable-energy',
      title: t('wws-re-title'),
      description: t('wws-re-desc'),
      image: "https://images.pexels.com/photos/532192/pexels-photo-532192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        t('wws-re-f1'),
        t('wws-re-f2'),
        t('wws-re-f3'),
        t('wws-re-f4'),
        t('wws-re-f5')
      ]
    },
    {
      id: 'industrial-manufacturing',
      title: t('wws-im-title'),
      description: t('wws-im-desc'),
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        t('wws-im-f1'),
        t('wws-im-f2'),
        t('wws-im-f3'),
        t('wws-im-f4'),
        t('wws-im-f5')
      ]
    },

    {
      id: 'government-regulatory',
      title: t('wws-gr-title'),
      description: t('wws-gr-desc'),
      image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        t('wws-gr-f1'),
        t('wws-gr-f2'),
        t('wws-gr-f3'),
        t('wws-gr-f4'),
        t('wws-gr-f5')
      ]
    },
    {
      id: 'mining-industry',
      title: t('wws-mi-title'),
      description: t('wws-mi-desc'),
      image: "https://images.pexels.com/photos/11347699/pexels-photo-11347699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        t('wws-mi-f1'),
        t('wws-mi-f2'),
        t('wws-mi-f3'),
        t('wws-mi-f4'),
        t('wws-mi-f5')
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white py-32 px-4">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/who-we-serve.jpg"
            alt="Industries Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0B1120]/80 backdrop-blur-[2px]"></div>
        </div>

        {/* Abstract Shapes */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-600/30 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight drop-shadow-lg">
            {t('wws-hero-title')}
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
            {t('wws-hero-subtitle')}
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Industry Image */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                      {industry.title}
                    </h3>
                  </div>
                </div>

                {/* Industry Content */}
                <div className="p-8">
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {industry.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-slate-700 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    <li className="text-slate-400 text-sm italic pl-8">
                      + {t('wws-more-solutions')}
                    </li>
                  </ul>

                  <Link
                    href={`/who-we-serve/${industry.id}`}
                    className="inline-flex items-center font-semibold text-blue-600 group-hover:text-blue-700 transition-colors"
                  >
                    {t('wws-btn-solutions')}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
