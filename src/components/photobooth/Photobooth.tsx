"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import Photobooth from ".";

export function PhotoboothDemo() {
  return (
    <div className="h-[55rem] w-full rounded-md flex md:items-center md:justify-center bg-whitecus dark:bg-black antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <Photobooth />
    </div>
  );
}
