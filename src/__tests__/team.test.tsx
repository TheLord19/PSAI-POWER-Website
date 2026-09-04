import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import TeamPage from "../app/team/page";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
      language: "en",
    },
  }),
}));

describe("Team Page", () => {
  it("renders the heading", () => {
    render(<TeamPage />);
    expect(screen.getAllByText("Leadership").length).toBeGreaterThan(0);
  });
});
