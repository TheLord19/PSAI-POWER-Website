import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ContactPage from "../app/contact-us/page";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
      language: "en",
    },
  }),
}));

describe("Contact Page", () => {
  it("renders the contact heading", () => {
    render(<ContactPage />);
    expect(screen.getByText("contact-hero-title")).toBeDefined();
  });
});
