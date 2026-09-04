# Audit Report — PSAI Power Website

**Scan type:** Incremental (2026-08-18). `last-audit` tag still points at HEAD (`f919dab`, no new commits), but 5 working-tree files were modified after the previous full scan: `src/app/contact-us/page.tsx`, `src/components/layout/Footer.tsx`, `src/components/layout/I18nProvider.tsx`, `src/components/layout/MobileNav.tsx`, `src/hooks/useContactForm.ts`. Only these were re-scanned; all other findings below are carried over unchanged from the prior full scan.
**Scope (this pass):** the 5 files listed above, checked against findings #3, #4, #5, #7, #12.
**Verification:** All findings below were independently confirmed by direct file/grep inspection (not taken on faith from the scanning pass).

---

## 1. Errors Found

### Critical

1. **`src/app/team/page.tsx:70,78,82` — literal placeholder copy is live production content.** `[Founder Name]`, `[Founder bio — education, years of experience...]`, `[Details about professional engineering licenses...]` render verbatim on `/team`. Confirmed present in current source.
2. **`package.json` / `package-lock.json` version mismatch will break `npm ci`.** `package.json` declares `next@^15.5.4`, `eslint-config-next@^15.0.0`; lockfile root manifest resolves `next@^16.2.4` and `eslint-config-next@14.0.0` respectively. Confirmed via grep on both files. `npm ci` fails hard on a lockfile that doesn't satisfy `package.json`; `npm install` would silently regenerate the lock against an untested tree.
3. ~~**Contact form swallows failures silently.**~~ **FIXED.** `src/app/contact-us/page.tsx:219-226` now has a `formStatus === "error"` branch rendering `contact-status-error` via the same pattern as the success branch. Confirmed present.

### High

4. ~~**`<html lang="en">` is hardcoded**~~ **FIXED.** `I18nProvider.tsx:18-23` now syncs `document.documentElement.lang` from a `languageChanged` listener on mount and on every language switch. Confirmed present. (Layout's static `lang="en"` is still the SSR default, but the client now corrects it — the original screen-reader/translation-tool gap is closed.)
5. ~~**Duplicate `/careers` link in `Footer.tsx`.**~~ **FIXED.** Quick-links list now has one `/careers` entry (line 130) and a distinct `/contact-us` entry (line 138) — no duplicate remains. Confirmed present.
6. **Partial i18n coverage** — home (`page.tsx`), about (`about/page.tsx`), team (`team/page.tsx`), and `ProjectPortfolio.tsx` contain large blocks of hardcoded English strings never routed through `t()`. The FR toggle in the header does not actually localize a meaningful fraction of the site, contradicting the apparent intent of shipping full en/fr parity (locale JSON files themselves have clean 1:1 key parity — 468/468 — so the infra is there, it's just not used consistently).
7. ~~**`useContactForm.ts` has no unmount safety.**~~ **FIXED.** Now uses a `mountedRef` guard around every `setFormStatus` call plus an `AbortController` with a 15s timeout on the `fetch`, and `AbortError` is caught and ignored. Confirmed present, correctly implemented.
8. **Formspree endpoint uses the unregistered "raw email" form** (`src/lib/constants.ts:12`, `https://formspree.io/f/info@psaipowerinc.ca`). This tier requires a one-time email confirmation before it delivers, and is rate-capped. If that confirmation was never completed, the client-side fetch still returns success while messages are dropped server-side — needs operational verification, not just code review, since it's invisible from the codebase alone.

### Medium

9. **`GridFlow.tsx:32-33` — visibility-pause optimization doesn't actually pause work.** When the canvas scrolls off-screen (`IntersectionObserver`), `animate()` still re-runs every frame and rebuilds the `nodes`/`conns`/`particles` arrays before the visibility check short-circuits the draw call — CPU/allocation churn continues at ~60fps while scrolled past.
10. **Dynamic Tailwind class interpolation in `src/app/licenses/page.tsx:140`** — `` `bg-${license.color}-50` `` only survives Tailwind's JIT purge today because the literal strings happen to appear in `services/page.tsx`'s accent map and in the orphaned `ClientsSection.tsx` (still inside the `tailwind.config.js` content glob). Deleting `ClientsSection.tsx` as dead-code cleanup would silently drop the orange/indigo background classes with no build error.
11. **Header desktop dropdowns are mouse-only** (`Header.tsx:179-202`) — no `onFocus`/`onBlur`, no `aria-expanded`/`aria-haspopup`, and sublinks aren't even in the DOM unless `hoveredIndex` is set — keyboard users cannot reach Services/Who-We-Serve submenus at all.
12. ~~**`MobileNav.tsx` drawer lacks `aria-expanded`/`role="dialog"`/`aria-modal`.**~~ **FIXED.** Trigger now has `aria-expanded={isOpen}` (line 61); panel has `role="dialog"` and `aria-modal="true"` (lines 87-88). Confirmed present.
13. **CSP allows `'unsafe-inline' 'unsafe-eval'`** in `script-src` (`next.config.js:28-38`) — a documented Next.js tradeoff, but it meaningfully weakens XSS mitigation from the CSP.
14. **`src/types/index.ts` is completely empty** and nothing imports `@/types` anywhere — dead stub.

### Low / Dead Code

15. Confirmed fully removed with zero remaining references: `LoadingSpinner.tsx`, `Logo.tsx`, `AboutSection.tsx`, `ContactForm.tsx`, `Button.tsx`, `Modal.tsx`, `useDropdown.ts`.
16. Never deleted but never wired in: `components/sections/Hero.tsx`, `components/sections/CTA.tsx`, `components/sections/ClientsSection.tsx`, `components/ui/Card.tsx`, `components/layout/ClientWrapper.tsx` — all orphaned, none imported anywhere in the app tree.
17. `nodemailer`/`@types/nodemailer` present in the lockfile/devDependencies but unused anywhere in `src` — dead dependency, likely a leftover from a server-side email approach abandoned in favor of the client-side Formspree fetch.
18. Stale locale keys never referenced by any component: `contact-status-error`, `contact-status-info` (should be driving the missing error UI in #3, but aren't wired up), `licenses-construction-title`, `licenses-construction-status` (leftover from an earlier placeholder version of `/licenses`).
19. `tsconfig.json` targets `es5` — harmless (Next transpiles regardless) but an unusually old target for a from-scratch rewrite using React 18/framer-motion; looks like an unrevisited `create-next-app` default.

### Test Coverage

20. All page tests (`about.test.tsx`, `services.test.tsx`, `who-we-serve.test.tsx`, `smoke.test.tsx`, `team.test.tsx`) are shallow smoke tests that mock `useTranslation` to identity and assert one heading is present — no interaction/state coverage.
21. `team.test.tsx` asserts `"Leadership"` appears — this passes while `/team` ships `[Founder Name]` placeholder copy (finding #1). The test actively certifies unfinished content as correct.
22. No test exercises the contact form's failure path — a test mocking a failed `fetch` would have caught finding #3 immediately. `useContactForm.ts` has no dedicated unit test.
23. Zero test coverage for `Header.tsx`, `MobileNav.tsx`, `Footer.tsx` (would have caught the duplicate link), `Breadcrumbs.tsx`, `IndustryCard.tsx`/`ServiceCard.tsx`, `useClickOutside.ts`, all three `[id]` dynamic route pages, `licenses/page.tsx`, `not-found.tsx`, `error.tsx`.

---

## 2. Root Cause

- **Findings #1, #6, #18, #21**: The v2.0 rewrite was done page-by-page and shipped incrementally without a final content/i18n pass. `team/page.tsx` and parts of `page.tsx`/`about/page.tsx` were scaffolded with placeholder text and never revisited before being merged to `main`. Tests were written against the scaffolded state (asserting structural headings) rather than final content, so they never caught the gap.
- **Finding #2**: `package.json` was hand-edited to walk back from an in-progress Next.js 16 upgrade (or to pin to 15 for stability) without re-running `npm install` to regenerate `package-lock.json`. The lockfile still reflects the abandoned Next 16 attempt.
- **Finding #3**: The error-handling half of the contact form feature was built in the hook (`formStatus === "error"` exists) and in the locale files (`contact-status-error` key exists in both languages) but the corresponding JSX branch in `contact-us/page.tsx` was never added — an incomplete feature, not a regression; the pieces exist but weren't connected.
- **Finding #4**: The language-switching feature (`i18n.changeLanguage`, persisted preference) was added without touching the static server-rendered `<html lang>` attribute in the root layout — a common gap when i18n is bolted on client-side to an App Router layout that renders the `<html>` tag server-side once.
- **Finding #9**: The `IntersectionObserver` visibility gate was added only around the canvas `draw()` call rather than wrapping the entire `requestAnimationFrame` re-entry, so the guard protects rendering but not computation.
- **Findings #16, #17**: Components were prototyped and then superseded by inline implementations directly in the page files (e.g., `page.tsx` has its own inline hero) during rapid iteration, but the original component files were never deleted — normal churn in a fast rewrite, but nobody did a final dead-code pass before this audit.
- **Finding #10**: Tailwind's JIT class-name scanner can't see runtime-interpolated class names; the developer relied on the same literal strings existing elsewhere in the scanned glob rather than using a static lookup map — works by coincidence, not by design.

---

## 3. Proposed Fix

1. **Team placeholders**: Get real founder bio/credentials copy before next deploy, or pull `/team` from the nav/sitemap until content is ready. Trade-off: pulling the page is fast but removes a page likely linked from marketing; filling content is correct but blocks on non-engineering input.
2. **Lockfile mismatch**: Decide the target Next major (15 or 16) deliberately, then run a clean `npm install` to regenerate `package-lock.json` in sync with `package.json`, and verify `npm ci` succeeds before merging. Do not hand-edit one file without the other again.
3. **Contact form error UI**: Add an `formStatus === "error"` branch in `contact-us/page.tsx` mirroring the existing success block, wired to the already-existing `contact-status-error` locale key and the unused `AlertCircle` import.
4. **`<html lang>`**: Either read the persisted/detected locale server-side (e.g., via a cookie set on language change) and set it in `layout.tsx`, or update `document.documentElement.lang` from within `I18nProvider.tsx`'s language-change handler as a minimal client-side fix.
5. **Footer duplicate link**: Determine the intended second link (likely Terms of Service or Privacy Policy, both of which exist as pages but aren't in the footer's quick-links list) and fix the `href`/label.
6. **i18n completeness**: Route the remaining hardcoded strings in `page.tsx`, `about/page.tsx`, `team/page.tsx`, and `ProjectPortfolio.tsx` through `t()`, adding any missing keys to both locale files.
7. **Contact form robustness**: Add an `AbortController`-backed timeout to the `fetch`, and guard the deferred `setFormStatus(null)` with a mount-tracking ref or clear the timeout on unmount via a `useEffect` cleanup.
8. **Formspree delivery**: Manually verify the destination inbox has confirmed the Formspree form and check current submission volume against the plan's cap.
9. **GridFlow perf**: Move the visibility check to the top of `animate()` before array construction, re-entering only a cheap `requestAnimationFrame(animate)` call when not visible.
10. **Licenses dynamic classes**: Replace the `bg-${color}-50` interpolation with a static `Record<string, string>` lookup map of complete class strings, same pattern already used in `services/page.tsx`.
11. **Keyboard-accessible dropdowns**: Add `onFocus`/`onBlur` alongside the existing hover handlers, `aria-expanded`/`aria-haspopup` on the trigger, and render sublinks in the DOM (visually hidden when closed) rather than conditionally mounting them.
12. **MobileNav a11y**: Add `aria-expanded` on the toggle button and `role="dialog"` `aria-modal="true"` on the drawer panel.
13. **Dead code**: Delete `Hero.tsx`, `CTA.tsx`, `ClientsSection.tsx`, `Card.tsx`, `ClientWrapper.tsx`, empty `types/index.ts`, and the `nodemailer`/`@types/nodemailer` dependencies — but only *after* fixing #10, since `ClientsSection.tsx`'s literal classes currently keep `/licenses` styling intact by accident.
14. **Test coverage**: Add a contact-form test mocking a failed fetch and asserting the error UI renders (this also forces #3 to be fixed); update `team.test.tsx` to assert against real founder content once written, not just the word "Leadership"; add basic tests for `Header`/`MobileNav` dropdown and keyboard behavior, and `Footer` link uniqueness.

---

## 4. Applied Fix

Findings #3, #4, #5, #7, #12 were fixed by someone else between the last full scan and this incremental pass (2026-08-18) — not applied by this audit itself, but verified correct against their proposed fixes above during this scan. All remaining findings (#1, #2, #6, #8, #9, #10, #11, #13-#23): **not applied — awaiting approval.**
