// Firm facts. Anything null renders as "pending" and is tracked in list.md —
// registration numbers and credentials are legal claims and must come from
// the founder, never from a guess.

export const FOUNDER = {
  name: "Prasad Shrawane",
  credential: "P.Eng.", // confirm designation and association — list.md
  role: "Founder and principal engineer",
  registration: null as string | null,
  photo: "/images/team/founder.jpg",
  quote:
    "IIT Delhi taught me the theory. Everything since has taught me the rest: the best work is judged by what never goes wrong, not by what gets noticed.",
  bio: null as string | null,
};

export type Credential = {
  body: string;
  label: string;
  number: string | null;
};

export const CREDENTIALS: Credential[] = [
  {
    body: "Professional Engineers Ontario",
    label: "Certificate of Authorization no.",
    number: null,
  },
  {
    body: "Engineers and Geoscientists BC",
    label: "Permit to Practice no.",
    number: null,
  },
  {
    body: "Engineers Geoscientists Manitoba",
    label: "Certificate of Authorization no.",
    number: null,
  },
  {
    body: "Workplace Safety and Insurance Board",
    label: "Account no.",
    number: null,
  },
  { body: "IEEE", label: "Member no.", number: null },
];

// The record. These four figures are carried over from the old site; the
// fourth replaces "Canada / Based in", which was not a figure.
export const RECORD = [
  { value: "75", unit: "+", label: "Projects delivered" },
  { value: "22", unit: "yrs", label: "In practice, since 2004" },
  { value: "150", unit: "MW", label: "Largest DER integration" },
  { value: "132", unit: "kV", label: "Highest transmission class" },
];

export const HOW_WE_WORK = [
  {
    title: "How a project starts",
    text: "Most projects start with a single-line diagram and a description of what is changing or failing. An engineer reviews it, asks for whatever is missing, and comes back with a scope, a fee and a schedule. If the study you asked for is not the one you need, we say so at this stage.",
  },
  {
    title: "Who you deal with",
    text: "The engineer who scopes the work is the engineer who does it, and the report is stamped by the licensed professional engineer who reviewed it. You have a direct line to that person for the length of the project.",
  },
  {
    title: "What you receive",
    text: "Every study ends with a stamped report that states its methodology, assumptions and source data, so another engineer could check it. Findings are ranked by consequence, and settings tables and drawings are formatted for the people who will use them in the field.",
  },
];

export const WHERE_WE_WORK = [
  { label: "Office", value: "Sudbury, Ontario" },
  { label: "Licensed in", value: "Ontario, British Columbia, Manitoba" },
  {
    label: "Project history",
    value: "Canada, the Caribbean, Latin America, Southeast Asia",
  },
];
