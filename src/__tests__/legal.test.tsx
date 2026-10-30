import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AccessibilityPage from "../app/accessibility/page";
import { ContactForm } from "../app/contact-us/ContactForm";
import PrivacyPolicyPage from "../app/privacy-policy/page";
import TermsOfServicePage from "../app/terms-of-service/page";
import { ORG } from "../lib/constants";

const PAGES = [
  ["Privacy policy", PrivacyPolicyPage],
  ["Terms of service", TermsOfServicePage],
  ["Accessibility", AccessibilityPage],
] as const;

describe.each(PAGES)("%s", (_name, Page) => {
  it("names the company by its registered legal name", () => {
    const { container } = render(<Page />);
    const text = container.textContent ?? "";
    expect(text).toContain(ORG.LEGAL_NAME);
    // The old policies named "PSAI Power Inc.", an entity that does not exist.
    expect(text).not.toMatch(/PSAI Power Inc\b/);
  });

  it("never shows an unresolved {placeholder}", () => {
    const { container } = render(<Page />);
    expect(container.textContent).not.toMatch(/\{\w+\}/);
  });
});

describe("Privacy policy", () => {
  it("renders the title and key sections", () => {
    render(<PrivacyPolicyPage />);
    expect(screen.getByRole("heading", { level: 1, name: "Privacy Policy" })).toBeTruthy();
    for (const name of [
      "Information We Collect",
      "Drawings and Confidential Material",
      "Who Else Handles Your Information",
      "Cookies",
      "Your Rights",
    ]) {
      expect(screen.getByRole("heading", { name })).toBeTruthy();
    }
  });

  // PIPEDA requires disclosing what is collected. When a field is added to the
  // contact form, this test fails until the policy mentions it.
  it("discloses every field the contact form collects", () => {
    const { container: form } = render(<ContactForm />);
    const fields = Array.from(form.querySelectorAll("input[name], select[name], textarea[name]"))
      .map((el) => el.getAttribute("name") as string)
      .filter((n) => n.charAt(0) !== "_");
    // Guard against a vacuous pass if the form stops rendering in tests.
    expect(fields.length).toBeGreaterThanOrEqual(5);
    const { container } = render(<PrivacyPolicyPage />);
    const policy = (container.textContent ?? "").toLowerCase();
    const disclosed: Record<string, string> = {
      name: "your name",
      email: "email address",
      subject: "a subject",
      message: "your message",
      referral: "how you heard about us",
    };
    for (const field of fields) {
      expect(disclosed[field], `form field "${field}" has no disclosure mapping`).toBeDefined();
      expect(policy).toContain(disclosed[field]);
    }
  });
});

describe("Terms of service", () => {
  it("renders the title and key sections", () => {
    render(<TermsOfServicePage />);
    expect(screen.getByRole("heading", { level: 1, name: "Terms of Service" })).toBeTruthy();
    for (const name of [
      "Information, Not Engineering Advice",
      "No Engineer–Client Relationship",
      "Limitation of Liability",
      "Governing Law",
    ]) {
      expect(screen.getByRole("heading", { name })).toBeTruthy();
    }
  });
});

describe("Accessibility", () => {
  it("states the standard and gives a way to ask for help", () => {
    render(<AccessibilityPage />);
    expect(screen.getByRole("heading", { level: 1, name: "Accessibility" })).toBeTruthy();
    expect(screen.getByText(/WCAG\) 2\.1, level AA/)).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Alternate Formats" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Feedback" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "team@psaipowerinc.ca" })).toBeTruthy();
  });
});
