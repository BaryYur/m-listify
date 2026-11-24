import React from "react";

import Link from "next/link";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui";
import { pageRoutes } from "@/config";

import { SearchModal } from "./search-modal";

type HeaderProps = {
  showSearch?: boolean;
};

export const Header: React.FC<HeaderProps> = ({ showSearch = true }) => {
  const isLoggedIn = false;

  return (
    <header className="dark fixed top-0 left-0 z-20 w-full border-b border-white/5 bg-zinc-950/70 py-3 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6">
        <Link href={pageRoutes.app.index} className="hover:opacity-80">
          <Logo />
        </Link>

        <div className="flex items-center gap-3">
          {showSearch && <SearchModal />}

          {isLoggedIn ? (
            <div>User profile button</div>
          ) : (
            <div className="flex items-center gap-2">
              <Button
                size="lg"
                variant="ghost"
                nativeButton={false}
                render={<Link href={`/${pageRoutes.signIn}`} />}
                className="px-3 text-white hover:bg-white/5 hover:text-white"
              >
                Log in
              </Button>

              <Button
                size="lg"
                nativeButton={false}
                render={<Link href={`/${pageRoutes.signUp}`} />}
                className="bg-brand hover:bg-brand-hover h-10 rounded-xl px-4 text-zinc-950"
              >
                Sign up
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
