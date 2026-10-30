"use client";

import { useContactForm } from "@/hooks/useContactForm";
import { CONTACT } from "@/lib/constants";

// "How did you hear about us?" is the only way to learn where work actually
// comes from. Optional, and it goes to Formspree with the rest of the form.
const REFERRAL = [
  "Search engine",
  "Colleague or referral",
  "LinkedIn",
  "Utility or developer",
  "Existing client",
  "Other",
];

const control =
  "mt-1.5 w-full rounded-interactive border border-[#7D878E] bg-white px-3.5 py-2.5 text-base text-tank placeholder:text-ink-3";

function Label({ htmlFor, children, optional }: { htmlFor: string; children: string; optional?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="text-[0.9375rem] font-medium">
      {children}
      {optional && <span className="font-normal text-ink-3"> (optional)</span>}
    </label>
  );
}

function Field({
  id,
  label,
  type = "text",
  optional,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  optional?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <Label htmlFor={id} optional={optional}>
        {label}
      </Label>
      <input
        id={id}
        name={id}
        type={type}
        required={!optional}
        autoComplete={autoComplete}
        className={control}
      />
    </div>
  );
}

export function ContactForm() {
  const { formStatus, handleSubmit } = useContactForm();
  const sending = formStatus === "loading";

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" autoComplete="name" />
        <Field id="email" label="Email" type="email" autoComplete="email" />
      </div>
      {/* Organization and phone fields wait on a privacy policy update — list.md. */}
      <Field id="subject" label="Subject" />
      <div>
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={`${control} resize-y`}
          aria-describedby="message-hint"
        />
        <p id="message-hint" className="mt-1.5 text-[0.875rem] text-ink-3">
          Mention if you have a single-line diagram — we will ask for it by email.
        </p>
      </div>
      <div className="sm:max-w-[20rem]">
        <Label htmlFor="referral" optional>
          How did you hear about us?
        </Label>
        <select id="referral" name="referral" defaultValue="" className={control}>
          <option value="">Choose one</option>
          {REFERRAL.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div aria-live="polite">
        {formStatus === "success" && (
          <p className="border-l-[3px] border-live bg-white px-4 py-3 text-[0.9375rem]">
            Thank you. An engineer will reply, usually within one business day.
          </p>
        )}
        {formStatus === "error" && (
          <p className="border-l-[3px] border-fault bg-white px-4 py-3 text-[0.9375rem]">
            Your message did not send. Please email us directly at{" "}
            <a href={`mailto:${CONTACT.EMAIL}`}>{CONTACT.EMAIL}</a>.
          </p>
        )}
      </div>

      <div>
        <button type="submit" className="btn btn-tank" disabled={sending || formStatus === "success"}>
          {sending ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
