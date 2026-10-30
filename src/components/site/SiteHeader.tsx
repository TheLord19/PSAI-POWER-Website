import Link from "next/link";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";

// Capabilities · Projects · Sectors · Firm, plus the one CTA. Careers and
// the legal pages live in the footer; Licenses folded into Firm.
export const NAV = [
  { href: "/capabilities", label: "Capabilities" },
  { href: "/projects", label: "Projects" },
  { href: "/sectors", label: "Sectors" },
  { href: "/firm", label: "Firm" },
];

export function SiteHeader() {
  return (
    <header className="relative border-b border-rule bg-porcelain">
      <div className="wrap flex h-[72px] items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="PSAI Power, home"
          className="text-tank hover:no-underline"
        >
          <Logo id="hdr" />
        </Link>
        <NavLinks items={NAV} />
      </div>
    </header>
  );
}
