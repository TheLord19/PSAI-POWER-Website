import { Archivo, Source_Serif_4 } from "next/font/google";

// Archivo carries the whole interface. The width axis is what makes the
// display type distinctive — do not drop it to save bytes.
export const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-archivo",
  preload: true,
});

// Serif is used only for capability and case study prose, and the founder's
// quote. Not preloaded — it never carries anything above the fold.
export const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-source-serif",
  preload: false,
});
