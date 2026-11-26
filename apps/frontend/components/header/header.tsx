import Link from "next/link";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui";
import { pageRoutes } from "@/config";

import { HeaderNav } from "./header-nav";
import { SearchModal } from "./search-modal";

export const Header = () => {
  const isLoggedIn = false;

  return (
    <header className="dark fixed top-0 left-0 z-20 w-full border-b border-white/5 bg-zinc-950 py-3">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6">
        <div className="flex items-center gap-10">
          <Link href={pageRoutes.app.index} className="hover:opacity-80">
            <Logo />
          </Link>
          <HeaderNav />
        </div>

        <div className="flex items-center gap-3">
          <SearchModal />

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
