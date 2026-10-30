"use client";

import Link from "next/link";
import { useEffect } from "react";
import { CONTACT } from "@/lib/constants";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="wrap pb-24 pt-16 sm:pt-20">
      <h1 className="max-w-[22ch]">Something went wrong on our side.</h1>
      <p className="mt-4 max-w-[56ch] text-[1.0625rem] leading-relaxed text-ink-2">
        Try again, or email <a href={`mailto:${CONTACT.EMAIL}`}>{CONTACT.EMAIL}</a> and
        an engineer will reply directly.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <button type="button" onClick={() => reset()} className="btn btn-tank">
          Try again
        </button>
        <Link href="/" className="btn btn-ghost">
          Home
        </Link>
      </div>
    </div>
  );
}
