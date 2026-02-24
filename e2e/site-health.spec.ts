import { test, expect } from '@playwright/test';

test.describe('PSAI POWER Site Health & I18n', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        // Wait for page to be ready
        await expect(page.locator('header')).toBeVisible();
    });

    test('Homepage should load and switch languages', async ({ page }) => {
        const h1 = page.locator('h1');
        await expect(h1).toContainText(/Powering Progress/i);

        // Switch to French
        const frBtn = page.getByRole('button', { name: 'FR', exact: true });
        await frBtn.click();

        // Wait for text to change - use a longer timeout and be less restrictive
        await expect(h1).toContainText(/Propulser le Progrès/i, { timeout: 15000 });

        // Switch back to English
        const enBtn = page.getByRole('button', { name: 'EN', exact: true });
        await enBtn.click();
        await expect(h1).toContainText(/Powering Progress/i, { timeout: 15000 });
    });

    test('Navigation links should reach 200 OK pages', async ({ page }) => {
        page.on('console', msg => console.log(`BROWSER LOG: ${msg.text()}`));
        const links = [
            { name: "SERVICES", path: "/services" },
            { name: "WHO WE SERVE", path: "/who-we-serve" },
            { name: "ABOUT", path: "/about" },
            { name: "RESOURCES", path: "/resources" },
            { name: "LICENSES", path: "/licenses" },
            { name: "CONTACT US", path: "/contact-us" }
        ];

        for (const link of links) {
            console.log(`Checking link: ${link.name} at ${link.path}`);

            // Retry logic for navigation
            let attempts = 0;
            let success = false;
            while (attempts < 2 && !success) {
                try {
                    attempts++;
                    const response = await page.goto(link.path, { waitUntil: 'domcontentloaded', timeout: 25000 });
                    if (response?.status() === 200) {
                        success = true;
                    } else {
                        console.log(`Attempt ${attempts} failed with status: ${response?.status()}`);
                    }
                } catch (e) {
                    console.log(`Attempt ${attempts} failed with error: ${e}`);
                }
            }
            expect(success).toBe(true);

            // Wait for a key element that should be present on all pages (e.g., footer or specific h1)
            await expect(page.locator('footer')).toBeVisible({ timeout: 15000 });
        }
    });

    test('Dynamic Service pages should load correct content', async ({ page }) => {
        await page.goto('/services/grid-modernization');
        await expect(page.locator('h1')).toContainText(/Grid Modernization/i);

        await page.getByRole('button', { name: 'FR', exact: true }).click();
        await expect(page.locator('h1')).toContainText(/Modernisation/i, { timeout: 10000 });
    });

    test('Dynamic Industry pages should load correct content', async ({ page }) => {
        await page.goto('/who-we-serve/renewable-energy');
        await expect(page.locator('h1')).toContainText(/Renewable Energy/i);

        // Switch to French
        await page.getByRole('button', { name: 'FR', exact: true }).click();

        // Wait for language to be applied (detect by checking button state or URL if applicable)
        await expect(page.getByRole('button', { name: 'FR', exact: true })).toHaveClass(/bg-white/);

        await expect(page.locator('h1')).toContainText(/Énergie renouvelable/i, { timeout: 15000 });
    });

    test('Contact form should be present and validatable', async ({ page }) => {
        await page.goto('/contact-us');
        const form = page.locator('form');
        await expect(form.locator('input[name="email"]')).toHaveAttribute('type', 'email');
        await expect(form.locator('button[type="submit"]')).toBeVisible();
    });

    test('Footer components presence', async ({ page }) => {
        await page.goto('/');
        const footer = page.locator('footer');
        await expect(footer).toContainText(/PSAI POWER/i);
        await expect(footer.getByRole('link', { name: /About/i })).toBeVisible();
    });
});
