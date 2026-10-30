import { test, expect } from "@playwright/test";
import { projects } from "../src/content/projects";

test.describe("navigation", () => {
  test("main nav reaches each section and marks it current", async ({ page }) => {
    await page.goto("/");
    const sections: [string, string][] = [
      ["Capabilities", "/capabilities"],
      ["Projects", "/projects"],
      ["Sectors", "/sectors"],
      ["Firm", "/firm"],
    ];
    for (const [label, path] of sections) {
      const nav = page.getByRole("navigation", { name: "Main" });
      await nav.getByRole("link", { name: label, exact: true }).click();
      await expect(page).toHaveURL(new RegExp(`${path}$`));
      await expect(
        page.getByRole("navigation", { name: "Main" }).getByRole("link", { name: label, exact: true }),
      ).toHaveAttribute("aria-current", "page");
    }
  });

  test("header CTA goes to the contact page", async ({ page }) => {
    await page.goto("/");
    await page
      .getByRole("navigation", { name: "Main" })
      .getByRole("link", { name: "Talk to an engineer" })
      .click();
    await expect(page).toHaveURL(/\/contact-us$/);
  });
});

// Every retired URL must 301/308 to its replacement, or rankings and inbound
// links are lost.
const REDIRECTS: [string, string][] = [
  ["/services", "/capabilities"],
  ["/services/electrical-protection", "/capabilities/protection-and-control"],
  ["/services/system-analysis", "/capabilities/power-system-studies"],
  ["/services/renewable-integration", "/capabilities/renewable-interconnection"],
  ["/services/power-system-design", "/capabilities/substation-design"],
  ["/who-we-serve", "/sectors"],
  ["/who-we-serve/mining-industry", "/sectors/mining"],
  ["/who-we-serve/oil-gas", "/sectors"],
  ["/about", "/firm"],
  ["/licenses", "/firm"],
  ["/team", "/firm"],
  ["/resources", "/capabilities"],
  ["/resources/case-studies", "/capabilities"],
  ["/contact", "/contact-us"],
];

test.describe("retired URLs redirect permanently", () => {
  for (const [from, to] of REDIRECTS) {
    test(`${from} → ${to}`, async ({ request }) => {
      const res = await request.get(from, { maxRedirects: 0 });
      expect(res.status()).toBe(308);
      expect(new URL(res.headers()["location"], "http://localhost").pathname).toBe(to);
    });
  }
});

test.describe("interactions", () => {
  test("hero fault demo switches outcome", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("1 of 3")).toBeVisible();
    const without = page.getByRole("button", { name: "Without a coordination study" });
    await without.click();
    await expect(without).toHaveAttribute("aria-pressed", "true");
    await expect(page.getByText("3 of 3")).toBeVisible();
  });

  test("project archive filters by sector", async ({ page }) => {
    await page.goto("/projects");
    const total = projects.length;
    const mining = projects.filter((p) => p.sector === "Mining").length;
    await expect(page.getByText(`Showing ${total} of ${total}`)).toBeVisible();
    await page.getByRole("button", { name: /^Mining/ }).click();
    await expect(page.getByText(`Showing ${mining} of ${total}`)).toBeVisible();
  });

  test("contact form has the required fields and the referral question", async ({ page }) => {
    await page.goto("/contact-us");
    for (const name of ["name", "email", "subject", "message"]) {
      await expect(page.locator(`[name="${name}"]`)).toHaveAttribute("required", "");
    }
    await expect(page.locator('select[name="referral"]')).toBeVisible();
    await expect(page.locator('main a[href="mailto:team@psaipowerinc.ca"]').first()).toBeVisible();
    await expect(page.locator('main a[href="tel:+17059706244"]').first()).toBeVisible();
  });

  test("footer lists each legal link once, with the full address", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    await expect(footer.getByRole("link", { name: /privacy policy/i })).toHaveCount(1);
    await expect(footer.getByRole("link", { name: /terms of service/i })).toHaveCount(1);
    await expect(footer).toContainText("Sudbury, ON P3A 2V5");
  });
});
