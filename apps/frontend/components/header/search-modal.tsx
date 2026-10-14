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
      <DialogTrigger asChild>
        <Button size="lg" variant="secondary">
          <Search />
          Search
        </Button>
      </DialogTrigger>
      <DialogContent className="top-8 min-w-65/100 translate-y-0">
        <DialogHeader>
          <DialogTitle>Search film</DialogTitle>
          <DialogDescription>Type to search</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
