import { pageRoutes } from "./pages";

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: pageRoutes.app.index },
  { label: "Movies", href: "/movies" },
  { label: "TV shows", href: "/tv-shows" },
  { label: "Anime", href: "/anime" },
  { label: "My lists", href: "/lists" },
];
