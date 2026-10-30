import Link from "next/link";
import { CONTACT } from "@/lib/constants";

// Closing band on every page. "Talk to an engineer", not "Request a
// consultation": the first promises a person with a P.Eng., the second a
// sales call.
export function CtaBand({
  heading,
  text,
  id = "cta",
}: {
  heading: string;
  text: string;
  id?: string;
}) {
  return (
    <section aria-labelledby={`${id}-heading`} className="on-dark bg-tank text-white">
      <div className="wrap grid gap-8 py-14 sm:py-16 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <div>
          <h2 id={`${id}-heading`} className="max-w-[22ch] text-white">
            {heading}
          </h2>
          <p className="mt-4 max-w-[52ch] text-on-tank">{text}</p>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <Link href="/contact-us" className="btn btn-live">
            Talk to an engineer
          </Link>
          <p className="m-0 text-[0.9375rem] text-on-tank-2 tabular">
            <a href={`mailto:${CONTACT.EMAIL}`} className="text-on-tank">
              {CONTACT.EMAIL}
            </a>
            <span aria-hidden="true"> · </span>
            <a href={CONTACT.PHONE_HREF} className="text-on-tank">
              {CONTACT.PHONE}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
