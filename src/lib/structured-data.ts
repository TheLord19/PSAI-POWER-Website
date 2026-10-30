// JSON-LD. The old site had one thin block; this gives Google a licensed firm
// with an address, a phone number, services, projects and open jobs.
import { CONTACT, ORG, SITE_URL } from "./constants";

const ORG_ID = `${SITE_URL}/#organization`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: CONTACT.ADDRESS.LINE1,
  addressLocality: CONTACT.ADDRESS.LOCALITY,
  addressRegion: CONTACT.ADDRESS.REGION,
  postalCode: CONTACT.ADDRESS.POSTAL,
  addressCountry: CONTACT.ADDRESS.COUNTRY_CODE,
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: ORG.LEGAL_NAME,
    alternateName: ORG.NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/brand/psai-logo.png`,
    image: `${SITE_URL}/opengraph-image`,
    telephone: CONTACT.PHONE,
    email: CONTACT.EMAIL,
    address: postalAddress,
    areaServed: ["CA", "Ontario", "British Columbia", "Manitoba"],
    foundingDate: ORG.FOUNDED,
    founder: { "@type": "Person", name: "Prasad Shrawane" },
    sameAs: [CONTACT.LINKEDIN],
    knowsAbout: [
      "Load flow and short circuit studies",
      "Protection coordination",
      "Arc flash analysis",
      "DER interconnection",
      "Substation design",
      "Power system commissioning",
    ],
    // Registration numbers are pending — add `identifier` to each once
    // confirmed (list.md).
    hasCredential: [
      "Professional Engineers Ontario",
      "Engineers and Geoscientists British Columbia",
      "Engineers Geoscientists Manitoba",
    ].map((name) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional licence",
      recognizedBy: { "@type": "Organization", name },
    })),
  };
}

export function serviceSchema(s: {
  slug: string;
  title: string;
  summary: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/capabilities/${s.slug}#service`,
    name: s.title,
    description: s.summary,
    serviceType: s.title,
    provider: { "@id": ORG_ID },
    areaServed: "CA",
  };
}

export function projectSchema(p: {
  slug: string;
  title: string;
  summary: string;
  year: string | null;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${SITE_URL}/projects/${p.slug}#project`,
    name: p.title,
    abstract: p.summary,
    ...(p.year && { dateCreated: p.year }),
    creator: { "@id": ORG_ID },
  };
}

// The Careers postings are the strongest content on the site. JobPosting
// makes them eligible for Google Jobs.
export function jobPostingSchema(j: {
  title: string;
  description: string;
  datePosted: string;
  employmentType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: j.title,
    description: j.description,
    datePosted: j.datePosted,
    employmentType: j.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: ORG.LEGAL_NAME,
      sameAs: SITE_URL,
    },
    jobLocation: { "@type": "Place", address: postalAddress },
    applicantLocationRequirements: { "@type": "Country", name: "Canada" },
    directApply: false,
  };
}

// Render helper for server components.
export function jsonLd(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
