import { test, expect } from '@playwright/test';

test.describe('Smoke tests', () => {
    test('homepage should load and show main content', async ({ page }) => {
        await page.goto('/');

        // Check if the title is correct
        await expect(page).toHaveTitle(/PSAI POWER/);

        // Check if the main heading is visible
        const heading = page.locator('h1');
        await expect(heading).toBeVisible();

        // Ensure the page content is not empty/blank
        const mainContent = page.locator('main');
        await expect(mainContent).not.toBeEmpty();

        // Check if certain sections are visible
        await expect(page.getByText('Core Solutions')).toBeVisible();
    });

    test('about page should load', async ({ page }) => {
        await page.goto('/about');
        await expect(page.locator('h1')).toContainText('About PSAI POWER');
    });

    test('services page should load', async ({ page }) => {
        await page.goto('/services');
        await expect(page.locator('h1')).toBeVisible();
    });
});
