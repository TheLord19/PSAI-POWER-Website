import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CareersPage from "../app/careers/page";

describe("Careers page", () => {
  it("renders both openings from the translation file", () => {
    render(<CareersPage />);
    expect(
      screen.getByRole("heading", { level: 2, name: /Intermediate Electrical Engineer/ }),
    ).toBeTruthy();
    expect(
      screen.getByRole("heading", { level: 2, name: /Electrical Field Technician/ }),
    ).toBeTruthy();
  });

  it("renders the work-eligibility note", () => {
    render(<CareersPage />);
    expect(screen.getByText(/legally entitled to work in Canada/)).toBeTruthy();
  });

  it("sends applications to team@psaipowerinc.ca", () => {
    render(<CareersPage />);
    const mailtos = screen
      .getAllByRole("link")
      .filter((a) => a.getAttribute("href")?.startsWith("mailto:"));
    expect(mailtos.length).toBeGreaterThanOrEqual(2);
    mailtos.forEach((a) =>
      expect(a.getAttribute("href")).toMatch(/^mailto:team@psaipowerinc\.ca/),
    );
  });

  it("emits JobPosting structured data for each opening", () => {
    const { container } = render(<CareersPage />);
    const blocks = Array.from(
      container.querySelectorAll('script[type="application/ld+json"]'),
    ).map((s) => JSON.parse(s.innerHTML));
    expect(blocks.filter((b) => b["@type"] === "JobPosting")).toHaveLength(2);
  });
});
