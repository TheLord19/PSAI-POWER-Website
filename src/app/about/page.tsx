// src/app/about/page.tsx
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Target, Eye, Zap, Globe, CheckCircle, ShieldCheck, Award } from 'lucide-react';
import Image from 'next/image';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white py-32 px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/about.jpg"
            alt="About Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0B1120]/80 backdrop-blur-[2px]"></div>
        </div>

        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            {t('about-hero-title')}
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            {t('about-hero-subtitle')}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4">

          {/* Introduction Quote */}
          <div className="text-center mb-24 max-w-4xl mx-auto">

            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              {t('about-intro-title') || "Empowering the Future of Energy"}
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
              &quot;{t('about-intro')}&quot;
            </p>
          </div>

          {/* Mission & Vision - Alternating Layout */}
          <div className="space-y-24 mb-32">
            {/* Mission */}
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-3 opacity-10"></div>
                <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Our Mission" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 text-white">
                    <Target className="w-12 h-12 mb-4 text-blue-400" />
                    <div className="text-sm font-bold tracking-wider uppercase opacity-80">Our Purpose</div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-4xl font-bold text-slate-900 mb-6">{t('about-card-mission-title')}</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {t('about-card-mission-desc')}
                </p>
                <ul className="space-y-4">
                  {['Sustainable Solutions', 'Grid Reliability', 'Innovation First'].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700 font-medium">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Vision */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-cyan-600 rounded-3xl -rotate-3 opacity-10"></div>
                <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Our Vision" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 text-white">
                    <Eye className="w-12 h-12 mb-4 text-cyan-400" />
                    <div className="text-sm font-bold tracking-wider uppercase opacity-80">Our Future</div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-4xl font-bold text-slate-900 mb-6">{t('about-card-vision-title')}</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {t('about-card-vision-desc')}
                </p>
              </div>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h3>
              <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Integrity", icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />, desc: "We uphold the highest standards of honesty and ethical conduct." },
                { title: "Excellence", icon: <Award className="w-8 h-8 text-yellow-500" />, desc: "We strive for superior quality in every project we undertake." },
                { title: "Innovation", icon: <Zap className="w-8 h-8 text-purple-500" />, desc: "We embrace new technologies to solve complex energy challenges." }
              ].map((val, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="mb-6 p-4 bg-slate-50 rounded-xl w-fit">{val.icon}</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h4>
                  <p className="text-slate-600">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Global Reach Section - Redesigned */}
          <div className="relative rounded-3xl overflow-hidden bg-[#0B1120] text-white">
            {/* Background Map Effect */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-[length:200%] bg-center"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12 p-12 md:p-20 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-900/50 rounded-full border border-blue-700/50">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-semibold text-blue-100">{t('home-stats-global')}</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{t('about-reach-title')}</h3>
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  {t('about-reach-desc')}
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-1">5+</div>
                    <div className="text-sm text-slate-400 uppercase tracking-wider">Continents</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-400 mb-1">7+</div>
                    <div className="text-sm text-slate-400 uppercase tracking-wider">Countries</div>
                  </div>
                </div>
              </div>

              {/* World Coverage Map */}
              <div className="relative h-[400px] flex items-center justify-center">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#071225] border border-blue-900/40 shadow-2xl">
                  {/* World map background */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/1280px-World_map_blank_without_borders.svg.png')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'invert(1) brightness(0.8)'
                    }}
                  />
                  {/* Glowing base */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-900/20" />

                  {/* Location markers */}
                  {[
                    { name: 'UK', left: '44%', top: '27%', color: 'bg-sky-400', ring: 'bg-sky-400' },
                    { name: 'Europe', left: '51%', top: '33%', color: 'bg-violet-400', ring: 'bg-violet-400' },
                    { name: 'Caribbean', left: '24%', top: '48%', color: 'bg-emerald-400', ring: 'bg-emerald-400' },
                    { name: 'Africa', left: '52%', top: '59%', color: 'bg-amber-400', ring: 'bg-amber-400' },
                    { name: 'South America', left: '27%', top: '67%', color: 'bg-green-400', ring: 'bg-green-400' },
                    { name: 'India', left: '69%', top: '49%', color: 'bg-orange-400', ring: 'bg-orange-400' },
                  ].map((loc) => (
                    <div
                      key={loc.name}
                      className="absolute flex flex-col items-center"
                      style={{ left: loc.left, top: loc.top, transform: 'translate(-50%, -50%)' }}
                    >
                      <div className="relative w-3 h-3">
                        <div className={`absolute inset-0 ${loc.ring} rounded-full opacity-70 animate-ping`} />
                        <div className={`relative w-3 h-3 ${loc.color} rounded-full shadow-lg`} />
                      </div>
                      <div className="mt-1.5 px-2 py-0.5 bg-black/70 backdrop-blur-sm text-white text-[10px] font-semibold rounded-full shadow-lg whitespace-nowrap border border-white/20">
                        {loc.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutPage;