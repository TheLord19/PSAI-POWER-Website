// src/app/contact-us/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";

import { useContactForm } from "@/hooks/useContactForm";
import { CONTACT } from "@/lib/constants";

const ContactPage = () => {
  const { t } = useTranslation();
  const { formStatus, handleSubmit } = useContactForm();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white py-24 sm:py-32 px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/contact-map.jpg"
            alt="Contact Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0B1120]/85 backdrop-blur-[1px]"></div>
        </div>

        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-600/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
            {t("contact-hero-title")}
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            {t("contact-hero-subtitle")}
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: t("contact us") }]} />

      {/* Content Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">
                  {t("contact-info-title")}
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-1">
                        {t("contact-location-title")}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {t("contact-address-line1")}
                        <br />
                        {t("contact-address-line2")}
                        <br />
                        {t("contact-address-country")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-1">
                        {t("contact-phone-title")}
                      </h4>
                      <p className="text-slate-600">
                        <a
                          href={`tel:${CONTACT.PHONE}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {CONTACT.PHONE}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-1">
                        {t("contact-email-title")}
                      </h4>
                      <p className="text-slate-600">
                        <a
                          href={`mailto:${CONTACT.EMAIL}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {CONTACT.EMAIL}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-10 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full z-0"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-slate-900 mb-2">
                  {t("contact-form-title")}
                </h3>
                <p className="text-slate-500 mb-8">
                  {t("contact-response-time")}
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-semibold text-slate-700"
                      >
                        {t("contact-label-name")}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 text-base rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-semibold text-slate-700"
                      >
                        {t("contact-label-email")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 text-base rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-semibold text-slate-700"
                    >
                      {t("contact-label-subject")}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 text-base rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-slate-700"
                    >
                      {t("contact-label-message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 text-base rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none bg-slate-50 focus:bg-white"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  {formStatus === "success" && (
                    <div className="p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-3 border border-green-100">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm font-medium">
                        {t("contact-status-success")}
                      </span>
                    </div>
                  )}

                  {formStatus === "error" && (
                    <div className="p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-3 border border-red-100">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm font-medium">
                        {t("contact-status-error")}
                      </span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={
                      formStatus === "loading" || formStatus === "success"
                    }
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === "loading" ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span>{t("contact-button-submit")}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
