import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ContactPage from "../app/contact-us/page";

describe("Contact page", () => {
  it("renders the heading and the required fields", () => {
    render(<ContactPage />);
    expect(screen.getByRole("heading", { level: 1, name: "Talk to an engineer" })).toBeTruthy();
    for (const label of ["Name", "Email", "Subject", "Message"]) {
      expect(screen.getByLabelText(label).hasAttribute("required")).toBe(true);
    }
  });

  it("asks how the visitor heard about the firm, optionally", () => {
    render(<ContactPage />);
    const select = screen.getByLabelText(/How did you hear about us/);
    expect(select.tagName).toBe("SELECT");
    expect(select.hasAttribute("required")).toBe(false);
  });

  it("shows the standard address and the team@ email", () => {
    const { container } = render(<ContactPage />);
    expect(container.textContent).toContain("Sudbury, ON P3A 2V5");
    expect(container.querySelector('a[href="mailto:team@psaipowerinc.ca"]')).toBeTruthy();
    expect(container.textContent).not.toContain("info@");
  });
});
