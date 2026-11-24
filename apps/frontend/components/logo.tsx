import { TvMinimalPlay } from "lucide-react";

export const Logo = () => {
  return (
    <div className="relative">
      <span className="font-poetsen text-3xl font-medium text-zinc-800 select-none dark:text-zinc-100">
        Listify
      </span>
      <TvMinimalPlay className="absolute top-0 -right-4 size-4 text-blue-400" />
    </div>
  );
};
