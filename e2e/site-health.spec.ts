import { test, expect } from "@playwright/test";
import { capabilities } from "../src/content/capabilities";

// What crawlers and link previews see: the raw server response, before any
// JavaScript runs.

function jsonLdBlocks(html: string) {
  const blocks: Record<string, unknown>[] = [];
  const re = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) blocks.push(JSON.parse(m[1]));
  return blocks;
}

test.describe("server-rendered HTML", () => {
  test("homepage has every capability description and no loading placeholder", async ({ request }) => {
    const html = await (await request.get("/")).text();
    expect(html).not.toContain("Loading...");
    for (const c of capabilities) expect(html).toContain(c.summary);
  });

  test("structured data describes the firm with the standard address", async ({ request }) => {
    const html = await (await request.get("/")).text();
    const org = jsonLdBlocks(html).find((b) => b["@type"] === "ProfessionalService") as
      | { email: string; address: { postalCode: string; addressRegion: string } }
      | undefined;
    expect(org).toBeDefined();
    expect(org!.email).toBe("team@psaipowerinc.ca");
    expect(org!.address.postalCode).toBe("P3A 2V5");
    expect(org!.address.addressRegion).toBe("ON");
  });

  test("capability pages carry Service structured data", async ({ request }) => {
    const html = await (await request.get("/capabilities/protection-and-control")).text();
    expect(jsonLdBlocks(html).some((b) => b["@type"] === "Service")).toBe(true);
  });

  test("pages declare their canonical URL", async ({ request }) => {
    const home = await (await request.get("/")).text();
    expect(home).toMatch(/<link rel="canonical" href="https:\/\/psaipowerinc\.ca\/?"/);
    for (const path of ["/capabilities/protection-and-control", "/firm", "/contact-us"]) {
      const html = await (await request.get(path)).text();
      expect(html).toContain(`<link rel="canonical" href="https://psaipowerinc.ca${path}"`);
    }
  });

  test("sitemap and robots are generated from the content", async ({ request }) => {
    const sitemap = await (await request.get("/sitemap.xml")).text();
    for (const c of capabilities) expect(sitemap).toContain(`/capabilities/${c.slug}`);
    expect(sitemap).not.toContain("/resources");
    expect(sitemap).not.toContain("/who-we-serve");
    const robots = await (await request.get("/robots.txt")).text();
    expect(robots).toContain("Sitemap: https://psaipowerinc.ca/sitemap.xml");
  });

  test("no page mentions the retired info@ address", async ({ request }) => {
    for (const path of ["/", "/contact-us", "/careers", "/privacy-policy", "/terms-of-service"]) {
      const html = await (await request.get(path)).text();
      expect(html, path).not.toContain("info@psaipowerinc.ca");
    }
  });
});
