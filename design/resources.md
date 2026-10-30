# Making things that don't look AI-generated

Working notes for the PSAI rebuild, and for anything after it.

## 1. Why AI-built sites look identical

A model asked for "a modern website" returns the most statistically common layout it has
seen: hero, three feature cards, testimonial strip, pricing, CTA — in indigo. It is not
designing, it is predicting. Every generic site is the average of every site.

The fix is not better prompting. It is **constraints written down before any code**, which
is what `~/.claude/skills/taste/SKILL.md` now holds, and what
`psai-handoff/CLAUDE.md` holds for this project specifically.

Three levers, in order of power:

1. **Name a reference world, not an adjective.** "Modern and clean" produces the average.
   "The visual language of single-line diagrams and equipment nameplates" produces this site.
2. **Write a prohibition list.** What you refuse does more work than what you ask for.
   Ours: no stock photography, no gradient washes, no glass cards, no tracked-out eyebrow
   labels, no accent-coloured single words, no arrows on buttons, no entrance animations.
3. **Take colour from something real.** Ours came from the logo and from substation
   materials — transformer-tank navy, insulator porcelain, warning-label yellow. Sampled
   values are unreachable by default.

Sources: [Why AI-generated websites look the same](https://shuffle.dev/blog/2026/01/why-do-most-ai-generated-websites-look-the-same/) ·
[AI slop web design guide](https://www.925studios.co/blog/ai-slop-web-design-guide) ·
[How to stop your frontend looking AI-generated](https://medium.com/design-bootcamp/how-to-stop-your-frontend-looking-ai-generated-efbb9681a6a2)

## 2. Craft references worth actually reading

| Resource | What it is | Use it for |
|---|---|---|
| [Butterick's Practical Typography](https://practicaltypography.com/) | Free book by a typographer-lawyer. Start with [Typography in ten minutes](https://practicaltypography.com/typography-in-ten-minutes.html) | Measure, point size, line spacing — the decisions that carry 80% of the impression |
| [Anthony Hobday — Visual design rules you can safely follow every time](https://anthonyhobday.com/sideprojects/saferules/) | ~40 illustrated rules | Settling arguments. "Never pure black or pure white" is why our ink is `#172A3A` |
| [Rauno Freiberg — UI Playbook](https://github.com/raunofreiberg/ui-playbook) | Documented behaviour of common components | Getting the details right: focus, keyboard, states |
| [Emil Kowalski — Animations on the web](https://animations.dev/) | Paid course, 4 modules, on easing, timing and taste. His essays are free at [emilkowal.ski/ui](https://emilkowal.ski/ui/building-an-animation-course) | The difference between motion that feels designed and motion that feels applied |
| [GSAP + ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) | The scroll-animation standard | Only when scroll position genuinely carries meaning |
| [SiteInspire](https://www.siteinspire.com/) | Hand-curated since 2010, European restraint | Calibrating typographic, low-colour layouts — closest to our direction |
| [Godly](https://godly.website/) | Motion-heavy, visually loud | Studying mechanisms, not for copying. Most of it would be wrong for an engineering firm |
| [Mobbin](https://mobbin.com/) | Real product UI, screen by screen | Flows and patterns rather than decoration |

## 3. Rules of engagement for galleries

Galleries are where taste goes to die if you browse them for looks. Browse them for
**mechanisms**: how did that page establish hierarchy in the first 400px; what is the
grid; where did they spend the one loud moment. Then throw the visual away and solve
your own problem.

The tell of a copied site is that its boldest element carries no information. The tell of
a designed one is that you cannot remove the bold element without losing meaning.

## 4. Animation that changes a mind

Decoration is forgotten. Motion persuades when it is **the argument itself**.

- **Demonstrate the product in the medium.** Our hero is not an animated illustration; it
  is a protection coordination study running in front of you. Toggling it makes a customer
  feel the difference between one dark feeder and a dark bus. No paragraph does that.
- **Animate state changes, not entrances.** Entrance animations say "look at me." State
  changes say "here is what changed, and why."
- **One moment, under a second.** A second animated element halves the value of the first.
- **Explanatory candidates for later** (each would need a deliberate budget decision):
  drawing the two time-current curves in sequence when the coordination figure scrolls into
  view, so the eye follows the margin between them; expanding the arc-flash boundary rings
  from the switchgear face. Both teach. Neither decorates.
- **Cost discipline.** `transform` and `opacity` only; no layout-triggering properties;
  never ship an animation library for two effects. CSS first, then Motion, then GSAP —
  and only when the previous rung cannot do it.
- **`prefers-reduced-motion` renders the final state immediately**, always.

## 5. What actually persuades a technical buyer

Not motion, and not polish. In descending order of power:

1. **Evidence instead of adjectives.** "Coordination per IEEE 242" beats "industry-leading
   protection expertise" for every reader who matters.
2. **Specificity as proof of work.** Device numbers (52-F2), standards (CSA Z462),
   registration numbers, the name of the engineer who stamps the report.
3. **Admitting what goes wrong.** The "What usually goes wrong" section on every capability
   page demonstrates twenty-two years of site experience in a way no badge can, and
   competitors will not copy it because it requires having been there.
4. **Restraint.** In technical markets, visual quietness reads as confidence. Loud reads as
   compensation.
