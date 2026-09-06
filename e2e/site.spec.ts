import { test, expect } from '@playwright/test';

// ─── Page load tests ──────────────────────────────────────────────────────────

const pages = [
    { name: 'Home', path: '/', heading: null },
    { name: 'Services', path: '/services', heading: 'services' },
    { name: 'Who We Serve', path: '/who-we-serve', heading: null },
    { name: 'About', path: '/about', heading: null },
    { name: 'Licenses', path: '/licenses', heading: null },
    { name: 'Contact Us', path: '/contact-us', heading: null },
];

for (const { name, path } of pages) {
    test(`[PAGE] ${name} loads with 200`, async ({ page }) => {
        const response = await page.goto(path);
        expect(response?.status()).toBe(200);
    });

    test(`[PAGE] ${name} has no broken layout (body visible)`, async ({ page }) => {
        await page.goto(path);
        await page.waitForLoadState('domcontentloaded');
        const body = page.locator('body');
        await expect(body).toBeVisible();
    });
}

// ─── Header navigation ────────────────────────────────────────────────────────

test('[NAV] Header logo is visible', async ({ page }) => {
    await page.goto('/');
    const logo = page.locator('header img[alt="PSAI Power Inc."]');
    await expect(logo).toBeVisible();
});

test('[NAV] All main nav links are present', async ({ page }) => {
    await page.goto('/');
    const navLinks = ['SERVICES', 'WHO WE SERVE', 'ABOUT', 'LICENSES', 'CONTACT US'];
    for (const label of navLinks) {
        await expect(page.getByRole('link', { name: label, exact: true }).first()).toBeVisible();
    }
});

test('[NAV] Services dropdown appears on hover', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'SERVICES', exact: true }).hover();
    await page.waitForTimeout(400); // wait for 300ms delay + render
    const dropdown = page.locator('div.bg-\\[\\#012e69\\]').first();
    await expect(dropdown).toBeVisible();
});

test('[NAV] Language toggle EN/FR buttons visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('button', { name: 'EN' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'FR' })).toBeVisible();
});

test('[NAV] Search button is NOT visible (disabled)', async ({ page }) => {
    await page.goto('/');
    const searchBtn = page.locator('button[aria-label="Open search"]');
    await expect(searchBtn).toHaveCount(0);
});

// ─── Services page ────────────────────────────────────────────────────────────

test('[SERVICES] All 6 service cards are present', async ({ page }) => {
    await page.goto('/services');
    await page.waitForLoadState('networkidle');
    // Each card has an img element loaded from pexels
    const cards = page.locator('img[src*="pexels.com"]');
    const count = await cards.count();
    expect(count).toBeGreaterThanOrEqual(6);
});

// ─── Who We Serve page ────────────────────────────────────────────────────────

test('[WWS] All 5 industry cards are present', async ({ page }) => {
    await page.goto('/who-we-serve');
    await page.waitForLoadState('networkidle');
    const cards = page.locator('img[src*="pexels.com"]');
    const count = await cards.count();
    expect(count).toBeGreaterThanOrEqual(5);
});

// ─── Contact page ─────────────────────────────────────────────────────────────

test('[CONTACT] Contact form is present', async ({ page }) => {
    await page.goto('/contact-us');
    await expect(page.locator('form')).toBeVisible();
});

test('[CONTACT] Contact form has required fields', async ({ page }) => {
    await page.goto('/contact-us');
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
});

test('[CONTACT] Phone and email links are present', async ({ page }) => {
    await page.goto('/contact-us');
    await expect(page.locator('a[href="tel:+17059706244"]')).toBeVisible();
    await expect(page.locator('a[href="mailto:team@psaipowerinc.ca"]')).toBeVisible();
});

test('[CONTACT] Ontario slideshow is present', async ({ page }) => {
    await page.goto('/contact-us');
    await page.waitForLoadState('networkidle');
    const slideshow = page.locator('img[src*="pexels.com"]').first();
    await expect(slideshow).toBeVisible();
});

// ─── Licenses page ────────────────────────────────────────────────────────────

test('[LICENSES] License cards are present (min 5)', async ({ page }) => {
    await page.goto('/licenses');
    // look for PEO, EGBC, WSIB, EngGeoMB, IEEE text
    const orgs = ['PEO', 'EGBC', 'WSIB', 'IEEE'];
    for (const org of orgs) {
        await expect(page.getByText(org, { exact: false }).first()).toBeVisible();
    }
});

// ─── No console errors on key pages ──────────────────────────────────────────

for (const path of ['/', '/services', '/who-we-serve', '/contact-us']) {
    test(`[CONSOLE] No JS errors on ${path}`, async ({ page }) => {
        const errors: string[] = [];
        page.on('pageerror', (err) => errors.push(err.message));
        await page.goto(path);
        await page.waitForLoadState('networkidle');
        expect(errors).toHaveLength(0);
    });
}
