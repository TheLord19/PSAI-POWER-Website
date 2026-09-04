import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import PrivacyPolicyPage from "../app/privacy-policy/page";
import TermsOfServicePage from "../app/terms-of-service/page";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
      language: "en",
    },
  }),
}));

describe("Privacy Policy Page", () => {
  it("renders the title and key sections", () => {
    render(<PrivacyPolicyPage />);
    expect(screen.getByText("pp-title")).toBeTruthy();
    expect(screen.getByText("pp-collect-title")).toBeTruthy();
    expect(screen.getByText("pp-rights-title")).toBeTruthy();
  });
});

describe("Terms of Service Page", () => {
  it("renders the title and key sections", () => {
    render(<TermsOfServicePage />);
    expect(screen.getByText("tos-title")).toBeTruthy();
    expect(screen.getByText("tos-liability-title")).toBeTruthy();
    expect(screen.getByText("tos-law-title")).toBeTruthy();
  });
});
