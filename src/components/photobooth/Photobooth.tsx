"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import Photobooth from ".";

export function PhotoboothDemo() {
  return (
    <div className="bg-whitecus bg-grid-white/[0.02] relative flex h-full w-full overflow-hidden rounded-md antialiased md:items-center md:justify-start dark:bg-black">
      <Spotlight />
      <Photobooth />
    </div>
  );
}
