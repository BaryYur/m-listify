import { ReactNode } from "react";

import { Header } from "@/components/header";

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-100 pt-20">
      <Header />
      {children}
    </div>
  );
}
