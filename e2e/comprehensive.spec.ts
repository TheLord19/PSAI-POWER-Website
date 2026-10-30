import { test, expect } from "@playwright/test";

const KEY_PAGES = [
  "/",
  "/capabilities/protection-and-control",
  "/capabilities/arc-flash-and-safety",
  "/capabilities/commissioning",
  "/projects",
  "/projects/caribbean-solar-interconnection",
  "/firm",
  "/contact-us",
  "/careers",
  "/privacy-policy",
  "/accessibility",
];

// Accessibility floor from the brief: responsive to 360px, visible keyboard
// focus, reduced motion respected.
test.describe("at 360px", () => {
  test.use({ viewport: { width: 360, height: 780 } });

  for (const path of KEY_PAGES) {
    test(`${path} does not scroll sideways`, async ({ page }) => {
      await page.goto(path);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow).toBeLessThanOrEqual(0);
    });
  }

  test("mobile menu opens and navigates", async ({ page }) => {
    await page.goto("/");
    const toggle = page.locator('button[aria-controls="mobile-nav"]');
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await page.locator("#mobile-nav").getByRole("link", { name: "Projects" }).click();
    await expect(page).toHaveURL(/\/projects$/);
    await expect(page.locator("#mobile-nav")).toBeHidden();
  });
});

test.describe("motion budget", () => {
  test("reduced motion shows the energized diagram without animating", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    const names = await page
      .locator("svg .energise")
      .evaluateAll((els) => els.map((e) => getComputedStyle(e).animationName));
    expect(names.length).toBeGreaterThan(0);
    expect(names.every((n) => n === "none")).toBe(true);
  });
});

test.describe("accessibility basics", () => {
  // The accessibility page promises that whatever has focus is always
  // outlined. Tab through the first stops on each key page and check the
  // browser draws a visible focus indicator on every one.
  for (const path of KEY_PAGES) {
    test(`${path}: keyboard focus is always visible`, async ({ page }) => {
      await page.goto(path);
      for (let i = 0; i < 8; i++) {
        await page.keyboard.press("Tab");
        const ring = await page.evaluate(() => {
          const el = document.activeElement as HTMLElement | null;
          if (!el || el === document.body) return null;
          const s = getComputedStyle(el);
          return {
            tag: el.tagName,
            text: (el.textContent || "").trim().slice(0, 40),
            outline: s.outlineStyle !== "none" && parseFloat(s.outlineWidth) > 0,
            shadow: s.boxShadow !== "none",
          };
        });
        if (!ring) continue;
        expect(ring.outline || ring.shadow, `no focus ring on <${ring.tag}> "${ring.text}"`).toBe(true);
      }
    });
  }

  test("skip link is the first stop for keyboard users", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  });

  for (const path of KEY_PAGES) {
    test(`${path}: images have alt text and no script errors`, async ({ page }) => {
      const errors: string[] = [];
      page.on("pageerror", (err) => errors.push(err.message));
      await page.goto(path);
      await page.waitForLoadState("load");
      await expect(page.locator("img:not([alt])")).toHaveCount(0);
      expect(errors).toHaveLength(0);
    });
  }
});
