// src/app/services/[id]/page.tsx
'use client';
import { useParams } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function ServiceDetailPage() {
  const params = useParams();
  const serviceId = params.id as string;
  const { t } = useTranslation();

  // Map URL ID to i18n key prefix
  const keyMap: { [key: string]: string } = {
    'power-system-design': 'psd',
    'grid-modernization': 'gmo',
    'renewable-integration': 'rei',
    'system-analysis': 'pas',
    'electrical-protection': 'esp',
    'energy-audits': 'aes'
  };

  const keyPrefix = keyMap[serviceId];

  if (!keyPrefix) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('service-not-found')}</h1>
          <Link href="/services" className="text-blue-600 hover:underline">
            ← {t('service-back-to-services')}
          </Link>
        </div>
      </div>
    );
  }

  // Get features - we can try to guess how many there are or just check 1-10
  const features = [];
  for (let i = 1; i <= 10; i++) {
    const featureKey = `service-${keyPrefix}-f${i}`;
    const translatedFeature = t(featureKey);
    if (translatedFeature !== featureKey) {
      features.push(translatedFeature);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/services" className="text-blue-200 hover:text-white mb-6 inline-block">
            ← {t('service-back-to-services')}
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t(`service-${keyPrefix}-title`)}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">{t(`service-${keyPrefix}-desc`)}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Main Content */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('service-overview-title')}</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {t(`service-${keyPrefix}-full`)}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-6">{t('service-key-features-title')}</h3>
            <div className="space-y-4">
              {features.map((feature: string, index: number) => (
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
            <h3 className="text-xl font-semibold text-gray-900 mb-6">{t('service-get-started-title')}</h3>
            <p className="text-gray-600 mb-6">
              {t('service-get-started-desc')}
            </p>
            <Link
              href="/contact-us"
              className="w-full bg-blue-600 text-white text-center font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors block"
            >
              {t('service-contact-experts')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}