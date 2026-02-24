// src/app/services/page.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Zap, Settings2, Leaf, Activity, ShieldCheck, BarChart3, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServicesPage() {
  const { t } = useTranslation();

  const services = [
    {
      id: 'power-system-design',
      title: t('service-psd-title'),
      description: t('service-psd-desc'),
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        t('service-psd-f1'),
        t('service-psd-f2'),
        t('service-psd-f3'),
        t('service-psd-f4'),
        t('service-psd-f5')
      ]
    },
    {
      id: 'grid-modernization',
      title: t('service-gmo-title'),
      description: t('service-gmo-desc'),
      image: "https://images.pexels.com/photos/2678468/pexels-photo-2678468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        t('service-gmo-f1'),
        t('service-gmo-f2'),
        t('service-gmo-f3'),
        t('service-gmo-f4'),
        t('service-gmo-f5')
      ]
    },
    {
      id: 'renewable-integration',
      title: t('service-rei-title'),
      description: t('service-rei-desc'),
      image: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        t('service-rei-f1'),
        t('service-rei-f2'),
        t('service-rei-f3'),
        t('service-rei-f4'),
        t('service-rei-f5')
      ]
    },
    {
      id: 'system-analysis',
      title: t('service-pas-title'),
      description: t('service-pas-desc'),
      image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        t('service-pas-f1'),
        t('service-pas-f2'),
        t('service-pas-f3'),
        t('service-pas-f4'),
        t('service-pas-f5')
      ]
    },
    {
      id: 'electrical-protection',
      title: t('service-esp-title'),
      description: t('service-esp-desc'),
      image: "https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        t('service-esp-f1'),
        t('service-esp-f2'),
        t('service-esp-f3'),
        t('service-esp-f4'),
        t('service-esp-f5')
      ]
    },
    {
      id: 'energy-audits',
      title: t('service-aes-title'),
      description: t('service-aes-desc'),
      image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        t('service-aes-f1'),
        t('service-aes-f2'),
        t('service-aes-f3'),
        t('service-aes-f4'),
        t('service-aes-f5')
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white py-32 px-4">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/services.jpg"
            alt="Services Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0B1120]/80 backdrop-blur-[2px]"></div>
        </div>

        {/* Abstract Shapes (Optional: kept subtle or removed to focus on image) */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight drop-shadow-lg">
            {t('services-hero-title')}
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
            {t('services-hero-subtitle')}
          </p>
        </div>
      </section>


      {/* Services Grid */}
      <section className="py-24 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Service Image */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-8">
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start text-slate-700 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    <li className="text-slate-400 text-sm italic pl-8">
                      + more features
                    </li>
                  </ul>

                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center font-semibold text-blue-600 group-hover:text-blue-700 transition-colors"
                  >
                    Learn More
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
};