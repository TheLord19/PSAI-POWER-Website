import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import WhoWeServePage from "../app/who-we-serve/page";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
      language: "en",
    },
  }),
}));

describe("Who We Serve Page", () => {
  it("renders the heading", () => {
    render(<WhoWeServePage />);
    expect(screen.getByText("wws-hero-title")).toBeDefined();
  });
});
