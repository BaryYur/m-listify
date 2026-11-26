import React from "react";

import Image from "next/image";

type HeroBackgroundProps = {
  src: string;
  alt: string;
};

export const HeroBackground: React.FC<HeroBackgroundProps> = ({ src, alt }) => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        preload
        sizes="100vw"
        className="object-cover object-[center_35%]"
      />

      <div className="absolute inset-0 bg-linear-to-r from-zinc-950/85 via-zinc-950/35 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-b from-zinc-950/40 via-transparent to-zinc-950" />
    </div>
  );
};
