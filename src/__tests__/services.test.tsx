import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ServicesPage from "../app/services/page";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
      language: "en",
    },
  }),
}));

describe("Services Page", () => {
  it("renders the services heading", () => {
    render(<ServicesPage />);
    expect(screen.getByText("services-hero-title")).toBeDefined();
  });
});
