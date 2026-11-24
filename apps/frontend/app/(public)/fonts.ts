import { Source_Sans_3 } from "next/font/google";

export const sourceSans = Source_Sans_3({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-source-sans-3",
  fallback: ["Arial", "sans-serif"],
});
