import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import CareersPage from "../app/careers/page";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
      language: "en",
    },
  }),
}));

describe("Careers Page", () => {
  it("renders the hero and both openings", () => {
    render(<CareersPage />);
    expect(screen.getByText("careers-hero-title")).toBeTruthy();
    expect(screen.getByText("careers-eng-title")).toBeTruthy();
    expect(screen.getByText("careers-tech-title")).toBeTruthy();
  });

  it("renders the work-eligibility note", () => {
    render(<CareersPage />);
    expect(screen.getByText("careers-eligibility")).toBeTruthy();
  });

  it("links applications to the company email", () => {
    render(<CareersPage />);
    const links = screen
      .getAllByRole("link")
      .filter((a) => a.getAttribute("href")?.startsWith("mailto:"));
    expect(links.length).toBeGreaterThanOrEqual(2);
  });
});
