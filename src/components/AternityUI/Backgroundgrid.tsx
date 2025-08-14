import { cn } from "@/lib/utils";
import React from "react";
import "@/styles/index.css";
import ScatteredImageGallery from "@/components/ui/headergalery";

export default function GridBackground({ children }) {
  return (
    <div className="bg-whitecus relative flex h-[50rem] w-full items-center justify-center overflow-hidden dark:bg-black">
      {/* Background Container */}
      <div className="relative h-full w-full">
        {/* Grid pattern with masked oval shape */}
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#674635_1px,transparent_1px),linear-gradient(to_bottom,#674635_1px,transparent_1px)]",
          )}
          style={{
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          }}
        />

        <div
          className="bg-whitecus pointer-events-none absolute inset-0 dark:bg-black"
          style={{
            maskImage:
              "radial-gradient(ellipse at center, transparent 40%, black 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, transparent 40%, black 80%)",
          }}
        ></div>

        {/* Image Gallery */}

        {/* Text content */}
        <p
          style={{ fontFamily: "Playfair Display" }}
          className="absolute top-1/2 right-0 left-0 z-20 -translate-y-1/2 transform bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-center text-4xl font-bold text-transparent sm:text-7xl"
        >
          This is Where Our{" "}
          <span className="font-bold text-yellow-600 italic">
            Best <br />
            Moment
          </span>{" "}
          Begins
        </p>

        {/* Additional content */}
        {children}
      </div>
    </div>
  );
}
