import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutPage from "../app/about/page";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
      language: "en",
    },
  }),
}));

describe("About Page", () => {
  it("renders the about heading", () => {
    render(<AboutPage />);
    expect(screen.getByText("about-hero-title")).toBeDefined();
  });
});
