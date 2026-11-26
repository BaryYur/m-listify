import React from "react";

import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Poetsen_One,
  Source_Sans_3,
} from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-source-sans-3",
  fallback: ["Arial", "sans-serif"],
});

const poetsenOne = Poetsen_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poetsen-one",
});

export const metadata: Metadata = {
  title: "M-listify",
  description: "App for making lists of films",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sourceSans.variable} ${poetsenOne.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
