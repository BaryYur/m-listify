"use client";

import { ReactNode } from "react";

import { usePathname } from "next/navigation";

import { Header } from "@/components/header";
import { pageRoutes } from "@/config";
import { cn } from "@/lib/utils";

import { sourceSans } from "./fonts";

export default function PublicLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isLanding = pathname === pageRoutes.app.index;

  return (
    <div
      className={cn(
        "min-h-screen",
        isLanding
          ? `${sourceSans.variable} dark text-foreground font-source-sans bg-zinc-950`
          : "bg-zinc-100 pt-20",
      )}
    >
      <Header showSearch={!isLanding} />
      {children}
    </div>
  );
}
