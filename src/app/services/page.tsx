"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  Zap,
  Settings2,
  Leaf,
  BarChart3,
  ShieldCheck,
  Search,
} from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import ServiceCard from "@/components/cards/ServiceCard";

export default function ServicesPage() {
  const { t } = useTranslation();

  const services = [
    {
      id: "power-system-design",
      title: t("service-psd-title"),
      description: t("service-psd-desc"),
      image: "/images/services/power-system-design.jpg",
      icon: <Zap className="w-8 h-8" />,
      accent: "blue",
      features: [
        t("service-psd-f1"),
        t("service-psd-f2"),
        t("service-psd-f3"),
        t("service-psd-f4"),
        t("service-psd-f5"),
      ],
    },
    {
      id: "grid-modernization",
      title: t("service-gmo-title"),
      description: t("service-gmo-desc"),
      image: "/images/services/grid-modernization.jpg",
      icon: <Settings2 className="w-8 h-8" />,
      accent: "cyan",
      features: [
        t("service-gmo-f1"),
        t("service-gmo-f2"),
        t("service-gmo-f3"),
        t("service-gmo-f4"),
        t("service-gmo-f5"),
      ],
    },
    {
      id: "renewable-integration",
      title: t("service-rei-title"),
      description: t("service-rei-desc"),
      image: "/images/services/renewable-integration.jpg",
      icon: <Leaf className="w-8 h-8" />,
      accent: "emerald",
      features: [
        t("service-rei-f1"),
        t("service-rei-f2"),
        t("service-rei-f3"),
        t("service-rei-f4"),
        t("service-rei-f5"),
      ],
    },
    {
      id: "system-analysis",
      title: t("service-pas-title"),
      description: t("service-pas-desc"),
      image: "/images/services/system-analysis.jpg",
      icon: <BarChart3 className="w-8 h-8" />,
      accent: "violet",
      features: [
        t("service-pas-f1"),
        t("service-pas-f2"),
        t("service-pas-f3"),
        t("service-pas-f4"),
        t("service-pas-f5"),
      ],
    },
    {
      id: "electrical-protection",
      title: t("service-esp-title"),
      description: t("service-esp-desc"),
      image: "/images/services/electrical-protection.jpg",
      icon: <ShieldCheck className="w-8 h-8" />,
      accent: "amber",
      features: [
        t("service-esp-f1"),
        t("service-esp-f2"),
        t("service-esp-f3"),
        t("service-esp-f4"),
        t("service-esp-f5"),
      ],
    },
    {
      id: "energy-audits",
      title: t("service-aes-title"),
      description: t("service-aes-desc"),
      image: "/images/services/energy-audits.jpg",
      icon: <Search className="w-8 h-8" />,
      accent: "rose",
      features: [
        t("service-aes-f1"),
        t("service-aes-f2"),
        t("service-aes-f3"),
        t("service-aes-f4"),
        t("service-aes-f5"),
      ],
    },
  ];

  const accentMap: Record<
    string,
    {
      check: string;
      badge: string;
      border: string;
      glow: string;
      hoverBorder: string;
    }
  > = {
    blue: {
      check: "text-blue-600",
      badge: "bg-blue-50 text-blue-700",
      border: "border-blue-100",
      glow: "bg-blue-50",
      hoverBorder: "hover:border-blue-200",
    },
    cyan: {
      check: "text-cyan-600",
      badge: "bg-cyan-50 text-cyan-700",
      border: "border-cyan-100",
      glow: "bg-cyan-50",
      hoverBorder: "hover:border-cyan-200",
    },
    emerald: {
      check: "text-emerald-600",
      badge: "bg-emerald-50 text-emerald-700",
      border: "border-emerald-100",
      glow: "bg-emerald-50",
      hoverBorder: "hover:border-emerald-200",
    },
    violet: {
      check: "text-violet-600",
      badge: "bg-violet-50 text-violet-700",
      border: "border-violet-100",
      glow: "bg-violet-50",
      hoverBorder: "hover:border-violet-200",
    },
    amber: {
      check: "text-amber-600",
      badge: "bg-amber-50 text-amber-700",
      border: "border-amber-100",
      glow: "bg-amber-50",
      hoverBorder: "hover:border-amber-200",
    },
    rose: {
      check: "text-rose-600",
      badge: "bg-rose-50 text-rose-700",
      border: "border-rose-100",
      glow: "bg-rose-50",
      hoverBorder: "hover:border-rose-200",
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden text-white py-24 sm:py-32 px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/services.jpg"
            alt="Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0B1120]/85 backdrop-blur-[1px]" />
        </div>

        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
            {t("services-hero-title")}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-light">
            {t("services-hero-subtitle")}
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: t("services") }]} />

      {/* Service rows — alternating layout, distinct colors */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="space-y-6 sm:space-y-8">
            {services.map((svc, i) => {
              const colors = accentMap[svc.accent];
              const isReversed = i % 2 === 1;

              return (
                <ServiceCard
                  key={svc.id}
                  service={svc}
                  colors={colors}
                  isReversed={isReversed}
                  index={i}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
