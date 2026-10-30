import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProjectsPage from "../app/projects/page";
import { SiteFooter } from "../components/site/SiteFooter";
import { CapabilityView } from "../components/views/CapabilityView";
import { ProjectView } from "../components/views/ProjectView";
import { capabilities, headingsFor } from "../content/capabilities";
import { projects } from "../content/projects";

describe("capability pages", () => {
  for (const c of capabilities) {
    it(`${c.slug} renders the fixed section order`, () => {
      render(<CapabilityView capability={c} />);
      expect(screen.getByRole("heading", { level: 1, name: c.heading })).toBeTruthy();
      const h = headingsFor(c);
      [h.answers, h.when, h.involves, h.receive, h.goesWrong].forEach((name) =>
        expect(screen.getByRole("heading", { level: 2, name })).toBeTruthy(),
      );
    });
  }
});

describe("project pages", () => {
  it("shows unconfirmed facts as pending instead of guessing", () => {
    const p = projects.find((x) => x.year === null);
    expect(p).toBeDefined();
    render(<ProjectView project={p!} />);
    expect(screen.getAllByText("pending").length).toBeGreaterThan(0);
  });

  it("filters the archive and disables empty filters", () => {
    render(<ProjectsPage />);
    const rows = () => screen.getAllByRole("heading", { level: 2 });
    expect(rows()).toHaveLength(projects.length);
    fireEvent.click(screen.getByRole("button", { name: /^Mining/ }));
    expect(rows()).toHaveLength(projects.filter((p) => p.sector === "Mining").length);
    expect((screen.getByRole("button", { name: /^Industrial/ }) as HTMLButtonElement).disabled).toBe(
      true,
    );
  });
});

describe("site footer", () => {
  // Regression: the old footer printed each legal link twice.
  it("lists each legal link once", () => {
    render(<SiteFooter />);
    expect(screen.getAllByRole("link", { name: /privacy policy/i })).toHaveLength(1);
    expect(screen.getAllByRole("link", { name: /terms of service/i })).toHaveLength(1);
  });

  it("shows the address with the province", () => {
    const { container } = render(<SiteFooter />);
    expect(container.textContent).toContain("Sudbury, ON P3A 2V5");
  });
});
