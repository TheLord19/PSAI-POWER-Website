"use client";

import React from "react";
import Link from "next/link";
import {
  Zap,
  Settings2,
  Leaf,
  ArrowRight,
  BarChart3,
  ShieldCheck,
  Search,
  Globe,
  CalendarClock,
  ChevronRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { motion } from "framer-motion";
import ProjectPortfolio from "@/components/sections/ProjectPortfolio";
import GridTopology from "@/components/effects/GridTopology";
import GridFlow from "@/components/effects/GridFlow";

/* ------------------------------------------------------------------ */
/*  Home Page                                                         */
/* ------------------------------------------------------------------ */
export default function Home() {
  const { t } = useTranslation();

  const services = [
    {
      title: t("home-service-1-title"),
      desc: t("home-service-1-desc"),
      href: "/services/power-system-design",
      img: "/images/services/power-system-design.jpg",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      title: t("home-service-2-title"),
      desc: t("home-service-2-desc"),
      href: "/services/grid-modernization",
      img: "/images/services/grid-modernization.jpg",
      icon: <Settings2 className="w-5 h-5" />,
    },
    {
      title: t("home-service-3-title"),
      desc: t("home-service-3-desc"),
      href: "/services/renewable-integration",
      img: "/images/services/renewable-integration.jpg",
      icon: <Leaf className="w-5 h-5" />,
    },
    {
      title: t("home-service-4-title"),
      desc: t("home-service-4-desc"),
      href: "/services/system-analysis",
      img: "/images/services/system-analysis.jpg",
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      title: t("home-service-5-title"),
      desc: t("home-service-5-desc"),
      href: "/services/electrical-protection",
      img: "/images/services/electrical-protection.jpg",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
      title: t("home-service-6-title"),
      desc: t("home-service-6-desc"),
      href: "/services/energy-audits",
      img: "/images/services/energy-audits.jpg",
      icon: <Search className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* ============================================================ */}
      {/*  HERO — Animated grid topology, no stock photo               */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-[#060B14] text-white min-h-[85vh] sm:min-h-[90vh] flex items-center">
        {/* Animated power grid background */}
        <div className="absolute inset-0 z-0 opacity-70">
          <GridTopology />
          <GridFlow />
        </div>

        {/* Subtle gradient overlays */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#060B14]/60 via-transparent to-[#060B14]/90" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-600/6 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-24 lg:py-32">
          <div className="max-w-3xl">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6 sm:mb-8"
            >
              {t("home-hero-title")}{" "}
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                {t("home-hero-title-highlight")}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-slate-400 mb-8 sm:mb-12 max-w-xl leading-relaxed font-light"
            >
              {t("home-hero-subtitle")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold text-base text-white transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40"
              >
                {t("home-hero-cta-primary")}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold text-base text-white/90 hover:text-white transition-all"
              >
                {t("home-hero-cta-secondary")}
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-white/40 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/*  CHALLENGE / SOLUTION                                         */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
            {/* Left — The Challenge */}
            <div>
              <span className="block text-sm font-semibold text-amber-600 uppercase tracking-widest mb-4">
                The Challenge
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight tracking-tight">
                {t("home-challenge-title")}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t("home-challenge-desc")}
              </p>
            </div>

            {/* Right — Key Numbers */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  value: "75+",
                  label: t("home-stats-projects"),
                  accent: "text-blue-600",
                },
                {
                  value: "22+",
                  label: t("home-stats-years"),
                  accent: "text-cyan-600",
                },
                {
                  value: "150MW",
                  label: "Max DER Integration",
                  accent: "text-emerald-600",
                },
                {
                  value: "2+",
                  label: t("home-stats-countries"),
                  accent: "text-violet-600",
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-slate-50 rounded-lg p-6 border border-slate-100"
                >
                  <div className={`text-3xl font-bold ${stat.accent} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CAPABILITIES — Bento grid with real images                  */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 lg:py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight">
              {t("home-services-title")}
            </h2>
            <p className="text-base sm:text-lg text-slate-500 max-w-xl">
              {t("home-services-subtitle")}
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {services.map((svc, i) => {
              // First card spans 2 cols on lg
              const isLarge = i === 0;
              return (
                <motion.div
                  key={svc.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={isLarge ? "lg:col-span-2 lg:row-span-2" : ""}
                >
                  <Link href={svc.href} className="group block h-full">
                    <div
                      className={`relative h-full overflow-hidden rounded-lg bg-slate-900 border border-slate-800 transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-900/10 ${
                        isLarge
                          ? "min-h-[260px] sm:min-h-[320px]"
                          : "min-h-[180px] sm:min-h-[220px]"
                      }`}
                    >
                      {/* Background image */}
                      <Image
                        src={svc.img}
                        alt={svc.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes={
                          isLarge
                            ? "(max-width: 1024px) 100vw, 66vw"
                            : "(max-width: 768px) 100vw, 33vw"
                        }
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/30" />

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 rounded-lg bg-blue-600/30 backdrop-blur-sm text-blue-200">
                            {svc.icon}
                          </div>
                          <h3 className="text-xl font-bold text-white">
                            {svc.title}
                          </h3>
                        </div>
                        {isLarge && (
                          <p className="text-sm text-slate-300 leading-relaxed mb-4 max-w-md">
                            {svc.desc}
                          </p>
                        )}
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 group-hover:text-blue-200 transition-colors">
                          {t("services-btn-learn-more")}
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 text-slate-500 hover:text-blue-700 font-medium transition-colors border-b-2 border-transparent hover:border-blue-600"
            >
              {t("home-services-view-all")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TRUST BADGE — Licensing & Credentials                       */}
      {/* ============================================================ */}
      <section className="py-14 sm:py-20 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 text-center lg:text-left">
            {/* Badge */}
            <div className="flex-shrink-0">
              <div className="relative w-32 h-32 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center overflow-hidden shadow-sm">
                <Image
                  src="/images/logos/egbc.png"
                  alt="Engineers and Geoscientists BC"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="block text-sm font-semibold text-blue-700 uppercase tracking-widest mb-3">
                Licensed &amp; Certified
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                Professional Engineering You Can Trust
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                Registered with Engineers and Geoscientists British Columbia.
                Every project is led by licensed professional engineers with
                decades of experience across utilities, industrial, and
                renewable energy sectors.
              </p>
              <Link
                href="/licenses"
                className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                View all credentials <ChevronRight className="w-4 h-4" />
              </Link>

              {/* Badge strip */}
              <div className="flex flex-wrap items-center gap-3 mt-6">
                {[
                  {
                    label: "PEO",
                    sub: "Ontario",
                    bg: "bg-blue-700",
                    text: "text-blue-100",
                  },
                  {
                    label: "EGBC",
                    sub: "BC",
                    bg: "bg-white border border-slate-200",
                    text: "text-slate-700",
                    img: true,
                  },
                  {
                    label: "WSIB",
                    sub: "Safety",
                    bg: "bg-orange-600",
                    text: "text-orange-100",
                  },
                  {
                    label: "EGM",
                    sub: "Manitoba",
                    bg: "bg-indigo-700",
                    text: "text-indigo-200",
                  },
                  {
                    label: "IEEE",
                    sub: "Member",
                    bg: "bg-[#00629B]",
                    text: "text-blue-200",
                  },
                ].map((b) => (
                  <div
                    key={b.label}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg ${b.bg} shadow-sm`}
                  >
                    {b.img ? (
                      <Image
                        src="/images/logos/egbc.png"
                        alt="EGBC"
                        width={20}
                        height={20}
                        className="h-5 w-auto"
                      />
                    ) : (
                      <span
                        className={`text-xs font-black tracking-tight ${b.text}`}
                      >
                        {b.label}
                      </span>
                    )}
                    <span
                      className={`text-[10px] font-medium ${b.text} opacity-70 hidden sm:inline`}
                    >
                      {b.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PROJECT PORTFOLIO                                           */}
      {/* ============================================================ */}
      <ProjectPortfolio />

      {/* ============================================================ */}
      {/*  CTA                                                         */}
      {/* ============================================================ */}
      <section className="relative py-20 sm:py-28 lg:py-36 bg-[#060B14] overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
            {t("home-cta-title")}
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
            {t("home-cta-subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/contact-us"
              className="px-10 py-4 bg-white text-slate-900 rounded-xl font-bold text-base hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/10 hover:shadow-blue-900/20 transform hover:-translate-y-0.5"
            >
              {t("home-cta-primary")}
            </Link>
            <Link
              href="/services"
              className="px-10 py-4 border border-slate-700 text-white rounded-xl font-semibold text-base hover:bg-white/5 hover:border-slate-500 transition-all"
            >
              {t("home-cta-secondary")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
