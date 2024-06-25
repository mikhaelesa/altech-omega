import { Plus_Jakarta_Sans } from "next/font/google";

export const fontWeight = ["400", "500", "600", "700"] as const;

export const plusJakartaSans = Plus_Jakarta_Sans({
  adjustFontFallback: true,
  display: "swap",
  fallback: ["sans-serif"],
  preload: true,
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--plusJakartaSans",
  weight: ["400", "500", "600", "700"],
});
