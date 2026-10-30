import { test, expect } from "@playwright/test";
import { capabilities } from "../src/content/capabilities";
import { projects } from "../src/content/projects";
import { sectors } from "../src/content/sectors";

// Every route in the new information architecture.
const ROUTES = [
  "/",
  "/capabilities",
  ...capabilities.map((c) => `/capabilities/${c.slug}`),
  "/projects",
  ...projects.map((p) => `/projects/${p.slug}`),
  "/sectors",
  ...sectors.map((s) => `/sectors/${s.slug}`),
  "/firm",
  "/careers",
  "/contact-us",
  "/privacy-policy",
  "/terms-of-service",
  "/accessibility",
];

for (const path of ROUTES) {
  test(`${path} loads with one h1`, async ({ page }) => {
    const res = await page.goto(path);
    expect(res?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page).toHaveTitle(/PSAI Power/);
  });
}

test("unknown pages return 404 with a way back", async ({ page }) => {
  const res = await page.goto("/no-such-page");
  expect(res?.status()).toBe(404);
  await expect(page.locator("main").getByRole("link", { name: "Capabilities" })).toBeVisible();
});
