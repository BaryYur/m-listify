"use client";

import { ReactNode } from "react";

import { usePathname } from "next/navigation";

import { Header } from "@/components/header";
import { pageRoutes } from "@/config";
import { cn } from "@/lib/utils";

export default function PublicLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isLanding = pathname === `/${pageRoutes.landing}`;

  return (
    <div
      className={cn(
        "min-h-screen",
        isLanding ? "dark text-foreground bg-zinc-950" : "bg-zinc-100 pt-20",
      )}
    >
      <Header />
      {children}
    </div>
  );
}
