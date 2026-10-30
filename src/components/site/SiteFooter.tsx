import Link from "next/link";
import type { ReactNode } from "react";
import { CONTACT, ORG } from "@/lib/constants";
import { capabilities } from "@/content/capabilities";
import { Logo } from "./Logo";

const FIRM_LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/sectors", label: "Sectors" },
  { href: "/firm", label: "The firm" },
  { href: "/firm#licensure", label: "Licensure" },
  { href: "/careers", label: "Careers" },
  { href: "/contact-us", label: "Contact" },
];

const linkClass = "text-on-tank hover:text-white";

function Column({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2
        className="mb-3.5 text-[0.9375rem] font-medium tracking-normal text-white"
        style={{ fontStretch: "100%" }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="on-dark bg-tank-deep text-[0.9375rem] text-[#9EAAB3]">
      <div className="wrap pb-7 pt-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" aria-label="PSAI Power, home" className="text-white hover:no-underline">
              <Logo id="ftr" tone="dark" />
            </Link>
            <p className="mt-4 max-w-[34ch] leading-relaxed">
              Power system engineering for utilities, mines, and renewable
              developers. Sudbury, Ontario.
            </p>
          </div>

          <Column title="Capabilities">
            <ul className="space-y-1.5">
              {capabilities.map((c) => (
                <li key={c.slug}>
                  <Link href={`/capabilities/${c.slug}`} className={linkClass}>
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Column>

          <Column title="Firm">
            <ul className="space-y-1.5">
              {FIRM_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Column>

          <Column title="Contact">
            <address className="space-y-1.5 not-italic">
              <p>{CONTACT.ADDRESS.LINE1}</p>
              <p>{CONTACT.ADDRESS.LINE2}</p>
              <p>{CONTACT.ADDRESS.COUNTRY}</p>
              <p className="pt-2">
                <a href={`mailto:${CONTACT.EMAIL}`} className={linkClass}>
                  {CONTACT.EMAIL}
                </a>
              </p>
              <p className="tabular">
                <a href={CONTACT.PHONE_HREF} className={linkClass}>
                  {CONTACT.PHONE}
                </a>
              </p>
            </address>
          </Column>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-5 text-[0.8125rem] text-[#8D99A3]">
          <span>
            © {new Date().getFullYear()} {ORG.LEGAL_NAME}
          </span>
          <Link href="/privacy-policy" className={linkClass}>
            Privacy policy
          </Link>
          <Link href="/terms-of-service" className={linkClass}>
            Terms of service
          </Link>
          <Link href="/accessibility" className={linkClass}>
            Accessibility
          </Link>
          <a
            href={CONTACT.LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
