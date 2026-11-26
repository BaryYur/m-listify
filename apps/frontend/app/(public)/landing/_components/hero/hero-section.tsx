import React from "react";

import { HeroActions } from "./hero-actions";
import { HeroBackground } from "./hero-background";
import { HeroBadge } from "./hero-badge";
import { HeroFeatures } from "./hero-features";
import { HeroTitle } from "./hero-title";
import { TrendingCard } from "./trending-card";
import type { TrendingItem } from "./types";

type HeroSectionProps = {
  trending: TrendingItem;
};

export const HeroSection: React.FC<HeroSectionProps> = ({ trending }) => {
  return (
    <section className="relative isolate min-h-screen">
      <HeroBackground src={trending.backdropUrl} alt={trending.title} />
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
        <div className="flex max-w-xl flex-col items-start gap-7">
          <HeroBadge />
          <HeroTitle />
          <HeroActions />
          <HeroFeatures />
        </div>

        <div className="mt-12 self-start lg:absolute lg:right-0 lg:bottom-10 lg:mt-0">
          <TrendingCard trending={trending} />
        </div>
      </div>
    </section>
  );
};
