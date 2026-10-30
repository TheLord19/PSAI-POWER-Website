import Link from "next/link";

const WHERE_TO = [
  { href: "/capabilities", label: "Capabilities" },
  { href: "/projects", label: "Projects" },
  { href: "/firm", label: "The firm" },
  { href: "/contact-us", label: "Talk to an engineer" },
];

export default function NotFound() {
  return (
    <div className="wrap pb-24 pt-16 sm:pt-20">
      <p className="text-[0.9375rem] text-ink-3 tabular">404</p>
      <h1 className="mt-2 max-w-[20ch]">Page not found</h1>
      <p className="mt-4 max-w-[56ch] text-[1.0625rem] leading-relaxed text-ink-2">
        The site was reorganized recently and some addresses changed. These
        are the pages most people are looking for.
      </p>
      <ul className="mt-8 max-w-[36rem] border-t border-rule">
        {WHERE_TO.map((l) => (
          <li key={l.href} className="border-b border-rule">
            <Link href={l.href} className="block py-3">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
