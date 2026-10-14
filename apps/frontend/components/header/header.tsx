import Link from "next/link";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui";
import { pageRoutes } from "@/config";

import { SearchModal } from "./search-modal";

import { LogIn } from "lucide-react";

export const Header = () => {
  const isLoggedIn = false;

  return (
    <header className="fixed top-0 left-0 w-full bg-white px-5 py-3 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link href={pageRoutes.app.index} className="hover:opacity-80">
          <Logo />
        </Link>

        <div className="flex items-center gap-4">
          <SearchModal />

          {isLoggedIn ? (
            <div>User profile button</div>
          ) : (
            <div>
              <Button size="lg" className="font-normal">
                <LogIn />
                Sign in | Registration
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
