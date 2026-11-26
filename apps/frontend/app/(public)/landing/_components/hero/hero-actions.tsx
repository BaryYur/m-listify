import Link from "next/link";

import { Button } from "@/components/ui";
import { pageRoutes } from "@/config";

const actionClassName = "h-auto rounded-xl px-5 py-3 text-base";

export const HeroActions = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button
        variant="mainBlue"
        nativeButton={false}
        render={<Link href={`/${pageRoutes.signUp}`} />}
        className={`${actionClassName} font-semibold`}
      >
        Create account
      </Button>

      <Button
        variant="outline"
        nativeButton={false}
        render={<Link href={pageRoutes.app.index} />}
        className={`${actionClassName} border-white/10 bg-zinc-900/60 font-semibold text-white backdrop-blur hover:bg-zinc-800/80 hover:text-white`}
      >
        Explore films
      </Button>
    </div>
  );
};
