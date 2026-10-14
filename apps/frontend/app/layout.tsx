import React from "react";

import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Poetsen_One } from "next/font/google";

import { Header } from "@/components/header/header";

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
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${poetsenOne.variable} h-full antialiased`}
    >
      <body className="bg-zinc-100 pt-20">
        <Header />
        {children}
      </body>
    </html>
  );
}
