# Performance budget — what is enforced, and why

Measured 2026-09-15 against a production build (`next build && next start`),
Next 16.3.5, Lighthouse mobile defaults, median of 3 runs.

## The brief's targets vs. reality

| Metric | Brief | Measured | Gate |
|---|---|---|---|
| Accessibility | — | 100 | **error** at 100 |
| SEO | — | 100 | **error** at 100 |
| Best practices | — | 96 | **error** at ≥ 95 |
| CLS | < 0.05 | 0.000 | **error** at < 0.05 |
| Lighthouse performance | ≥ 95 | 79–89 | warn |
| LCP | < 1.5 s | 3.48 s | warn |
| INP | < 100 ms | not measurable in lab | warn on TBT < 300 ms |
| JS transferred, homepage | < 100 KB gz | 159.4 KB gz | **error** at ≤ 170 KB gz |

Four metrics we meet are hard gates, so a regression fails the build. Three we
do not meet are warnings carrying the brief's original numbers, so the gap
stays visible in every CI run instead of being forgotten. Nothing here lowers
a target — it separates "must not regress" from "not yet achieved".

## Why the JS budget is 170 KB, not 100 KB

The 100 KB figure is below the floor for this stack:

| | gzipped |
|---|---|
| `react-dom` | 69.2 KB |
| Next App Router client runtime + scheduler | 39.2 KB |
| **floor, before any of our code** | **108.4 KB** |
| our four client components + router machinery | ~51 KB |
| **homepage total** | **159.4 KB** |

The only route under 100 KB is dropping the client router, which costs the
fault demo, the mobile menu, the project filter and the contact form. That is
a worse site in exchange for a number. The budget is set at 170 KB so real
regressions fail; lower it whenever the measured figure drops.

Our four client components are `FaultDemo`, `NavLinks`, the project archive
filter and `ContactForm`. Everything else is a server component.

## Why LCP is 3.5 s, and what would fix it

The LCP element is the hero `<h1>` — text, not an image. Its phases:

```
TTFB            465 ms
Load Delay        0 ms
Load Time         0 ms
Render Delay   3019 ms   <- the entire problem
```

FCP lands at 1715 ms and LCP at 3484 ms. The text paints first in the fallback
face, then Archivo arrives and the heading repaints; the browser records that
repaint as the LCP. **Fonts are the LCP problem**, not JavaScript — total
blocking time is 311 ms and there is no third-party blocking at all.

The homepage ships 137.7 KB of font:

| File | Size | Note |
|---|---|---|
| Archivo (variable, `wdth` 62–125%, weight 100–900) | 88.0 KB | carries the whole interface |
| Source Serif 4, weight 400 | 49.7 KB | one below-the-fold blockquote |

Options, in order of how much design they cost:

1. **Drop the serif from the homepage founder quote** (`src/app/page.tsx:139`).
   Saves 49.7 KB on the most important page. `preload: false` does not prevent
   the download — any element using the family triggers the fetch.
2. **`font-display: optional` on Archivo.** The heading never repaints, so LCP
   collapses onto FCP. Cost: a first-time visitor on a slow connection sees the
   fallback face for that whole page load, on a design where the type *is* the
   brand.
3. **Self-host a subset of Archivo** narrowed to the weights and width range
   actually used (~100–118%, not 62–125%). Keeps the design exactly, cuts the
   88 KB substantially. Most work, best outcome.

None of these are code cleanups — each changes what a visitor sees, so each is
the firm's call, not the build's.

## Running it locally

```bash
npm run build
npx next start -p 3210 &
npx lhci autorun                                    # scores and metrics
node design/js-budget.mjs http://localhost:3210 --assert   # byte budget
```
