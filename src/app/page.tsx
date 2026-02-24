'use client'; // Needed for useTranslation hook
import React from 'react';
import Link from 'next/link';
import { Zap, Settings2, Leaf, ArrowRight, Activity, Trophy, CalendarClock, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0B1120] text-white py-24 lg:py-48 px-4">
        {/* Modern Abstract Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/20 rounded-full blur-[90px]"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-700/50 mb-8 backdrop-blur-sm">
            <span className="text-sm font-medium text-blue-200 tracking-wide uppercase">{t('home-hero-badge')}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
            {t('home-hero-title')} <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent drop-shadow-sm">
              {t('home-hero-title-highlight')}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            {t('home-hero-subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/services" className="group relative px-8 py-4 bg-blue-600 rounded-lg font-semibold text-lg text-white overflow-hidden transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25">
              <span className="relative z-10 flex items-center gap-2">
                {t('home-hero-cta-primary')} <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link href="/contact-us" className="group px-8 py-4 bg-white/5 border border-white/10 rounded-lg font-semibold text-lg text-white hover:bg-white/10 backdrop-blur-sm transition-all">
              {t('home-hero-cta-secondary')}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">{t('home-services-title')}</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t('home-services-subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t('home-service-1-title'),
                description: t('home-service-1-desc'),
                icon: <Zap className="w-8 h-8 text-blue-600" />,
                link: "/services/power-system-design",
                borderColor: "group-hover:border-blue-200",
                bgHover: "group-hover:bg-blue-50/50"
              },
              {
                title: t('home-service-2-title'),
                description: t('home-service-2-desc'),
                icon: <Settings2 className="w-8 h-8 text-cyan-600" />,
                link: "/services/grid-modernization",
                borderColor: "group-hover:border-cyan-200",
                bgHover: "group-hover:bg-cyan-50/50"
              },
              {
                title: t('home-service-3-title'),
                description: t('home-service-3-desc'),
                icon: <Leaf className="w-8 h-8 text-emerald-600" />,
                link: "/services/renewable-integration",
                borderColor: "group-hover:border-emerald-200",
                bgHover: "group-hover:bg-emerald-50/50"
              }
            ].map((service, index) => (
              <Link key={index} href={service.link} className="group h-full">
                <div className={`h-full p-8 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all duration-300 ${service.borderColor} ${service.bgHover} hover:shadow-xl hover:-translate-y-1`}>
                  <div className="mb-6 p-4 rounded-xl bg-slate-50 w-fit group-hover:bg-white border border-slate-100 shadow-sm transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">{service.description}</p>

                  <div className="flex items-center text-sm font-semibold text-slate-900 mt-auto">
                    {t('services-btn-learn-more')} <ArrowRight className="w-4 h-4 ml-2 text-blue-600 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 text-slate-600 font-medium hover:text-blue-700 transition-colors border-b-2 border-transparent hover:border-blue-600">
              {t('home-services-view-all')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section Placeholder (To be filled with real data) */}
      <section className="py-20 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: t('home-stats-projects'), value: "75+", icon: <Trophy className="w-6 h-6 text-yellow-400" /> },
              { label: t('home-stats-years'), value: "22+", icon: <CalendarClock className="w-6 h-6 text-blue-400" /> },
              { label: "Countries", value: "7+", icon: <Globe className="w-6 h-6 text-green-400" /> },
              { label: t('home-stats-global'), value: "5+", icon: <Globe className="w-6 h-6 text-cyan-400" /> },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="mb-4 p-3 bg-white/5 rounded-full">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0B1120] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">
            {t('home-cta-title')}
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('home-cta-subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact-us" className="px-10 py-4 bg-white text-blue-900 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/20 transform hover:-translate-y-1">
              {t('home-cta-primary')}
            </Link>
            <Link href="/services" className="px-10 py-4 border border-slate-600 text-white rounded-lg font-semibold text-lg hover:bg-white/5 transition-all">
              {t('home-cta-secondary')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
