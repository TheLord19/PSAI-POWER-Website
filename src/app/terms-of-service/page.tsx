"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { CONTACT } from "@/lib/constants";

export default function TermsOfServicePage() {
  const { t } = useTranslation();

  const sections: { title: string; body: React.ReactNode }[] = [
    { title: t("tos-info-title"), body: <p>{t("tos-info-body")}</p> },
    { title: t("tos-ip-title"), body: <p>{t("tos-ip-body")}</p> },
    { title: t("tos-warranty-title"), body: <p>{t("tos-warranty-body")}</p> },
    { title: t("tos-liability-title"), body: <p>{t("tos-liability-body")}</p> },
    { title: t("tos-links-title"), body: <p>{t("tos-links-body")}</p> },
    { title: t("tos-law-title"), body: <p>{t("tos-law-body")}</p> },
    {
      title: t("tos-contact-title"),
      body: (
        <p>
          {t("legal-contact-pre")}{" "}
          <a
            href={`mailto:${CONTACT.EMAIL}`}
            className="text-blue-600 hover:underline"
          >
            {CONTACT.EMAIL}
          </a>{" "}
          {t("legal-contact-mid")}{" "}
          <Link href="/contact-us" className="text-blue-600 hover:underline">
            {t("legal-contact-link")}
          </Link>
          .
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#0B1120] text-white py-16 sm:py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            {t("tos-title")}
          </h1>
          <p className="text-slate-400 text-sm">
            {t("legal-last-updated")}: {t("legal-updated-date")}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-10 text-slate-700 leading-relaxed">
          <p>{t("tos-intro")}</p>
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                {s.title}
              </h2>
              {s.body}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
