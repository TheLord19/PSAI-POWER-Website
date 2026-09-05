// src/app/about/page.tsx
"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import {
  Target,
  Eye,
  Zap,
  Globe,
  CheckCircle,
  ShieldCheck,
  Award,
  User,
} from "lucide-react";
import Image from "next/image";
import Breadcrumbs from "@/components/common/Breadcrumbs";

const AboutPage = () => {
  const { t } = useTranslation();
  const [founderPhotoFailed, setFounderPhotoFailed] = React.useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white py-24 sm:py-32 px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/about.jpg"
            alt="About Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0B1120]/85 backdrop-blur-[1px]"></div>
        </div>

        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
            {t("about-hero-title")}
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            {t("about-hero-subtitle")}
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: t("about") }]} />

      {/* Content Section */}
      <section className="py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Introduction Quote */}
          <div className="text-center mb-16 sm:mb-24 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 mb-6 sm:mb-8 leading-tight">
              {t("about-intro-title") || "Empowering the Future of Energy"}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
              &quot;{t("about-intro")}&quot;
            </p>
          </div>

          {/* Mission & Vision - Alternating Layout */}
          <div className="space-y-16 sm:space-y-24 mb-24 sm:mb-32">
            {/* Mission */}
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-16">
              <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-3 opacity-10"></div>
                <div className="relative h-[240px] sm:h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/services/power-system-design.jpg"
                    alt="Our Mission"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 text-white">
                    <Target className="w-12 h-12 mb-4 text-blue-400" />
                    <div className="text-sm font-bold tracking-wider uppercase opacity-80">
                      Our Purpose
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
                  {t("about-card-mission-title")}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {t("about-card-mission-desc")}
                </p>
                <ul className="space-y-4">
                  {[
                    t("about-mission-point-1"),
                    t("about-mission-point-2"),
                    t("about-mission-point-3"),
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center text-slate-700 font-medium"
                    >
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
                <div className="relative h-[240px] sm:h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/services/grid-modernization.jpg"
                    alt="Our Vision"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 text-white">
                    <Eye className="w-12 h-12 mb-4 text-cyan-400" />
                    <div className="text-sm font-bold tracking-wider uppercase opacity-80">
                      Our Future
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
                  {t("about-card-vision-title")}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {t("about-card-vision-desc")}
                </p>
              </div>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="mb-20 sm:mb-32">
            <div className="text-center mb-10 sm:mb-16">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                {t("about-core-values-title")}
              </h3>
              <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
              {[
                {
                  title: t("about-value-integrity-title"),
                  icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
                  desc: t("about-value-integrity-desc"),
                },
                {
                  title: t("about-value-excellence-title"),
                  icon: <Award className="w-8 h-8 text-yellow-500" />,
                  desc: t("about-value-excellence-desc"),
                },
                {
                  title: t("about-value-innovation-title"),
                  icon: <Zap className="w-8 h-8 text-purple-500" />,
                  desc: t("about-value-innovation-desc"),
                },
              ].map((val, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="mb-6 p-4 bg-slate-50 rounded-xl w-fit">
                    {val.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    {val.title}
                  </h4>
                  <p className="text-slate-600">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Founder Section */}
          <div className="mb-20 sm:mb-32">
            <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-10 md:gap-16 items-center bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-slate-100 p-6 sm:p-12">
              <div className="md:col-span-2">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-200 border border-slate-300 shadow-lg">
                  {founderPhotoFailed ? (
                    <div className="flex h-full w-full items-center justify-center bg-slate-100">
                      <User className="h-16 w-16 text-slate-300" />
                    </div>
                  ) : (
                    <Image
                      src="/images/team/founder.jpg"
                      alt="Founder"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                      onError={() => setFounderPhotoFailed(true)}
                    />
                  )}
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 mb-4">
                  <Award className="w-3.5 h-3.5" />
                  Founder & CEO
                </div>
                {/*
                  Founder name and bio pending final copy from the client.
                  Do not publish placeholder text on the live site — fill this
                  in with the real name/bio once confirmed, then move it out
                  of this comment into the JSX below.

                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                    Founder Name
                  </h2>
                  <p className="text-lg text-slate-500 mb-6">P.Eng. — Province</p>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Bio — education, years of experience, areas of expertise,
                    key projects, industry involvement.
                  </p>
                */}
                <p className="text-slate-600 leading-relaxed">
                  PSAI Power is led by a licensed Professional Engineer with
                  hands-on experience across utilities, industry, and
                  renewable energy.
                </p>
              </div>
            </div>
          </div>

          {/* Global Reach Section - Redesigned */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0B1120] text-white">
            <div className="relative z-10 grid md:grid-cols-2 gap-8 sm:gap-12 p-6 sm:p-12 md:p-20 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-900/50 rounded-full border border-blue-700/50">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-semibold text-blue-100">
                    {t("home-stats-global")}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                  {t("about-reach-title")}
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  {t("about-reach-desc")}
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-1">
                      1
                    </div>
                    <div className="text-sm text-slate-400 uppercase tracking-wider">
                      Continent
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-400 mb-1">
                      2+
                    </div>
                    <div className="text-sm text-slate-400 uppercase tracking-wider">
                      Countries
                    </div>
                  </div>
                </div>
              </div>

              {/* Regions Served */}
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    region: "North America",
                    countries: "Canada, USA",
                    icon: <Globe className="w-4 h-4" />,
                  },
                ].map((r) => (
                  <div
                    key={r.region}
                    className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-blue-400">{r.icon}</div>
                      <div className="text-sm font-semibold text-white">
                        {r.region}
                      </div>
                    </div>
                    <div className="text-xs text-slate-400">{r.countries}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
