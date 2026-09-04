"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function CTA() {
  const { t } = useTranslation();

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-[#060B14] overflow-hidden">
      {/* Grid pattern */}
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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-20 items-center">
          {/* Left — contact info */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
              Start a conversation
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mb-6 sm:mb-8 leading-relaxed">
              Reach out directly to discuss your project requirements. No forms,
              no sales pitch — just an engineer who understands power systems.
            </p>

            <div className="space-y-4">
              <a
                href={`tel:${CONTACT.PHONE}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">
                    Phone
                  </div>
                  <div className="font-medium group-hover:text-blue-300 transition-colors">
                    {CONTACT.PHONE}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT.EMAIL}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">
                    Email
                  </div>
                  <div className="font-medium group-hover:text-blue-300 transition-colors">
                    {CONTACT.EMAIL}
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right — CTA button */}
          <div className="flex flex-col items-start md:items-end text-center md:text-right">
            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold text-base text-white transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40"
            >
              {t("home-cta-primary")}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="text-xs sm:text-sm text-slate-500 mt-3 sm:mt-4 md:text-right text-center">
              Or browse our{" "}
              <Link
                href="/services"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
              >
                engineering services
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
