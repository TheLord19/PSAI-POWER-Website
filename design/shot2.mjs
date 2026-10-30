import { chromium } from '@playwright/test';
const b = await chromium.launch();
const m = await b.newPage({ viewport:{width:390,height:900}, deviceScaleFactor:2 });
await m.goto('file:///D:/PROJECTS/Website/PSAI-redesign/design/home.html');
await m.waitForTimeout(2600);
await m.screenshot({ path:'D:/PROJECTS/Website/PSAI-POWER-Website-main/.design-review/m-hero.png' });
await b.close();
console.log('OK');
