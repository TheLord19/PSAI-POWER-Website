# PSAI POWER — Comprehensive Analysis & UI Remodel Report

**Generated:** 06-06-2026  
**Scope:** Full codebase audit vs. `REFACTOR-PLAN.md` + new gaps discovered

---

## Executive Summary

**Overall Progress:** 12/34 plan items done (35%). Most low-hanging fruit (P1-P2) is complete. The hard work — components, i18n gaps, UX polish — is almost entirely untouched.

**Biggest Risks:**  
1. 3 completely empty component files (`MobileNav`, `AboutSection`, `ContactForm`) — dead code  
2. 5 "Coming Soon" / placeholder sections on a live site  
3. Hardcoded English strings on the About page break i18n  
4. No mobile navigation exists at all (empty `MobileNav.tsx`)  

---

## Verified Status of Every Plan Item

### Priority 1 — Quick Fixes (Code Bugs)
| # | Issue | Plan Says | Verified | Notes |
|---|-------|-----------|----------|-------|
| 1 | Unescaped apostrophe in JSX | ✅ Done | ✅ Confirmed | |
| 2 | Missing turbopack config | ✅ Done | ✅ Confirmed | `next.config.js` updated |
| 3 | IntersectionObserver in tests | ✅ Done | ✅ Confirmed | Setup files updated |
| 4 | `<img>` → `<Image />` | ✅ Done | ✅ Confirmed | `page.tsx` uses Next.js `Image` |

**Verdict: P1 fully done. ✅**

---

### Priority 2 — Broken / Misleading Links
| # | Issue | Plan Says | Verified | Notes |
|---|-------|-----------|----------|-------|
| 1 | "Preventive Maintenance" → Electrical Protection | ✅ Done | ✅ Confirmed | Header nav points correctly |
| 2 | "Corrective Maintenance" → Energy Audits | ✅ Done | ✅ Confirmed | Header nav points correctly |
| 3 | Footer `#consulting`/`#maintenance` anchors | ✅ Done | ✅ Confirmed | Removed, replaced with real links |
| 4 | Footer social icons → `#` | ✅ Done | ✅ Confirmed | LinkedIn links to real URL |
| 5 | Missing Oil & Gas card | ✅ Done | ✅ Confirmed | In locale + header dropdown |
| 6 | Oil & Gas in header dropdown | ✅ Done | ✅ Confirmed | Present in nav |

**Verdict: P2 fully done. ✅**

---

### Priority 3 — i18n / Translation Gaps
| # | Issue | Plan Says | Verified | Notes |
|---|-------|-----------|----------|-------|
| 1 | Missing `electrical-protection`/`energy-audits` keys | ✅ Done | ✅ Confirmed | L354-355 in EN locale |
| 2 | Hardcoded "Countries" string | ✅ Done | ✅ Confirmed | Uses `t("home-stats-countries")` now |
| 3 | Feature loop f10 (locale only has f8) | 🟡 In Progress | 🟡 Confirmed | Auto-skips missing keys — works but not fixed at source |
| 4 | About: "Sustainable Solutions", "Grid Reliability", "Innovation First" hardcoded | 🔴 Pending | 🔴 Confirmed | `about/page.tsx` L83 — hardcoded array, not i18n |
| 5 | About: Core Values hardcoded | 🔴 Pending | 🔴 Confirmed | `about/page.tsx` L122-127 — titles + descriptions all English-only |

**Verdict: 2 done, 1 workaround, 2 still broken. 🔴**

---

### Priority 4 — Empty / Placeholder Components
| # | Component | Plan Says | Verified | Notes |
|---|-----------|-----------|----------|-------|
| 1 | `ClientsSection.tsx` | 🔴 Pending | 🔴 Confirmed | Renders "Coming Soon" only |
| 2 | `CTA.tsx` | 🔴 Pending | 🔴 Confirmed | Renders "Coming Soon" only |
| 3 | `MobileNav.tsx` | 🔴 Pending | 🔴 Confirmed | **Completely empty file** (0 bytes) — no mobile nav at all |
| 4 | `AboutSection.tsx` | 🔴 Pending | 🔴 Confirmed | **Completely empty file** (0 bytes) — dead code |
| 5 | `ContactForm.tsx` | 🔴 Pending | 🔴 Confirmed | **Completely empty file** (0 bytes) — dead code |

**Verdict: All 5 untouched. 🔴**

---

### Priority 5 — Missing Functionality
| # | Feature | Plan Says | Verified | Notes |
|---|---------|-----------|----------|-------|
| 1 | Formspree contact form | ⏸️ On Hold | ⏸️ Confirmed | Code exists but uses `info@psaipowerinc.ca` placeholder endpoint |
| 2 | Social proof (logos, testimonials) | 🔴 Pending | 🔴 Confirmed | No section exists |
| 3 | Team page | 🔴 Pending | 🔴 Confirmed | No route or page exists |
| 4 | Blog / insights | 🔴 Pending | 🔴 Confirmed | No content infrastructure |
| 5 | Certifications / trust badges | 🔴 Pending | 🔴 Confirmed | Not present anywhere |

**Verdict: All pending except Formspree (on hold). 🔴**

---

### Priority 6 — Copy / UX Improvements
| # | Issue | Plan Says | Verified | Notes |
|---|-------|-----------|----------|-------|
| 1 | Generic hero headline | 🔴 Pending | 🔴 Confirmed | `Hero.tsx` is hardcoded + not even imported; home page has its own inline hero |
| 2 | Stock photos (Pexels) | 🔴 Pending | 🔴 Confirmed | All images are Pexels URLs |
| 3 | Service cards lack distinct identity | 🔴 Pending | 🔴 Confirmed | Same card pattern for all 6 services |
| 4 | About hero low text contrast | 🔴 Pending | 🔴 Confirmed | Text over dark overlay on image |
| 5 | World map decorative-only | 🔴 Pending | 🔴 Confirmed | Uses Wikipedia SVG, markers are fake/hardcoded |
| 6 | Passive CTA buttons | 🔴 Pending | 🔴 Confirmed | "Explore Services", "Contact Us" |
| 7 | Footer 4-column clutter | 🔴 Pending | 🔴 Confirmed | |
| 8 | Nav all-caps styling dated | 🔴 Pending | 🔴 Confirmed | `label.toUpperCase()` in Header |
| 9 | No case studies / portfolio | 🔴 Pending | 🔴 Confirmed | |

**Verdict: All 9 untouched. 🔴**

---

## NEW Gaps Discovered (Not in the Plan)

These are issues I found during the audit that are **not covered** by your existing refactor plan:

### Critical

| # | Gap | Location | Impact |
|---|-----|----------|--------|
| N1 | **No mobile navigation exists** | `MobileNav.tsx` is empty; Header has no hamburger menu | Site is completely broken on mobile |
| N2 | **`Hero.tsx` is dead code** | Standalone component is hardcoded + never imported anywhere | Confusing to maintain; home page has its own inline hero |
| N3 | **"We usually respond within 24 hours" hardcoded** | `contact-us/page.tsx` L179 | Breaks i18n for French visitors |
| N4 | **"Learn More" and "+ more features" hardcoded** | `services/page.tsx` L165, L169 | Breaks i18n |

### High

| # | Gap | Location | Impact |
|---|-----|----------|--------|
| N5 | **Stats section data inconsistency** | Home page: "5+ Continents" and "7+ Countries" label mismatch — `home-stats-global` renders "Continents" but value is "5+", `home-stats-countries` renders "Countries" with "7+" | Confusing; verify data is accurate |
| N6 | **Footer email + phone hardcoded** | `Footer.tsx` L136-137 | Can't be translated; harder to update |
| N7 | **Contact page address hardcoded** | `contact-us/page.tsx` L133-136 | Can't be translated |
| N8 | **No SEO metadata on subpages** | Only `layout.tsx` has metadata; all subpages inherit the same title/description | Poor SEO for services, about, who-we-serve pages |
| N9 | **External noise.svg dependency** | Home page CTA references `grainy-gradients.vercel.app/noise.svg` | Will break if that service goes down |

### Medium

| # | Gap | Location | Impact |
|---|-----|----------|--------|
| N10 | **3 empty component files** | `AboutSection.tsx`, `ContactForm.tsx`, `MobileNav.tsx` — all 0 bytes | Dead code; should either be built or removed |
| N11 | **Minimal test coverage** | Only 1 smoke test in `src/__tests__/` | No component or page tests |
| N12 | **No sitemap.xml or robots.txt** | Missing from `public/` | SEO penalty |
| N13 | **No loading states** | No `loading.tsx` files in any route | Poor UX on slow connections |
| N14 | **About + Contact share same hero image** | Both use `/images/hero/about.jpg` | Looks unpolished |

### Low / Nice-to-Have

| # | Gap | Location | Impact |
|---|-----|----------|--------|
| N15 | **No dark mode** | No Tailwind dark mode config | Modern expectation |
| N16 | **World map markers are hardcoded** | About page — 6 fake location pins | Misleading; replace or remove |
| N17 | **No breadcrumbs** | Missing on subpages | Navigation UX |
| N18 | **Formspree fallback missing** | Contact form has no offline fallback | Form silently fails if Formspree is down |
| N19 | **"Who We Serve" overview page** | Only shows 3 sectors (might not list all 6) | Needs verification |

---

## Summary Table

| Category | Total | Done | In Progress | Pending |
|----------|-------|------|-------------|---------|
| P1 — Quick Fixes | 4 | 4 | 0 | 0 |
| P2 — Broken Links | 6 | 6 | 0 | 0 |
| P3 — i18n Gaps | 5 | 2 | 1 | 2 |
| P4 — Empty Components | 5 | 0 | 0 | 5 |
| P5 — Missing Features | 5 | 0 | 0 | 5 (1 on hold) |
| P6 — UX/Copy | 9 | 0 | 0 | 9 |
| **New Gaps (N1-N19)** | **19** | **0** | **0** | **19** |
| **Grand Total** | **53** | **12** | **1** | **40** |

---

## Recommended Attack Plan (UI Remodel Priority)

If the goal is a complete UI remodel, here's the suggested order:

### Phase 1: Fix What's Broken (1-2 sessions)
1. **Build `MobileNav.tsx`** — critical, site has zero mobile navigation
2. **i18n for About page** — the 2 remaining hardcoded blocks (P3 #4-5)
3. **i18n hardcoded strings** — "We usually respond...", "Learn More", "+ more features" (N3, N4)
4. **Delete or build** `AboutSection.tsx`, `ContactForm.tsx` (N10)

### Phase 2: Build Placeholder Components (2-3 sessions)
5. **`ClientsSection.tsx`** — real client logos/testimonials (P4 #1)
6. **`CTA.tsx`** — real call-to-action (P4 #2)
7. **Wire up Formspree** — get the real endpoint (P5 #1)
8. **Team page** — new route + content (P5 #3)

### Phase 3: UX & Copy Overhaul (2-3 sessions)
9. **Hero redesign** — new headline, remove dead `Hero.tsx`, unify hero pattern (P6 #1)
10. **Replace stock photos** — source real engineering imagery (P6 #2)
11. **Service card redesign** — distinct visual identity per service (P6 #3)
12. **Footer simplification** — reduce to 3 columns (P6 #7)
13. **Nav styling** — drop all-caps, modernize (P6 #8)
14. **CTA button copy** — more action-oriented language (P6 #6)

### Phase 4: Polish & SEO (1-2 sessions)
15. **SEO metadata** per page (N8)
16. **Sitemap + robots.txt** (N12)
17. **Loading states** for all routes (N13)
18. **World map** — replace with real data or remove (P6 #5, N16)
19. **Breadcrumbs** (N17)

### Phase 5: Long-Term
20. Blog / insights (P5 #4)
21. Certifications / trust badges (P5 #5)
22. Dark mode (N15)
23. Expand test coverage (N11)

---

## File Inventory (for reference)

```
src/
├── app/
│   ├── about/page.tsx          ← Hardcoded strings to fix
│   ├── contact-us/page.tsx     ← Hardcoded "24 hours", address
│   ├── services/page.tsx       ← Hardcoded "Learn More", "+ more"
│   ├── licenses/page.tsx
│   ├── resources/page.tsx
│   ├── who-we-serve/page.tsx
│   ├── layout.tsx              ← Root layout (only one with metadata)
│   ├── page.tsx                ← Home page with inline hero
│   ├── error.tsx
│   └── not-found.tsx
├── components/
│   ├── sections/
│   │   ├── Hero.tsx            ← DEAD CODE (unused, hardcoded)
│   │   ├── AboutSection.tsx    ← EMPTY (0 bytes)
│   │   ├── ContactForm.tsx     ← EMPTY (0 bytes)
│   │   ├── ClientsSection.tsx  ← "Coming Soon"
│   │   └── CTA.tsx             ← "Coming Soon"
│   ├── layout/
│   │   ├── Header.tsx          ← Active, all-caps nav
│   │   ├── Footer.tsx          ← Active, 4 columns, hardcoded contact
│   │   ├── MobileNav.tsx       ← EMPTY (0 bytes) — CRITICAL
│   │   ├── I18nProvider.tsx
│   │   ├── PageTransition.tsx
│   │   └── ClientWrapper.tsx
│   ├── common/
│   │   ├── Logo.tsx
│   │   └── LoadingSpinner.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Modal.tsx
├── locales/
│   ├── en/translation.json     ← 355 keys, but missing about core values
│   └── fr/translation.json     ← Needs same missing keys
├── __tests__/
│   ├── setup.ts
│   └── smoke.test.tsx          ← Only test
├── hooks/
├── lib/
├── styles/
└── types/
```

---

*End of report. Use this alongside `REFACTOR-PLAN.md` to track progress on the UI remodel.*
