import Link from "next/link";

import { navItems } from "@/config";

export const HeaderNav = () => {
  return (
    <nav className="hidden items-center gap-1 lg:flex">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="rounded-lg px-3 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
