import Link from "next/link";
import type { ReactNode } from "react";

type Meta = { label: string; value: ReactNode };
type Crumb = { href: string; label: string };

// Page header for capability, project and firm pages. The metadata strip is
// the drawing title-block convention: the reader gets voltage class,
// standards and schedule before any prose.
export function TitleBlock({
  title,
  sub,
  meta,
  trail,
}: {
  title: string;
  sub?: ReactNode;
  meta?: Meta[];
  trail?: Crumb[];
}) {
  return (
    <header className="on-dark bg-tank text-porcelain">
      <div className="wrap pt-10 sm:pt-14">
        {trail && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-x-2 text-[0.875rem] text-on-tank-2">
              {trail.map((c) => (
                <li key={c.href} className="flex items-center gap-2">
                  <Link href={c.href} className="text-on-tank hover:text-white">
                    {c.label}
                  </Link>
                  <span aria-hidden="true">/</span>
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="max-w-[22ch] text-white">{title}</h1>
        {sub && (
          <p className="mt-4 max-w-[60ch] text-[1.0625rem] leading-relaxed text-on-tank">
            {sub}
          </p>
        )}
        {meta && meta.length > 0 ? (
          <dl className="mt-10 grid grid-cols-2 border-t border-tank-rule sm:grid-cols-[repeat(auto-fit,minmax(10rem,1fr))]">
            {meta.map((m) => (
              <div
                key={m.label}
                className="border-b border-tank-rule py-4 pr-4 sm:border-b-0 sm:border-r sm:pl-4 sm:first:pl-0 sm:last:border-r-0"
              >
                <dt className="text-[0.8125rem] text-on-tank-2">{m.label}</dt>
                <dd className="mt-0.5 font-medium tabular text-white">{m.value}</dd>
              </div>
            ))}
          </dl>
        ) : (
          <div className="pb-12" />
        )}
      </div>
    </header>
  );
}
