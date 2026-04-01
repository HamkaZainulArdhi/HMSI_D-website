"use client";
import { ImagesBadge } from "@/components/ui/images-badge";

export function ImagesBadgeDemo() {
  return (
    <div className="text-primary flex w-full items-center justify-center">
      <ImagesBadge
        text="Our Team of S1SI-07-D"
        images={[
          "https://assets.aceternity.com/pro/agenforce-1.webp",
          "https://assets.aceternity.com/pro/agenforce-2.webp",
          "https://assets.aceternity.com/pro/agenforce-3.webp",
        ]}
      />
    </div>
  );
}
