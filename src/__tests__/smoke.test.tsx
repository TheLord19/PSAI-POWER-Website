import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "../app/page";
import { capabilities } from "../content/capabilities";

describe("Home page", () => {
  it("renders a single h1 with the headline", () => {
    render(<Home />);
    const h1 = screen.getAllByRole("heading", { level: 1 });
    expect(h1).toHaveLength(1);
    expect(h1[0].textContent).toMatch(/nothing happens/);
  });

  // Regression: the old homepage only rendered one of six service
  // descriptions server-side; the rest existed only in a hover state.
  it("renders every capability summary in the DOM", () => {
    render(<Home />);
    for (const c of capabilities) {
      expect(screen.getByText(c.summary)).toBeTruthy();
    }
  });

  it("uses the engineer CTA and none of the retired claims", () => {
    const { container } = render(<Home />);
    expect(screen.getAllByRole("link", { name: "Talk to an engineer" }).length).toBeGreaterThan(0);
    expect(container.textContent).not.toMatch(
      /hundreds of satisfied clients|request a consultation|loading\.\.\./i,
    );
  });

  it("toggles the fault demo between coordinated and uncoordinated", () => {
    render(<Home />);
    expect(screen.getByText("1 of 3")).toBeTruthy();
    const without = screen.getByRole("button", { name: /Without a coordination study/ });
    fireEvent.click(without);
    expect(without.getAttribute("aria-pressed")).toBe("true");
    expect(screen.getByText("3 of 3")).toBeTruthy();
    expect(screen.getByText(/Every feeder on the bus goes dark/)).toBeTruthy();
  });
});
