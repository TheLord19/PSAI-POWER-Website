# COMPLEXITY ANALYSIS — PSAI POWER Website

**Date:** June 11, 2026  
**Analyst:** Senior Software Architect  
**Scope:** Full repository audit — `PSAI-POWER-Website-main`

---

## 1. High-Level Architecture Map

### System Overview

```
┌─────────────────────────────────────────────────────────┐
│                     Client (Browser)                     │
├─────────────────────────────────────────────────────────┤
│  Next.js 15 App Router (Turbopack)                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────────────────┐  │
│  │  Layout   │  │  Pages   │  │  Components          │  │
│  │  (Server) │  │ (Client) │  │  ├─ layout/ (6)      │  │
│  │           │  │          │  │  ├─ sections/ (3)*    │  │
│  │  metadata │  │  Home     │  │  ├─ common/ (3)      │  │
│  │  shell    │  │  About    │  │  └─ ui/ (3)          │  │
│  │           │  │  Services │  │                      │  │
│  │           │  │  Contact  │  │  * 2 of 3 are unused │  │
│  │           │  │  WWS      │  │                      │  │
│  │           │  │  Resources│  │                      │  │
│  │           │  │  Licenses │  │                      │  │
│  └──────────┘  └──────────┘  └──────────────────────┘  │
│                                                         │
│  State: None (all local useState)                       │
│  i18n:  i18next (377 flat keys, en + fr)               │
│  Style: Tailwind CSS 3 + Framer Motion 12              │
│  Icons: Lucide React + FontAwesome (dual)               │
└─────────────────────────────────────────────────────────┘
                          │
                          │ POST (form only)
                          ▼
              ┌───────────────────────┐
              │   Formspree (SaaS)     │
              │   formspree.io/f/...   │
              └───────────────────────┘

There is NO backend. There is NO database.
The `src/app/api/contact/` directory exists but is empty.
`nodemailer` is installed but never imported.
```

### Key Architectural Decisions

| Decision | Rationale | Trade-off |
|----------|-----------|-----------|
| 100% client-rendered pages | `useTranslation()` requires client context | No SSR benefits; all page JS shipped to browser |
| Flat i18n keys (377 keys) | Simplicity; avoid nested lookups | No namespacing; hard to organize at scale |
| No global state manager | Site is static content; no shared state needed | Future interactive features will need one |
| Dual icon libraries (Lucide + FontAwesome) | FontAwesome for LinkedIn icon only | Extra bundle weight for 1 icon |
| Inline sections in `page.tsx` (517 lines) | Fast to write; no prop threading | Unmaintainable; can't reuse sections |

---

## 2. Technical Debt / Hotspots

### 🔴 Critical Hotspots (High risk of breakage during refactor)

#### HOTSPOT A — `src/app/page.tsx` (517 lines) — **GOD FILE**

The entire home page lives in a single component. It contains:
- A 100-line `GridTopology` SVG sub-component defined inline
- A 100-line `services` array with 6 objects, each with `title`, `desc`, `href`, `img`, `icon`
- 5 major sections (Hero, Challenge, Bento Grid, Trust Badge, CTA) — all in one file
- 10 separate `lucide-react` icon imports
- Framer Motion animations interleaved with JSX

**Breakage risk:** Any change to the hero ripples through the entire component tree. Extract `GridTopology` to its own file, decompose sections into `sections/` components.

#### HOTSPOT B — `src/components/layout/Header.tsx` (335 lines) — **EXCESSIVE NESTING**

Navigation dropdown rendering reaches **10 levels of JSX nesting** due to the `splitColumns` helper adding an extra wrapper layer. The nav items array is 100+ lines of hardcoded objects defined inside the component body.

**Breakage risk:** Adding or removing a nav item requires touching deeply nested JSX with multiple `.map()` chains. The `splitColumns` function adds unnecessary complexity — columns could be pre-computed.

#### HOTSPOT C — `src/app/contact-us/page.tsx` (343 lines) — **CONCERNS MIXED**

This file mixes:
- Form state management (`useState` for `formStatus`)
- Slideshow state + `setInterval` timer
- `fetch()` API call to Formspree with raw JSON serialization
- All UI rendering (hero, contact cards, form, slideshow)

**Breakage risk:** Changing the form (e.g., adding validation) forces touching the same file as the slideshow code. Extract `useContactForm()` hook and `<Slideshow>` component.

### 🟡 Medium Hotspots

#### HOTSPOT D — `resources/[id]/page.tsx` — Hardcoded English

The resource detail page uses a hardcoded `resourceContent` object with English strings instead of `t()`. French visitors see English content on resource detail pages.

#### HOTSPOT E — Dead Code Inventory

| File | Status | Action |
|------|--------|--------|
| `components/sections/Hero.tsx` | Hardcoded, never imported | Delete or repurpose |
| `components/ui/Button.tsx` | 0 bytes | Delete |
| `components/ui/Modal.tsx` | 0 bytes | Delete |
| `components/common/LoadingSpinner.tsx` | 0 bytes | Delete |
| `components/common/Logo.tsx` | 0 bytes | Delete |
| `hooks/useClickOutside.ts` | 0 bytes | Implement or delete |
| `hooks/useDropdown.ts` | 0 bytes | Implement or delete |
| `src/lib/constants.ts` | 0 bytes | Populate with shared constants |

#### HOTSPOT F — Stale Configuration

| File | Issue |
|------|-------|
| `src/next.config.js` | Duplicate of root `next.config.js`; simpler config; likely stale |
| `src/tsconfig.json` | Duplicate; may shadow root `tsconfig.json` (paths fixed in Session 4) |

### 🟢 Low Hotspots

- `nodemailer` + `@types/nodemailer` installed but unused
- `@fortawesome/free-solid-svg-icons` installed but unused
- `@types/nodemailer` is in `dependencies` instead of `devDependencies`
- Formspree endpoint uses email format (`f/info@psaipowerinc.ca`) — may be misconfigured
- `eslint-config-next@14.0.0` paired with `next@15.5.4` — minor version mismatch

---

## 3. Refactor Risk Score: **3 / 10**

> **Scale:** 1 = trivial to refactor, 10 = extremely brittle

### Justification

```
┌──────────────────────────────────────────────────────┐
│  Factor                          Weight   Score      │
├──────────────────────────────────────────────────────┤
│  Circular dependencies            25%      1/10      │
│  God files / tight coupling       25%      6/10      │
│  Test coverage                    20%      7/10      │
│  Dead code / stubs                15%      3/10      │
│  Version mismatches               10%      2/10      │
│  Dependency entanglement           5%      2/10      │
├──────────────────────────────────────────────────────┤
│  WEIGHTED TOTAL                            3.3/10    │
└──────────────────────────────────────────────────────┘
```

**Why it's low risk:**
- **Zero circular dependencies.** The import graph is a clean DAG — pages → components, never the reverse.
- **No shared state.** Components are self-contained; no Redux/Context to untangle.
- **Clean architecture boundaries.** Layout components, section components, page components are separated.
- **Builds and passes tests.** The project currently compiles and passes all tests.
- **No database migrations.** Static site with no persistence layer.

**Why it's not 1/10:**
- The 517-line `page.tsx` is a god file — extracting sections will touch the most visible page.
- Only 1 smoke test exists. Refactoring without test coverage on other pages is risky.
- The `Header.tsx` refactor (10-level nesting) is delicate navigation code.

---

## 4. Dependency Complexity

### Tightly Coupled Dependencies (Rip-and-Replace Risk)

#### 🔴 `i18next` / `react-i18next` — **RIP-AND-REPLACE: HIGH**

- **Penetration:** 14 source files call `useTranslation()`
- **Coupling type:** Deep — every page component depends on it
- **Replacement effort:** 2-3 days. Every `t("key")` call must be migrated
- **Alternative:** `next-intl` (server-compatible, would allow SSR)

#### 🟡 `framer-motion` — **RIP-AND-REPLACE: MEDIUM**

- **Penetration:** 5 files (Home, Services, MobileNav, ClientsSection, PageTransition)
- **Coupling type:** Moderate — animation props are component-specific
- **Replacement effort:** 1 day. Swap `<motion.div>` to CSS transitions or another library
- **Alternative:** CSS `@keyframes` or `react-spring`

#### 🟡 Dual Icon Libraries — **RIP-AND-REPLACE: LOW-MEDIUM**

- **Lucide React:** Used in 10+ files for 30+ icons
- **FontAwesome:** Used in 1 file (`Footer.tsx`) for the LinkedIn icon only
- **Replacement effort:** 1 hour. Replace FontAwesome LinkedIn icon with Lucide's `Linkedin` icon or an inline SVG
- **Bundle savings:** ~15KB removed

#### 🟢 All other dependencies — **LOW**

- `@vercel/analytics` — Drop-in replacement available
- `@svgr/webpack` — Standard Next.js SVG handling; many alternatives
- `@playwright/test`, `vitest`, `@testing-library/*` — Testing; swap independently

### Hardcoded External Dependencies

| Resource | Count | Risk |
|----------|-------|------|
| Pexels images (`images.pexels.com`) | 10 URLs across who-we-serve + contact-us | CDN dependency; images could disappear |
| Formspree endpoint | 1 | Single point of failure for contact form |
| LinkedIn URL | 1 | Low risk |

---

## 5. Execution Plan — Logical Order of Operations

### Phase 0: Foundation (1 session) — **ZERO BREAKING CHANGES**

| # | Task | Rationale |
|---|------|-----------|
| 0.1 | Delete 6 empty stub files | Reduces noise before refactor |
| 0.2 | Move `@types/nodemailer` to `devDependencies`; remove `nodemailer` if unused | Clean dependency tree |
| 0.3 | Delete duplicate `src/next.config.js` | Single source of truth |
| 0.4 | Add 3-5 smoke tests for other pages | Safety net before Phase 1 |

### Phase 1: Extract Components (1-2 sessions) — **NO VISUAL CHANGES**

| # | Task | Risk |
|---|------|------|
| 1.1 | Extract `GridTopology` from `page.tsx` → `components/effects/GridTopology.tsx` | 🟢 Low |
| 1.2 | Extract `<ServiceCard>` from `services/page.tsx` → `components/cards/ServiceCard.tsx` | 🟢 Low |
| 1.3 | Extract `<Slideshow>` from `contact-us/page.tsx` → `components/common/Slideshow.tsx` | 🟢 Low |
| 1.4 | Extract `<IndustryCard>` from `who-we-serve/page.tsx` → `components/cards/IndustryCard.tsx` | 🟢 Low |
| 1.5 | Extract `useContactForm()` hook from `contact-us/page.tsx` → `hooks/useContactForm.ts` | 🟢 Low |
| 1.6 | Flatten Header dropdown nesting: remove `splitColumns` helper, pre-compute columns | 🟡 Medium |

### Phase 2: Integration (1 session)

| # | Task | Risk |
|---|------|------|
| 2.1 | Wire extracted `GridTopology` into home hero (replace inline version) | 🟢 Low |
| 2.2 | Wire `ClientsSection` and `CTA` components into home page | 🟢 Low |
| 2.3 | Replace FontAwesome LinkedIn icon with Lucide `Linkedin` icon in Footer | 🟢 Low |
| 2.4 | Add `loading.tsx` to remaining routes (contact-us, licenses, who-we-serve, resources) | 🟢 Low |

### Phase 3: Hardening (1 session)

| # | Task | Risk |
|---|------|------|
| 3.1 | Migrate hardcoded English in `resources/[id]/page.tsx` to i18n keys | 🟢 Low |
| 3.2 | Extract hardcoded URLs/endpoints to `src/lib/constants.ts` | 🟢 Low |
| 3.3 | Align `eslint-config-next` version with Next.js 15 | 🟢 Low |
| 3.4 | Populate `hooks/useClickOutside.ts` and use in Header/MobileNav | 🟢 Low |

### Phase 4: Unique Feature (1 session)

| # | Task | Risk |
|---|------|------|
| 4.1 | Deploy `GridFlow.tsx` Canvas power-flow animation to hero | 🟡 Medium |
| 4.2 | Profile animation performance on mobile; tune particle count | 🟢 Low |

---

## 6. Summary Dashboard

| Metric | Current | Target |
|--------|---------|--------|
| God files (>300 lines) | 5 (`page.tsx` 517, `contact-us` 343, `Header` 335, `licenses` 305, `services` 283) | 0 |
| Empty stub files | 6 | 0 |
| Unused npm packages | 2 (`nodemailer`, `@fortawesome/free-solid-svg-icons`) | 0 |
| Orphaned components | 2 (`Hero.tsx`, unused sections) | 0 |
| I18n keys (flat) | 377 | 377 (namespacing deferred to future) |
| Test files | 1 (`smoke.test.tsx`) | 5+ |
| Circular dependencies | 0 | 0 |
| Deepest JSX nesting | 10 levels (Header dropdown) | 5 max |
| Client-rendered pages | 10/12 (83%) | 10/12 (acceptable for i18n site) |
| Build time | ~15s | ~15s |
| Diagnostic errors | 0 | 0 |
| Refactor risk score | 3/10 | 2/10 (after Phase 1) |

---

*End of analysis. Execute Phase 0 first — it has zero visual impact and reduces noise before the real refactor begins.*
