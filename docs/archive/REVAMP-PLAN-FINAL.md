# PSAI POWER — Final Revamp Plan

**Created:** 2026-07-04
**Supersedes:** Recommendations scattered across `COMPLEXITY_ANALYSIS.md`, `ANALYSIS-REPORT.md`, `REFACTOR-PLAN.md`, `BUG-REPORT-2026-06-10.md`
**Status Key:** 🔴 Not started | 🟡 In progress | ✅ Done | ⏸️ Blocked/waiting

This is the single source of truth going forward. Older analysis docs stay as historical record but should not be worked from directly — some of their findings are already fixed, some are superseded here.

---

## Phase 0 — Business-critical (site doesn't work as a lead-gen tool without these)

| # | Item | Status | Notes |
|---|------|--------|-------|
| 0.1 | Formspree endpoint — verify it actually delivers mail | ⏸️ In progress (~2 days) | Current endpoint format (`f/info@psaipowerinc.ca`) is unusual for Formspree — confirm a real submission arrives before trusting it |
| 0.2 | Licenses page — replace placeholder text badges (PEO, WSIB, EngGeoMB, IEEE) with real logo assets | 🔴 | Only EGBC currently has a real logo; licenses themselves are confirmed real, just need artwork |
| 0.3 | Resources page — "Download" buttons do nothing (no href/onClick) | ✅ 2026-07-13 | Buttons converted to honest "Request this document" links → /contact-us (EN+FR) |
| 0.4 | Privacy Policy + Terms of Service + basic cookie notice | 🟡 | `/privacy-policy` + `/terms-of-service` pages live (PIPEDA-oriented, cookie section included), linked in footer + sitemap. Remaining: owner legal review; FR translations of page bodies |

---

## Phase 1 — Trust & credibility content

| # | Item | Status | Notes |
|---|------|--------|-------|
| 1.1 | Real testimonial from existing client | 🔴 | Ask for a short quote + permission to use name/company; replace generic "industries served" framing on home page with it once ready |
| 1.2 | Careers page | ✅ 2026-07-14 | `/careers` live: both postings (engineer + field technician), eligibility line, mailto apply, EN+FR, nav/footer/sitemap wired, tests. See "Item 1.2 detail" below for source content |
| 1.3 | Team page | 🟡 | Wired into nav/footer/sitemap. **Still blocking:** `[Founder Name]` and bio text are literal placeholders live in production (AUDIT.md #1); `/images/team/founder.jpg` doesn't exist — page now falls back to a generic icon instead of a broken image, but needs a real founder photo + real bio. Needs the actual person — no stock/AI substitute is appropriate here |
| 1.4 | Contact page slideshow — remove Ontario nature photography | ✅ | Replaced during v2 redesign with single local hero image (contact-map.jpg) |

### Item 1.2 detail — Careers page content (decided 2026-07-05)

**Two openings at launch** (test engineer merged into field technician — do not re-split):

**1. Intermediate Electrical Engineer (Power Systems)** — 3–5 yrs experience
Draft head text: "We're looking for an intermediate electrical engineer to grow with our
power systems consulting practice. You'll work across power systems studies, protection
and control, substation design, and commissioning and testing, as well as industrial
medium- and low-voltage electrical design, control, and automation — supporting projects
from concept through detailed design to site energization for utility, renewable, and
mining clients."
Qualifications: 4-yr Electrical Engineering degree or CET diploma; 3–5 yrs relevant
experience; registered EIT preferred; P.Eng an asset, not required; ETAP/AutoCAD/CEC
knowledge an asset. Full responsibilities section still to be written (base on Tetra Tech
intermediate substation posting pattern: studies, design deliverables, cross-discipline
coordination).

**2. Electrical Field Technician — Substations, MV/LV Equipment, Pumps and Motors**
3–7 yrs field experience. Full publish-ready description already exists in repo root:
`Electrical_Field_Technician_Work_Profile.docx` — use its "Website Advertisement Version"
section verbatim as the posting body.

**Both postings must include eligibility line:** "Applicants must be legally entitled to
work in Canada (Canadian citizen, permanent resident, or valid work permit holder). We are
unable to sponsor work visas at this time." (wording tunable)

**Reference only — do NOT publish from it:** `Senior Electrical Project Engineer_DET JD_JO.docx`
is an external Agnico Eagle posting; useful for structure (required vs. "considered an
asset" split) and industry vocabulary only.

**Implementation checklist when executing:** `/careers` route + `layout.tsx` (metadata) +
`loading.tsx`, nav entry in Header/MobileNav/Footer, i18n keys in `en` + `fr`
translation.json, sitemap.xml entry.

---

## Phase 2 — Consistency & honesty fixes (things that actively mislead)

| # | Item | Status | Notes |
|---|------|--------|-------|
| 2.1 | Nav dropdown fake depth | ✅ 2026-07-13 | Who We Serve collapsed to one link per industry (5 links); fake "System Optimization → /services" removed from Services dropdown. MobileNav inherits |
| 2.2 | `who-we-serve/page.tsx` still hotlinks Pexels images | ✅ 2026-08-28 | Resolved: 6 real local photos now in `public/images/industries/`, page references local paths, CSP `img-src` no longer allows pexels.com |
| 2.3 | `who-we-serve/[id]/page.tsx` uses a green color theme | ✅ 2026-07-13 | All green classes reconciled to blue/slate palette |

---

## Phase 3 — Technical/SEO polish

| # | Item | Status | Notes |
|---|------|--------|-------|
| 3.1 | Favicon | 🟡 | `src/app/icon.png` added (copy of logo, 484KB) — works, but replace with a proper square ≤48KB icon asset when available |
| 3.2 | Open Graph + Twitter card metadata | ✅ 2026-07-13 | Root layout: metadataBase, OG (siteName/locale/image), Twitter summary_large_image. OG image = services hero for now; a dedicated 1200×630 branded image would be better |
| 3.3 | Structured data (JSON-LD `LocalBusiness`/`ProfessionalService`) | ✅ 2026-07-13 | `ProfessionalService` schema in root layout, fed from CONTACT constants |
| 3.4 | Basic security headers in `next.config.js` (CSP, X-Frame-Options) | ✅ 2026-07-13 | X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy, CSP (unsafe-inline/eval required by Next; pexels allowed until 2.2 done) |
| 3.5 | Expand test coverage beyond 1 smoke test | 🟡 | 6 test files passing (about, contact, services, team, who-we-serve, smoke) — keep growing with new pages |

---

## Phase 4 — Longer-term / needs more resourcing

| # | Item | Status | Notes |
|---|------|--------|-------|
| 4.1 | Blog / insights section | 🔴 | Drives organic search; currently nothing indexable beyond ~12 service pages |
| 4.2 | Real case studies (named client, specifics, outcome) | 🔴 | Current "Project Experience" section is anonymized ("Caribbean Utility," "Ontario, Canada") — fine as a stopgap, but named case studies convert far better once you have permission |
| 4.3 | Lightweight CMS or structured content layer | 🔴 | Every content change currently requires editing code + JSON; worth considering once content velocity increases (new projects, team changes, blog posts) |
| 4.4 | Dark mode | 🔴 | Nice-to-have, not a priority |

---

## Explicitly deferred / not recommended

- **Inflating codebase size for its own sake** — not a real goal; skip.
- **Deep SSR/SSG migration off `"use client"`** — real architectural win but high-effort; revisit only if organic SEO traffic becomes a priority and the blog/CMS work above is underway.

---

*This file should be updated as items move between statuses. When Phase 0 is fully ✅, re-run a full honesty pass before considering the site launch-ready.*
