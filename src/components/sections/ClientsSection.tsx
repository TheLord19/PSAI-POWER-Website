"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import {
  Building2,
  Factory,
  Flame,
  Landmark,
  Pickaxe,
  Sun,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ClientsSection() {
  const { t } = useTranslation();

  const industries = [
    {
      title: t("utilities-grid-operators"),
      desc: "Grid reliability studies, smart grid transition planning, and substation design for major utilities.",
      href: "/who-we-serve/utilities-grid-operators",
      icon: <Building2 className="w-7 h-7" />,
      accent: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      title: t("renewable-energy"),
      desc: "Seamless integration of solar, wind, hydro, and battery storage into existing grid infrastructure.",
      href: "/who-we-serve/renewable-energy",
      icon: <Sun className="w-7 h-7" />,
      accent: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      title: t("industrial-manufacturing"),
      desc: "Power system design and optimization for factories and production facilities.",
      href: "/who-we-serve/industrial-manufacturing",
      icon: <Factory className="w-7 h-7" />,
      accent: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
      title: t("oil-gas"),
      desc: "Reliable power solutions for offshore platforms, refineries, and pipeline operations.",
      href: "/who-we-serve/oil-gas",
      icon: <Flame className="w-7 h-7" />,
      accent: "bg-orange-50 text-orange-600 border-orange-100",
    },
    {
      title: t("government-regulatory"),
      desc: "Compliance consulting and regulatory support for government energy agencies.",
      href: "/who-we-serve/government-regulatory",
      icon: <Landmark className="w-7 h-7" />,
      accent: "bg-indigo-50 text-indigo-600 border-indigo-100",
    },
    {
      title: t("mining-industry"),
      desc: "Remote power supply, heavy equipment power, and grid-connected solutions for mining operations.",
      href: "/who-we-serve/mining-industry",
      icon: <Pickaxe className="w-7 h-7" />,
      accent: "bg-slate-100 text-slate-600 border-slate-200",
    },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-blue-700 bg-blue-50 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            {t("who we serve")}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight">
            Trusted Across Industries
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto">
            From grid operators to mining operations, our engineering expertise
            powers critical infrastructure across North America.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                href={industry.href}
                className="group block h-full p-6 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 border ${industry.accent} transition-colors group-hover:scale-110 duration-300`}
                >
                  {industry.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {industry.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  {industry.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/who-we-serve"
            className="inline-flex items-center gap-2 px-6 py-3 text-slate-500 hover:text-blue-700 font-medium transition-colors border-b-2 border-transparent hover:border-blue-600"
          >
            View all industries
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
