"use client";

import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";

import { Search } from "lucide-react";

export const SearchModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="flex h-10 cursor-pointer items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-zinc-400 transition-colors hover:bg-white/10 hover:text-zinc-200 md:w-36">
        <Search className="text-brand size-4" />
        <span className="hidden md:inline">Search films…</span>
      </DialogTrigger>
      <DialogContent className="top-8 min-w-75/100 translate-y-0 lg:min-w-200">
        <DialogHeader>
          <DialogTitle>Search film</DialogTitle>
          <DialogDescription>Type to search</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
