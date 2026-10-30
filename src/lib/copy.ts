// English copy for the pages whose text still lives in the translation files
// (careers, contact, legal). Read on the server at build time, so no i18n
// runtime ships to the browser. The French file stays in the repo for a
// future /fr build — see list.md.
import en from "@/locales/en/translation.json";
import { CONTACT, ORG } from "@/lib/constants";

const dict = en as Record<string, string>;

// Legal text must name the company exactly once, in one place. Policies that
// name an entity which does not exist are worse than no policy at all, so the
// strings carry {legalName} and the value comes from constants.ts.
const TOKENS: Record<string, string> = {
  legalName: ORG.LEGAL_NAME,
  shortName: ORG.NAME,
  email: CONTACT.EMAIL,
};

export function copy(key: string): string {
  const value = dict[key];
  // Fail the build rather than render a raw key on a live page.
  if (value === undefined) throw new Error(`Missing copy key: ${key}`);
  return value.replace(/\{(\w+)\}/g, (whole, name: string) => {
    const token = TOKENS[name];
    // Likewise: an unresolved {placeholder} must never reach a visitor.
    if (token === undefined) throw new Error(`Unknown copy token ${whole} in ${key}`);
    return token;
  });
}
