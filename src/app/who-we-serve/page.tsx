// src/app/who-we-serve/page.tsx
"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import IndustryCard from "@/components/cards/IndustryCard";

export default function WhoWeServePage() {
  const { t } = useTranslation();

  const industries = [
    {
      id: "utilities-grid-operators",
      title: t("wws-ugo-title"),
      description: t("wws-ugo-desc"),
      image: "/images/industries/utilities-grid-operators.jpg",
      features: [
        t("wws-ugo-f1"),
        t("wws-ugo-f2"),
        t("wws-ugo-f3"),
        t("wws-ugo-f4"),
        t("wws-ugo-f5"),
      ],
    },
    {
      id: "renewable-energy",
      title: t("wws-re-title"),
      description: t("wws-re-desc"),
      image: "/images/industries/renewable-energy.jpg",
      features: [
        t("wws-re-f1"),
        t("wws-re-f2"),
        t("wws-re-f3"),
        t("wws-re-f4"),
        t("wws-re-f5"),
      ],
    },
    {
      id: "industrial-manufacturing",
      title: t("wws-im-title"),
      description: t("wws-im-desc"),
      image: "/images/industries/industrial-manufacturing.jpg",
      features: [
        t("wws-im-f1"),
        t("wws-im-f2"),
        t("wws-im-f3"),
        t("wws-im-f4"),
        t("wws-im-f5"),
      ],
    },

    {
      id: "government-regulatory",
      title: t("wws-gr-title"),
      description: t("wws-gr-desc"),
      image: "/images/industries/government-regulatory.jpg",
      features: [
        t("wws-gr-f1"),
        t("wws-gr-f2"),
        t("wws-gr-f3"),
        t("wws-gr-f4"),
        t("wws-gr-f5"),
      ],
    },
    {
      id: "mining-industry",
      title: t("wws-mi-title"),
      description: t("wws-mi-desc"),
      image: "/images/industries/mining-industry.jpg",
      features: [
        t("wws-mi-f1"),
        t("wws-mi-f2"),
        t("wws-mi-f3"),
        t("wws-mi-f4"),
        t("wws-mi-f5"),
      ],
    },
    {
      id: "oil-gas",
      title: t("wws-og-title"),
      description: t("wws-og-desc"),
      image: "/images/industries/oil-gas.jpg",
      features: [
        t("wws-og-f1"),
        t("wws-og-f2"),
        t("wws-og-f3"),
        t("wws-og-f4"),
        t("wws-og-f5"),
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white py-24 sm:py-32 px-4">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/who-we-serve.jpg"
            alt="Industries Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0B1120]/85 backdrop-blur-[1px]"></div>
        </div>

        {/* Abstract Shapes */}
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/30 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
            {t("wws-hero-title")}
          </h1>
          <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-light">
            {t("wws-hero-subtitle")}
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: t("who we serve") }]} />

      {/* Industries Grid */}
      <section className="py-16 sm:py-24 bg-slate-50 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {industries.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
