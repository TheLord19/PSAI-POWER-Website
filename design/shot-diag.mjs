// Find elements wider than a 360px viewport.
import { chromium } from '@playwright/test';
const base = process.argv[2] ?? 'http://localhost:3210';
const paths = ['/capabilities/protection-and-control', '/capabilities/commissioning', '/projects/caribbean-solar-interconnection'];
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 360, height: 780 } });
for (const path of paths) {
  await p.goto(base + path, { waitUntil: 'networkidle' });
  const info = await p.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    const out = [];
    document.querySelectorAll('*').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.width > vw + 1) {
        out.push({
          tag: el.tagName.toLowerCase(),
          cls: (el.getAttribute('class') || '').slice(0, 70),
          w: Math.round(r.width),
          depth: (() => { let d = 0, n = el; while ((n = n.parentElement)) d++; return d; })(),
        });
      }
    });
    return { vw, scrollW: document.documentElement.scrollWidth, offenders: out.slice(0, 12) };
  });
  console.log('\n==', path, 'viewport', info.vw, 'scrollWidth', info.scrollW);
  for (const o of info.offenders) console.log(`  d${o.depth} ${o.tag} w=${o.w}  ${o.cls}`);
}
await b.close();
