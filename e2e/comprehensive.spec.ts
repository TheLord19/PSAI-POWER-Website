import { test, expect } from '@playwright/test';

test.describe('Comprehensive Site Health Tests', () => {

    test('All main navigation links should be functional', async ({ page }) => {
        await page.goto('/');

        // Define labels exactly as they appear (uppercase in UI)
        const navLinks = [
            { name: "SERVICES", url: "/services" },
            { name: "WHO WE SERVE", url: "/who-we-serve" },
            { name: "ABOUT", url: "/about" },
            { name: "RESOURCES", url: "/resources" },
            { name: "LICENSES", url: "/licenses" },
            { name: "CONTACT US", url: "/contact-us" },
        ];

        for (const link of navLinks) {
            console.log(`Testing link: ${link.name}`);

            // Re-find the element on each iteration to avoid staleness
            const header = page.locator('header');
            const navLink = header.getByRole('link', { name: link.name, exact: true }).first();

            await expect(navLink).toBeVisible();
            await navLink.click();

            // Wait for navigation and verify URL
            await expect(page).toHaveURL(new RegExp(link.url), { timeout: 10000 });

            // Verify content exists
            await expect(page.locator('h1')).toBeVisible();

            // Go back to home for next iteration
            await page.goto('/');
        }
    });

    test('Deeper links for specific services should work', async ({ page }) => {
        const services = [
            { id: 'power-system-design', name: /Power System/i },
            { id: 'grid-modernization', name: /Grid/i },
            { id: 'renewable-integration', name: /Renewable/i }
        ];

        for (const service of services) {
            await page.goto(`/services/${service.id}`);
            await expect(page.locator('h1')).toContainText(service.name);
            // Verify breadcrumb or "Overview" section
            await expect(page.locator('h2')).toContainText(/Overview/i);
        }
    });

    test('Deeper links for specific industries should work', async ({ page }) => {
        const industries = [
            { id: 'mining-industry', name: /Mining/i },
            { id: 'oil-gas', name: /Oil/i },
            { id: 'utilities-grid-operators', name: /Utilities/i }
        ];

        for (const industry of industries) {
            await page.goto(`/who-we-serve/${industry.id}`);
            await expect(page.locator('h1')).toContainText(industry.name);
            await expect(page.locator('h2')).toContainText(/Overview/i);
        }
    });

    test('Contact form should be practical', async ({ page }) => {
        await page.goto('/contact-us');

        // Fill form
        await page.fill('input[name="name"]', 'Test User');
        await page.fill('input[name="email"]', 'test@example.com');
        await page.fill('input[name="subject"]', 'E2E Test Inquiry');
        await page.fill('textarea[name="message"]', 'This is an automated test message.');

        // Verify submit button is enabled and visible
        const submitBtn = page.locator('button[type="submit"]');
        await expect(submitBtn).toBeVisible();
        await expect(submitBtn).toBeEnabled();
    });

    test('Footer links and presence', async ({ page }) => {
        await page.goto('/');
        const footer = page.locator('footer');

        // Check social links
        const socialLinks = footer.locator('a[href="#"]');
        await expect(socialLinks).toHaveCount(3); // Facebook, Twitter, LinkedIn

        // Check copyright year
        const currentYear = new Date().getFullYear().toString();
        await expect(footer).toContainText(currentYear);
        await expect(footer).toContainText(/PSAI POWER/);
    });
});
