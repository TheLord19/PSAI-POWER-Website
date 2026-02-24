// src/app/who-we-serve/[id]/page.tsx
'use client';
import { useParams } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function IndustryDetailPage() {
  const params = useParams();
  const industryId = params.id as string;
  const { t } = useTranslation();

  // Map URL ID to i18n key prefix
  const keyMap: { [key: string]: string } = {
    'utilities-grid-operators': 'ugo',
    'renewable-energy': 're',
    'industrial-manufacturing': 'im',
    'oil-gas': 'og',
    'government-regulatory': 'gr',
    'mining-industry': 'mi'
  };

  const keyPrefix = keyMap[industryId];

  if (!keyPrefix) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('wws-industry-not-found')}</h1>
          <Link href="/who-we-serve" className="text-green-600 hover:underline">
            ← {t('wws-back-to-industries')}
          </Link>
        </div>
      </div>
    );
  }

  // Get solutions
  const solutions = [];
  for (let i = 1; i <= 15; i++) {
    const solutionKey = `wws-${keyPrefix}-s${i}`;
    const translatedSolution = t(solutionKey);
    if (translatedSolution !== solutionKey) {
      solutions.push(translatedSolution);
    }
  }

  // Get projects
  const projects = [];
  for (let i = 1; i <= 10; i++) {
    const projectKey = `wws-${keyPrefix}-p${i}`;
    const translatedProject = t(projectKey);
    if (translatedProject !== projectKey) {
      projects.push(translatedProject);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-900 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/who-we-serve" className="text-green-200 hover:text-white mb-6 inline-block">
            ← {t('wws-back-to-industries')}
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t(`wws-${keyPrefix}-title`)}</h1>
          <p className="text-xl text-green-100 max-w-3xl">{t(`wws-${keyPrefix}-desc`)}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Main Content */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('wws-overview-title')}</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {t(`wws-${keyPrefix}-full`)}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-6">{t('wws-solutions-title')}</h3>
            <div className="space-y-4 mb-8">
              {solutions.map((solution: string, index: number) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 mr-4">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{solution}</span>
                </div>
              ))}
            </div>

            {projects.length > 0 && (
              <>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{t('wws-projects-title')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projects.map((project: string, index: number) => (
                    <div key={index} className="bg-green-50 rounded-lg p-4">
                      <p className="text-green-800 font-medium">{project}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Sidebar/CTA */}
          <div className="bg-white rounded-xl shadow-md p-8 h-fit">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">{t('wws-get-started-title')}</h3>
            <p className="text-gray-600 mb-6">
              {t('wws-get-started-desc')}
            </p>
            <Link
              href="/contact-us"
              className="w-full bg-green-600 text-white text-center font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors block"
            >
              {t('wws-contact-experts')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}