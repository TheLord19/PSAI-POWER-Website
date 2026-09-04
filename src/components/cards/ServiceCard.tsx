"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    image: string;
    icon: React.ReactElement;
    accent: string;
    features: string[];
  };
  colors: {
    check: string;
    badge: string;
    border: string;
    glow: string;
    hoverBorder: string;
  };
  isReversed: boolean;
  index: number;
}

export default function ServiceCard({
  service,
  colors,
  isReversed,
  index,
}: ServiceCardProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/services/${service.id}`}
        className={`group grid md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-center p-4 sm:p-5 md:p-6 rounded-lg border ${colors.border} transition-all duration-300 ${colors.hoverBorder} hover:shadow-xl ${colors.glow}/30`}
      >
        {/* Image */}
        <div className={isReversed ? "md:order-2" : ""}>
          <div className="relative overflow-hidden rounded-md aspect-[4/3] bg-slate-100">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Icon badge */}
            <div className="absolute top-4 left-4 p-2.5 rounded-md bg-white/90 backdrop-blur-sm shadow-sm text-slate-800">
              {service.icon}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={isReversed ? "md:order-1" : ""}>
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 ${colors.badge}`}
          >
            {service.icon &&
              React.cloneElement(service.icon, {
                className: "w-3.5 h-3.5",
              })}
            <span>{service.title}</span>
          </div>

          <p className="text-slate-600 leading-relaxed mb-6">
            {service.description}
          </p>

          <ul className="space-y-3 mb-6">
            {service.features.slice(0, 3).map((f, fi) => (
              <li
                key={fi}
                className="flex items-start text-sm text-slate-700"
              >
                <CheckCircle2
                  className={`w-4 h-4 mr-3 flex-shrink-0 mt-0.5 ${colors.check}`}
                />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
            {t("services-btn-learn-more")}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
