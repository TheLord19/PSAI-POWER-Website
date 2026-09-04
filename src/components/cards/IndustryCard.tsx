"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface IndustryCardProps {
  industry: {
    id: string;
    title: string;
    description: string;
    image: string;
    features: string[];
  };
}

export default function IndustryCard({ industry }: IndustryCardProps) {
  const { t } = useTranslation();

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      {/* Industry Image */}
      <div className="relative h-52 sm:h-64 w-full overflow-hidden bg-slate-100">
        <Image
          src={industry.image}
          alt={industry.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            {industry.title}
          </h3>
        </div>
      </div>

      {/* Industry Content */}
      <div className="p-6 sm:p-8">
        <p className="text-slate-600 mb-6 leading-relaxed">
          {industry.description}
        </p>

        <ul className="space-y-3 mb-6">
          {industry.features.slice(0, 3).map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start text-slate-700 text-sm"
            >
              <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
          <li className="text-slate-400 text-sm italic pl-8">
            + {t("wws-more-solutions")}
          </li>
        </ul>

        <Link
          href={`/who-we-serve/${industry.id}`}
          className="inline-flex items-center font-semibold text-blue-600 group-hover:text-blue-700 transition-colors"
        >
          {t("wws-btn-solutions")}
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
