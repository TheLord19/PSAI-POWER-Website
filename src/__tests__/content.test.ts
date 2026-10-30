import { describe, expect, it } from "vitest";
import { capabilities } from "../content/capabilities";
import { projects } from "../content/projects";
import { sectors } from "../content/sectors";
import { CONTACT, FORMSPREE_ENDPOINT } from "../lib/constants";
import en from "../locales/en/translation.json";
import fr from "../locales/fr/translation.json";

const capSlugs = new Set(capabilities.map((c) => c.slug));
const projSlugs = new Set(projects.map((p) => p.slug));

describe("content integrity", () => {
  it("has unique slugs", () => {
    expect(capSlugs.size).toBe(capabilities.length);
    expect(projSlugs.size).toBe(projects.length);
    expect(new Set(sectors.map((s) => s.slug)).size).toBe(sectors.length);
  });

  it("only cross-links to pages that exist", () => {
    for (const c of capabilities) {
      c.relatedCapabilities.forEach((s) => expect(capSlugs.has(s), `${c.slug} → ${s}`).toBe(true));
      c.relatedProjects.forEach((s) => expect(projSlugs.has(s), `${c.slug} → ${s}`).toBe(true));
    }
    for (const p of projects) {
      p.capabilities.forEach((s) => expect(capSlugs.has(s), `${p.slug} → ${s}`).toBe(true));
    }
    for (const s of sectors) {
      s.capabilities.forEach((c) => expect(capSlugs.has(c), `${s.slug} → ${c}`).toBe(true));
      s.projects.forEach((p) => expect(projSlugs.has(p), `${s.slug} → ${p}`).toBe(true));
    }
  });

  it("fills every section of every capability page", () => {
    for (const c of capabilities) {
      expect(c.answers.length, c.slug).toBeGreaterThan(0);
      expect(c.when.length, c.slug).toBeGreaterThan(0);
      expect(c.involves.length, c.slug).toBeGreaterThan(0);
      expect(c.receive.length, c.slug).toBeGreaterThan(0);
      expect(c.goesWrong.length, c.slug).toBeGreaterThan(0);
      expect(c.figure.caption.length, c.slug).toBeGreaterThan(0);
      expect(c.metaDescription.length, c.slug).toBeLessThanOrEqual(160);
    }
  });

  // Copy rules from the brief: unverifiable marketing language is out.
  it("avoids the banned marketing words", () => {
    const text = JSON.stringify({ capabilities, projects, sectors });
    expect(text).not.toMatch(
      /innovative|cutting-edge|solutions-driven|world-class|trusted global leader|hundreds of satisfied/i,
    );
  });
});

describe("contact details", () => {
  it("uses team@psaipowerinc.ca everywhere", () => {
    expect(CONTACT.EMAIL).toBe("team@psaipowerinc.ca");
    expect(FORMSPREE_ENDPOINT).toContain("team@psaipowerinc.ca");
    expect(JSON.stringify(en)).not.toContain("info@");
    expect(JSON.stringify(fr)).not.toContain("info@");
  });

  it("uses one address string, with the province", () => {
    expect(CONTACT.ADDRESS.LINE2).toBe("Sudbury, ON P3A 2V5");
  });
});
