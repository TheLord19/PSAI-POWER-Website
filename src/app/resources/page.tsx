// src/app/resources/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { FileText, BookOpen, Settings, Shield, Zap, CheckCircle, ArrowRight, Download } from 'lucide-react';

const ResourcesPage = () => {
  const { t } = useTranslation();

  const resources = [
    {
      id: 'technical-whitepapers',
      titleKey: 'resource-technical-whitepapers-title',
      descKey: 'resource-technical-whitepapers-content',
      image: "/images/resources/technical-whitepapers.jpg",
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      color: "blue"
    },
    {
      id: 'case-studies',
      titleKey: 'resource-case-studies-title',
      descKey: 'resource-case-studies-content',
      image: "/images/resources/case-studies.jpg",
      icon: <BookOpen className="w-8 h-8 text-cyan-600" />,
      color: "cyan"
    },
    {
      id: 'integration-guides',
      titleKey: 'resource-integration-guides-title',
      descKey: 'resource-integration-guides-content',
      image: "/images/resources/integration-guides.jpg",
      icon: <Settings className="w-8 h-8 text-emerald-600" />,
      color: "emerald"
    },
    {
      id: 'compliance-documents',
      titleKey: 'resource-compliance-documents-title',
      descKey: 'resource-compliance-documents-content',
      image: "/images/resources/compliance-documents.jpg",
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      color: "purple"
    },
    {
      id: 'technical-briefs',
      titleKey: 'resource-technical-briefs-title',
      descKey: 'resource-technical-briefs-content',
      image: "/images/resources/technical-briefs.jpg",
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      color: "orange"
    },
    {
      id: 'best-practices',
      titleKey: 'resource-best-practices-title',
      descKey: 'resource-best-practices-content',
      image: "/images/resources/best-practices.jpg",
      icon: <CheckCircle className="w-8 h-8 text-indigo-600" />,
      color: "indigo"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white py-32 px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/resources.jpg"
            alt="Resources Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0B1120]/80 backdrop-blur-[2px]"></div>
        </div>

        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            {t('resources-hero-title')}
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            {t('resources-hero-subtitle')}
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Resource Image */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={resource.image}
                    alt={t(resource.titleKey)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                      {t(resource.titleKey)}
                    </h3>
                  </div>
                </div>

                {/* Resource Content */}
                <div className="p-8" >
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {t(resource.descKey)}
                  </p>

                  <button className="flex items-center justify-between w-full px-4 py-3 bg-slate-50 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200 group-hover:border-slate-300">
                    <span className="font-medium text-sm flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      {t('resource-access-resources')}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-white rounded-2xl p-10 shadow-lg border border-slate-100 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('resource-access-resources')}</h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">{t('resource-access-content')}</p>
            <a href="/contact-us" className="inline-flex items-center px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
              {t('contact us')} <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
