import { test, expect } from '@playwright/test';

test.describe('Internationalization (i18n) Testing', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should switch between English and French on homepage', async ({ page }) => {
        const h1 = page.locator('h1');
        await expect(h1).toContainText(/Powering Progress/i);

        await page.getByRole('button', { name: 'FR', exact: true }).click();
        await expect(h1).toContainText(/Propulser le Progrès/i);

        await page.getByRole('button', { name: 'EN', exact: true }).click();
        await expect(h1).toContainText(/Powering Progress/i);
    });

    test('should persist language selection after navigation', async ({ page }) => {
        await page.getByRole('button', { name: 'FR', exact: true }).click();

        // Wait for French content to appear
        await expect(page.locator('h1')).toContainText(/Propulser le Progrès/i);

        // Click About in header
        const header = page.locator('header');
        const aboutLink = header.getByRole('link', { name: /Propos/i });
        await aboutLink.first().click();

        await expect(page).toHaveURL(/\/about/);
        await expect(page.locator('h1')).toContainText(/À propos/i);

        const wwsLink = header.getByRole('link', { name: /Servons/i });
        await wwsLink.first().click();
        await expect(page.locator('h1')).toContainText(/Servons/i);
    });

    test('should correctly translate dynamic service pages', async ({ page }) => {
        await page.goto('/services/power-system-design');
        await expect(page.locator('h1')).toContainText(/Power System/i);

        await page.getByRole('button', { name: 'FR', exact: true }).click();
        await expect(page.locator('h1')).toContainText(/Conception/i);
        await expect(page.getByText(/Aperçu/i)).toBeVisible();
    });

    test('should correctly translate dynamic industry pages', async ({ page }) => {
        await page.goto('/who-we-serve/mining-industry');
        await expect(page.locator('h1')).toContainText(/Mining/i);

        await page.getByRole('button', { name: 'FR', exact: true }).click();
        await expect(page.locator('h1')).toContainText(/Minière/i);

        // Sometimes the section title might take a moment to update
        const solutionsTitle = page.locator('h3', { hasText: /Solutions/i });
        await expect(solutionsTitle).toBeVisible();
    });

    test('should show licenses page under construction text in both languages', async ({ page }) => {
        await page.goto('/licenses');
        await expect(page.locator('h1')).toContainText(/Licenses/i);

        await page.getByRole('button', { name: 'FR', exact: true }).click();
        await expect(page.locator('h1')).toContainText(/Licences/i);
        await expect(page.getByText(/Construction/i)).toBeVisible();
    });
});
