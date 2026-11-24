import React from "react";

import Link from "next/link";

import { Button, Card } from "@/components/ui";
import { pageRoutes } from "@/config";

import type { TrendingItem } from "./types";

import { Plus, Star } from "lucide-react";

type TrendingCardProps = {
  trending: TrendingItem;
};

export const TrendingCard: React.FC<TrendingCardProps> = ({ trending }) => {
  return (
    <Card className="max-w-full flex-row items-center gap-4 rounded-2xl bg-zinc-950/80 px-4 py-2.5 ring-white/10 backdrop-blur-md sm:gap-8">
      <div className="flex min-w-0 flex-col gap-1">
        <span className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">
          Now trending
        </span>

        <div className="flex min-w-0 items-baseline gap-3 whitespace-nowrap">
          <span className="truncate text-sm font-semibold text-white">
            {trending.title}
          </span>
          <span className="shrink-0 text-zinc-500">{trending.year}</span>
          <span className="flex shrink-0 items-center gap-1.5 self-center font-medium text-white">
            <Star className="size-3.5 fill-yellow-400 text-yellow-400" />
            {trending.rating}
          </span>
        </div>
      </div>

      <Button
        size="lg"
        nativeButton={false}
        render={<Link href={`/${pageRoutes.signUp}`} />}
        className="bg-brand hover:bg-brand-hover h-10 shrink-0 rounded-xl px-4 text-zinc-950"
      >
        <Plus />
        Add to list
      </Button>
    </Card>
  );
};
