"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type Item = { href: string; label: string };

// Client-side for two things only: marking the current section, and the
// mobile menu toggle. No animation — the motion budget belongs to the hero.
export function NavLinks({ items }: { items: Item[] }) {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const current = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`) ? "page" : undefined;
  const close = () => setOpen(false);

  return (
    <>
      <nav aria-label="Main" className="hidden md:block">
        <ul className="flex items-center gap-7 text-[0.95rem]">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={current(item.href)}
                className="border-b-2 border-transparent py-1.5 text-tank hover:border-rule hover:no-underline aria-[current=page]:border-live"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact-us"
              aria-current={current("/contact-us")}
              className="btn btn-ghost px-4 py-2 text-[0.95rem]"
            >
              Talk to an engineer
            </Link>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        className="btn btn-ghost px-3.5 py-2 text-[0.95rem] md:hidden"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "Close" : "Menu"}
      </button>

      <nav
        id="mobile-nav"
        aria-label="Main"
        hidden={!open}
        className="absolute inset-x-0 top-full z-40 border-b border-rule bg-porcelain md:hidden"
      >
        <ul className="wrap pb-5 pt-1">
          {items.map((item) => (
            <li key={item.href} className="border-b border-rule">
              <Link
                href={item.href}
                onClick={close}
                aria-current={current(item.href)}
                className="block py-3.5 text-[1.0625rem] text-tank hover:no-underline aria-[current=page]:font-semibold"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-5">
            <Link href="/contact-us" onClick={close} className="btn btn-live w-full">
              Talk to an engineer
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
