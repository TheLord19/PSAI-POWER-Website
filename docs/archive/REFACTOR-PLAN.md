# PSAI POWER Website — Refactor & Improvement Plan

**Last Updated:** 06-07-2026 (Session 6)
**Status Key:** 🔴 Pending | 🟡 In Progress | ✅ Done | ⏸️ On Hold

---

## Priority 1 — Quick Fixes (Code Bugs)

| # | Issue | File | Status |
|---|-------|------|--------|
| 1 | Unescaped apostrophe in JSX | `src/app/not-found.tsx` | ✅ Done |
| 2 | Build config — missing `turbopack` config | `next.config.js` | ✅ Done |
| 3 | IntersectionObserver not defined in tests | `vitest.config.mts` + `setup.ts` | ✅ Done |
| 4 | `<img>` instead of Next.js `<Image />` | `src/app/page.tsx` | ✅ Done |

---

## Priority 2 — Broken / Misleading Links

| # | Issue | Status |
|---|-------|--------|
| 1 | Header nav: "Preventive Maintenance" → Electrical Protection page | ✅ Done |
| 2 | Header nav: "Corrective Maintenance" → Energy Audits page | ✅ Done |
| 3 | Footer: `#consulting` / `#maintenance` anchors go nowhere | ✅ Done |
| 4 | Footer: Social media icons all link to `#` | ✅ Done |
| 5 | Who We Serve: Missing Oil & Gas card (defined but unreachable) | ✅ Done |
| 6 | Who We Serve nav: Added Oil & Gas to header dropdown | ✅ Done |

---

## Priority 3 — i18n / Translation Gaps

| # | Issue | Status |
|---|-------|--------|
| 1 | Missing `electrical-protection` / `energy-audits` keys | ✅ Done |
| 2 | Hardcoded "Countries" string on home page | ✅ Done |
| 3 | Feature loop in services detail checks up to f10, locale only has f8 | ✅ Done — loops now break at first missing key |
| 4 | About page: "Sustainable Solutions", "Grid Reliability", "Innovation First" hardcoded | ✅ Done |
| 5 | About page: Core Values ("Integrity", "Excellence", "Innovation") hardcoded | ✅ Done |

---

## Priority 4 — Empty / Placeholder Components

| # | Component | Issue | Status |
|---|-----------|-------|--------|
| 1 | `components/sections/ClientsSection.tsx` | Only renders "Coming Soon" | ✅ Done — industry grid linked to who-we-serve |
| 2 | `components/sections/CTA.tsx` | Only renders "Coming Soon" | ✅ Done — direct contact CTA with phone + email |
| 3 | `components/layout/MobileNav.tsx` | **Completely empty file** | ✅ Done — built slide-out drawer with full nav |
| 4 | `components/sections/AboutSection.tsx` | Exists but **not imported anywhere** | ✅ Done — deleted (dead code) |
| 5 | `components/sections/ContactForm.tsx` | Exists but **not imported anywhere** | ✅ Done — deleted (dead code) |

---

## Priority 5 — Missing Functionality

| # | Feature | Details | Status |
|---|---------|---------|--------|
| 1 | Formspree contact form | Endpoint is a placeholder | ⏸️ On Hold (waiting on account) |
| 2 | Social proof section | Client logos, testimonials, case studies | 🔴 Pending |
| 3 | Team page | Engineer bios, credentials, photos | 🟡 In Progress — skeleton created, details pending from founder |
| 4 | Blog / insights section | Thought leadership content | 🔴 Pending |
| 5 | Certifications / trust badges | Prominent display of badges on homepage | ✅ Done — PEO, EGBC, WSIB, EGM, IEEE badge strip on home |

---

## Priority 6 — Copy / UX Improvements

| # | Issue | Status |
|---|-------|--------|
| 1 | Hero headline is generic ("Powering Progress Through Engineering Excellence") | ✅ Done — "Power Systems Engineered / For Reliability at Scale" |
| 2 | Stock photos are obvious (Pexels images) | ✅ Done — all Pexels replaced with local images |
| 3 | Service cards blend together — need distinct visual identity | ✅ Done |
| 4 | About page hero has low text contrast | ✅ Done |
| 5 | World map section is decorative, not informative | ✅ Done — replaced with region grid |
| 6 | CTA buttons are passive ("Explore Services", "Contact Us") | ✅ Done — "View Our Capabilities", "Talk to an Engineer", etc. |
| 7 | Footer has 4 columns — slightly cluttered | ✅ Done |
| 8 | Nav uses all-caps styling — feels dated | ✅ Done |
| 9 | No case studies / project portfolio section | ✅ Done — ProjectPortfolio with 4 real project entries |
| 10 | Contact page: Scenic Ontario slideshow (Pexels stock photos) | ✅ Done — removed entirely |

---

## Summary

| Priority | Total | ✅ Done | 🟡 In Progress | 🔴 Pending | ⏸️ On Hold |
|----------|-------|---------|----------------|-------------|------------|
| P1 — Quick Fixes | 4 | 4 | 0 | 0 | 0 |
| P2 — Broken Links | 6 | 6 | 0 | 0 | 0 |
| P3 — i18n Gaps | 5 | 5 | 0 | 0 | 0 |
| P4 — Empty Components | 5 | 5 | 0 | 0 | 0 |
| P5 — Missing Features | 5 | 1 | 1 | 2 | 1 |
| P6 — UX/Copy | 10 | 10 | 0 | 0 | 0 |
| **Total** | **35** | **31** | **1** | **2** | **1** |

---

*This plan will be updated each session with progress notes.*
