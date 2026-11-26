import { CircleCheck, Heart, Lock, type LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  label: string;
};

const features: Feature[] = [
  { icon: CircleCheck, label: "Free, no ads" },
  { icon: Lock, label: "Private or public lists" },
  { icon: Heart, label: "Film data by TMDB" },
];

export const HeroFeatures = () => {
  return (
    <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-300">
      {features.map(({ icon: Icon, label }) => (
        <li key={label} className="flex items-center gap-2">
          <Icon className="text-brand size-4" />
          {label}
        </li>
      ))}
    </ul>
  );
};
