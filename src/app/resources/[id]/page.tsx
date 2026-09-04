// src/app/resources/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import React from "react";
import { useTranslation } from "react-i18next";

const resourceKeyMap: { [key: string]: { title: string; content: string } } = {
  "technical-whitepapers": {
    title: "resource-technical-whitepapers-title",
    content: "resource-technical-whitepapers-content",
  },
  "case-studies": {
    title: "resource-case-studies-title",
    content: "resource-case-studies-content",
  },
  "integration-guides": {
    title: "resource-integration-guides-title",
    content: "resource-integration-guides-content",
  },
  "compliance-documents": {
    title: "resource-compliance-documents-title",
    content: "resource-compliance-documents-content",
  },
  "technical-briefs": {
    title: "resource-technical-briefs-title",
    content: "resource-technical-briefs-content",
  },
  "best-practices": {
    title: "resource-best-practices-title",
    content: "resource-best-practices-content",
  },
};

export default function ResourceDetailPage() {
  const { t } = useTranslation();
  const params = useParams();
  const resourceId = params.id as string;
  const resource = resourceKeyMap[resourceId];

  if (!resource) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900">
            {t("resource-not-found")}
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {t(resource.title)}
        </h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-700 text-lg leading-relaxed">
            {t(resource.content)}
          </p>
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">
              {t("resource-access-resources")}
            </h3>
            <p className="text-blue-700">{t("resource-access-content")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
