import { Badge } from "@/components/ui";

export const HeroBadge = () => {
  return (
    <Badge
      variant="outline"
      className="h-7 gap-2 border-white/15 bg-white/5 px-3 text-xs font-normal text-zinc-200 backdrop-blur"
    >
      <span className="bg-brand size-1.5 rounded-full" />
      Films · TV shows · Anime
    </Badge>
  );
};
