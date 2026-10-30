import { test, expect } from "@playwright/test";

// The EN/FR toggle is removed until French versions of the new content exist
// (list.md). A language switch that leads nowhere is worse than none. The
// French translation file is kept in src/locales/fr for that build.
test.describe("language", () => {
  test("pages are marked Canadian English", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("html")).toHaveAttribute("lang", "en-CA");
  });

  test("no language toggle is offered", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("button", { name: "FR", exact: true })).toHaveCount(0);
  });

  test("no hreflang alternate points at a French page that does not exist", async ({ request }) => {
    const html = await (await request.get("/")).text();
    expect(html).not.toMatch(/hreflang="fr/);
  });
});
