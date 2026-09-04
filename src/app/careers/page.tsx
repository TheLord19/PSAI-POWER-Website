"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { CheckCircle2, Mail, MapPin, Briefcase } from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { CONTACT } from "@/lib/constants";

interface Job {
  key: "eng" | "tech";
  respCount: number;
  qualCount: number;
  assetCount: number;
}

const JOBS: Job[] = [
  { key: "eng", respCount: 6, qualCount: 5, assetCount: 3 },
  { key: "tech", respCount: 6, qualCount: 5, assetCount: 4 },
];

function range(n: number): number[] {
  return Array.from({ length: n }, (_, i) => i + 1);
}

export default function CareersPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B1120] text-white py-20 sm:py-28 px-4">
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
            {t("careers-hero-title")}
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            {t("careers-hero-subtitle")}
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: t("careers") }]} />

      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Intro */}
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-12 max-w-3xl">
            {t("careers-intro")}
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 tracking-tight">
            {t("careers-openings-title")}
          </h2>

          {/* Postings */}
          <div className="space-y-8">
            {JOBS.map((job) => {
              const title = t(`careers-${job.key}-title`);
              const mailto = `mailto:${CONTACT.EMAIL}?subject=${encodeURIComponent(
                `Application — ${title}`,
              )}`;

              return (
                <article
                  key={job.key}
                  className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 sm:p-8"
                >
                  <header className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      {title}
                    </h3>
                    <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-500">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        {t("careers-location")}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-blue-600" />
                        {t(`careers-${job.key}-exp`)}
                      </span>
                    </div>
                  </header>

                  <p className="text-slate-600 leading-relaxed mb-8">
                    {t(`careers-${job.key}-summary`)}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-700 uppercase tracking-widest mb-4">
                        {t("careers-resp-title")}
                      </h4>
                      <ul className="space-y-2.5">
                        {range(job.respCount).map((i) => (
                          <li
                            key={i}
                            className="flex items-start text-sm text-slate-700"
                          >
                            <CheckCircle2 className="w-4 h-4 mr-2.5 flex-shrink-0 mt-0.5 text-blue-600" />
                            <span>{t(`careers-${job.key}-r${i}`)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-blue-700 uppercase tracking-widest mb-4">
                        {t("careers-qual-title")}
                      </h4>
                      <ul className="space-y-2.5">
                        {range(job.qualCount).map((i) => (
                          <li
                            key={i}
                            className="flex items-start text-sm text-slate-700"
                          >
                            <CheckCircle2 className="w-4 h-4 mr-2.5 flex-shrink-0 mt-0.5 text-blue-600" />
                            <span>{t(`careers-${job.key}-q${i}`)}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mt-6 mb-4">
                        {t("careers-assets-title")}
                      </h4>
                      <ul className="space-y-2.5">
                        {range(job.assetCount).map((i) => (
                          <li
                            key={i}
                            className="flex items-start text-sm text-slate-600"
                          >
                            <CheckCircle2 className="w-4 h-4 mr-2.5 flex-shrink-0 mt-0.5 text-slate-400" />
                            <span>{t(`careers-${job.key}-a${i}`)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <footer className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center gap-4">
                    <a
                      href={mailto}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      {t("careers-apply-cta")}
                    </a>
                    <p className="text-sm text-slate-500">
                      {t("careers-apply-note")}{" "}
                      <a
                        href={mailto}
                        className="text-blue-600 hover:underline font-medium"
                      >
                        {CONTACT.EMAIL}
                      </a>
                    </p>
                  </footer>
                </article>
              );
            })}
          </div>

          {/* Eligibility */}
          <div className="mt-10 bg-slate-100 border border-slate-200 rounded-lg p-5 text-sm text-slate-600 leading-relaxed">
            {t("careers-eligibility")}
          </div>
        </div>
      </section>
    </div>
  );
}
