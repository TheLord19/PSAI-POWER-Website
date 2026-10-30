import type { ReactNode } from "react";

// A fact awaiting confirmation from the firm (see list.md). Deliberately
// visible, so a missing registration number can never ship unnoticed.
export function Pending({ children = "pending" }: { children?: ReactNode }) {
  return <span className="pending">{children}</span>;
}
