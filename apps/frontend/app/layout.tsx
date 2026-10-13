import React from "react";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Changa_One, Inter, Poetsen_One } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const changa = Changa_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-changa-one",
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
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${changa.variable} ${poetsenOne.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
