// Screenshots of the v3 build. Usage: node design/shot-v3.mjs [baseUrl]
import { mkdirSync } from 'node:fs';
import { chromium } from '@playwright/test';

const base = process.argv[2] ?? 'http://localhost:3000';
const out = 'D:/PROJECTS/Website/PSAI-redesign/design/v3';
mkdirSync(out, { recursive: true });

const desktop = [
  ['home', '/'],
  ['capability', '/capabilities/protection-and-control'],
  ['arc-flash', '/capabilities/arc-flash-and-safety'],
  ['studies', '/capabilities/power-system-studies'],
  ['projects', '/projects'],
  ['case-study', '/projects/caribbean-solar-interconnection'],
  ['firm', '/firm'],
  ['contact', '/contact-us'],
  ['careers', '/careers'],
  ['sector', '/sectors/mining'],
];
const mobile = [
  ['home', '/'],
  ['capability', '/capabilities/protection-and-control'],
  ['projects', '/projects'],
];

const b = await chromium.launch();
const d = await b.newPage({ viewport: { width: 1440, height: 900 } });
for (const [name, path] of desktop) {
  await d.goto(base + path, { waitUntil: 'load' });
  await d.waitForTimeout(1500); // let the hero diagram finish energizing
  await d.screenshot({ path: `${out}/${name}-desktop.png`, fullPage: true });
}
await d.goto(base + '/', { waitUntil: 'load' });
await d.waitForTimeout(1800);
await d.screenshot({ path: `${out}/home-hero.png` });
await d.getByRole('button', { name: 'Without a coordination study' }).click();
await d.waitForTimeout(600);
await d.locator('svg[aria-labelledby="sld-title"]').screenshot({ path: `${out}/demo-uncoordinated.png` });

const m = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
for (const [name, path] of mobile) {
  await m.goto(base + path, { waitUntil: 'load' });
  await m.waitForTimeout(1500);
  await m.screenshot({ path: `${out}/${name}-mobile.png`, fullPage: true });
}
await m.goto(base + '/', { waitUntil: 'load' });
await m.locator('button[aria-controls="mobile-nav"]').click();
await m.screenshot({ path: `${out}/menu-mobile.png` });

await b.close();
console.log('OK', out);
