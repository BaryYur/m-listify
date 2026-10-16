"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";

import { Search } from "lucide-react";

export const SearchModal = () => {
  return (
    <Dialog>
      <DialogTrigger render={<Button size="lg" variant="secondary" />}>
        <Search />
        Search
      </DialogTrigger>
      <DialogContent className="top-8 min-w-75/100 translate-y-0 lg:min-w-[800px]">
        <DialogHeader>
          <DialogTitle>Search film</DialogTitle>
          <DialogDescription>Type to search</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
