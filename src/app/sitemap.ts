import type { MetadataRoute } from "next";
import { capabilities } from "@/content/capabilities";
import { projects } from "@/content/projects";
import { sectors } from "@/content/sectors";
import { SITE_URL } from "@/lib/constants";

// Generated from the content files, so it cannot drift from the routes.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const page = (
    path: string,
    priority: number,
    changeFrequency: "monthly" | "yearly" = "monthly",
  ) => ({ url: `${SITE_URL}${path}`, lastModified, changeFrequency, priority });

  return [
    page("", 1),
    page("/capabilities", 0.8),
    // The capability pages are the ones that need to rank.
    ...capabilities.map((c) => page(`/capabilities/${c.slug}`, 0.9)),
    page("/projects", 0.8),
    ...projects.map((p) => page(`/projects/${p.slug}`, 0.7, "yearly")),
    page("/sectors", 0.6),
    ...sectors.map((s) => page(`/sectors/${s.slug}`, 0.5)),
    page("/firm", 0.7),
    page("/careers", 0.6),
    page("/contact-us", 0.7),
    page("/privacy-policy", 0.2, "yearly"),
    page("/terms-of-service", 0.2, "yearly"),
    page("/accessibility", 0.2, "yearly"),
  ];
}
