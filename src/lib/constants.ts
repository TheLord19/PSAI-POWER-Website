// Single source of truth for the firm's name, address and contact details.
// The address must match the Google Business Profile character for character —
// the old site had three variants. Import from here; never retype it.

export const SITE_URL = "https://psaipowerinc.ca";

export const ORG = {
  NAME: "PSAI Power",
  LEGAL_NAME: "PSAI Power Engineering Labs Inc.",
  FOUNDED: "2004",
} as const;

const STREET = "1099 Gordon Avenue, Unit 3";
const CITY_LINE = "Sudbury, ON P3A 2V5";

export const CONTACT = {
  PHONE: "+1 (705) 970-6244",
  PHONE_HREF: "tel:+17059706244",
  EMAIL: "team@psaipowerinc.ca",
  ADDRESS: {
    LINE1: STREET,
    LINE2: CITY_LINE,
    COUNTRY: "Canada",
    LOCALITY: "Sudbury",
    REGION: "ON",
    POSTAL: "P3A 2V5",
    COUNTRY_CODE: "CA",
  },
  MAPS_URL: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${STREET}, ${CITY_LINE}`,
  )}`,
  LINKEDIN: "https://linkedin.com/company/psaipower",
} as const;

// Formspree's email-style endpoint only delivers after the address confirms
// the first submission. See list.md — replace with a form ID when available.
export const FORMSPREE_ENDPOINT = `https://formspree.io/f/${CONTACT.EMAIL}`;
