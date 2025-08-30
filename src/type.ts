// File: types.ts

/**
 * A reusable, generic type for page props in the Next.js App Router.
 * - The generic <T> allows us to specify the exact shape of `params`,
 * making it flexible for any dynamic route (e.g., { id: string } or { sector: string }).
 */
export type PageProps<T extends Record<string, string> = {}> = {
  params: T;
  searchParams?: { [key: string]: string | string[] | undefined };
};