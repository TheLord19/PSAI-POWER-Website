"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Mail, Phone, Award, User } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { CONTACT } from "@/lib/constants";

export default function TeamPage() {
  const { t } = useTranslation();
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B1120] text-white py-24 sm:py-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-[#0B1120]/95 to-[#0B1120]" />
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight">
            Leadership
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed font-light max-w-2xl mx-auto">
            Power system engineering led by decades of hands-on experience
            across utilities, industry, and renewable energy.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Leadership" }]} />

      {/* Founder Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-start">
            {/* Photo */}
            <div className="md:col-span-2">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-200 border border-slate-300 shadow-lg">
                {photoFailed ? (
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
                    priority
                    onError={() => setPhotoFailed(true)}
                  />
                )}
              </div>
            </div>

            {/* Details */}
            <div className="md:col-span-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 mb-4">
                <Award className="w-3.5 h-3.5" />
                Founder & CEO
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                [Founder Name]
              </h2>
              <p className="text-lg text-slate-500 mb-2">P.Eng. — [Province]</p>

              <hr className="my-6 border-slate-100" />

              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  [Founder bio — education, years of experience, areas of
                  expertise, key projects, industry involvement.]
                </p>
                <p>
                  [Details about professional engineering licenses, board
                  memberships, published work, or speaking engagements.]
                </p>
              </div>

              <hr className="my-6 border-slate-100" />

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${CONTACT.PHONE}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call {CONTACT.PHONE}
                </a>
                <a
                  href={`mailto:${CONTACT.EMAIL}`}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-700 rounded-xl font-semibold text-sm hover:bg-slate-50 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email {CONTACT.EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
