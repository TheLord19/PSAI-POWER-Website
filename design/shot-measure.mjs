import { chromium } from '@playwright/test';
const base = process.argv[2] ?? 'http://localhost:3210';
const b = await chromium.launch();
for (const path of ['/', '/capabilities/protection-and-control', '/projects']) {
  const p = await b.newPage();
  await p.goto(base + path, { waitUntil: 'load' });
  await p.waitForTimeout(1200);
  const rows = await p.evaluate(() =>
    performance.getEntriesByType('resource').map((r) => ({
      name: r.name.replace(location.origin, ''),
      enc: r.encodedBodySize,
      type: r.initiatorType,
    })),
  );
  const kb = (n) => (n / 1024).toFixed(1);
  const js = rows.filter((r) => r.name.includes('.js'));
  const font = rows.filter((r) => /\.woff2?|\/media\//.test(r.name));
  const img = rows.filter((r) => r.name.includes('_next/image'));
  const total = rows.reduce((s, r) => s + r.enc, 0);
  const html = await p.evaluate(() => document.documentElement.outerHTML.length);
  console.log(`\n== ${path}`);
  console.log(`   JS (transferred):    ${kb(js.reduce((s, r) => s + r.enc, 0))} KB across ${js.length} files`);
  console.log(`   Fonts:               ${kb(font.reduce((s, r) => s + r.enc, 0))} KB across ${font.length}`);
  console.log(`   Images:              ${kb(img.reduce((s, r) => s + r.enc, 0))} KB across ${img.length}`);
  console.log(`   All resources:       ${kb(total)} KB   HTML doc: ${kb(html)} KB uncompressed`);
  await p.close();
}
await b.close();
