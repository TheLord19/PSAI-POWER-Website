// src/app/contact-us/page.tsx
import { CONTACT } from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";
import { ContactForm } from "./ContactForm";

export const metadata = pageMetadata({
  title: "Talk to an engineer",
  description: `Contact PSAI Power: ${CONTACT.ADDRESS.LINE1}, ${CONTACT.ADDRESS.LINE2}. ${CONTACT.EMAIL}, ${CONTACT.PHONE}.`,
  path: "/contact-us",
});

const WHAT_TO_SEND = [
  "The single-line diagram, if you have one",
  "What is changing, or what is failing",
  "Your schedule, and any hard dates",
  "The utility, if an interconnection is involved",
];

function Heading({ children }: { children: string }) {
  return (
    <h2 className="text-[1rem] font-semibold tracking-normal" style={{ fontStretch: "100%" }}>
      {children}
    </h2>
  );
}

export default function ContactPage() {
  return (
    <>
      <header className="wrap pb-10 pt-14 sm:pt-16">
        <h1>Talk to an engineer</h1>
        <p className="mt-4 max-w-[60ch] text-[1.125rem] leading-relaxed text-ink-2">
          Send the single-line diagram, or describe what is changing or
          failing. A licensed engineer reads every message and replies,
          usually within one business day.
        </p>
      </header>

      <div className="wrap pb-20">
        <div className="grid grid-cols-[minmax(0,1fr)] gap-12 border-t-[3px] border-tank pt-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
          <ContactForm />

          <aside className="space-y-8 text-[0.9375rem]">
            <div>
              <Heading>Office</Heading>
              <address className="mt-2 not-italic leading-relaxed">
                {CONTACT.ADDRESS.LINE1}
                <br />
                {CONTACT.ADDRESS.LINE2}
                <br />
                {CONTACT.ADDRESS.COUNTRY}
              </address>
              <a
                href={CONTACT.MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block"
              >
                Open in Google Maps
              </a>
            </div>

            <div>
              <Heading>Direct</Heading>
              <dl className="mt-2 border-t border-rule">
                <div className="flex justify-between gap-4 border-b border-rule py-2">
                  <dt className="text-ink-3">Email</dt>
                  <dd className="m-0">
                    <a href={`mailto:${CONTACT.EMAIL}`}>{CONTACT.EMAIL}</a>
                  </dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-rule py-2">
                  <dt className="text-ink-3">Phone</dt>
                  <dd className="m-0 tabular">
                    <a href={CONTACT.PHONE_HREF}>{CONTACT.PHONE}</a>
                  </dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-rule py-2">
                  <dt className="text-ink-3">LinkedIn</dt>
                  <dd className="m-0">
                    <a href={CONTACT.LINKEDIN} target="_blank" rel="noopener noreferrer">
                      psaipower
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <Heading>What to send</Heading>
              <ul className="checks mt-3">
                {WHAT_TO_SEND.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
