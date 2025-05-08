"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "div",
  duration = 1,
  clockwise = true,
  rounded = "1rem",
  ...props
}: React.PropsWithChildren<{
  as?: React.ElementType;
  containerClassName?: string;
  className?: string;
  duration?: number;
  clockwise?: boolean;
  rounded?: string;
} & React.HTMLAttributes<HTMLElement>>) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (dir: Direction): Direction => {
    const dirs: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const idx = dirs.indexOf(dir);
    return clockwise
      ? dirs[(idx - 1 + dirs.length) % dirs.length]
      : dirs[(idx + 1) % dirs.length];
  };

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, white 0%, transparent 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, white 0%, transparent 100%)",
    BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, white 0%, transparent 100%)",
    RIGHT: "radial-gradient(16.2% 41.2% at 100% 50%, white 0%, transparent 100%)",
  };

  const highlight =
    "radial-gradient(75% 181% at 50% 50%, #f0f0f0 0%, rgba(255, 255, 255, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prev) => rotateDirection(prev));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative overflow-visible p-px transition duration-500",
        containerClassName
      )}
      style={{ borderRadius: rounded,
        // outline: "1px solid rgba(255, 255, 255, 0.4)"
       }}
      {...props}
    >
      {/* Layer Background Blur Border */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          borderRadius: rounded,
          filter: "blur(4px)",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration }}
      />

      {/* Background Layer */}
      <div
        className="absolute inset-[2px] z-1"
        style={{
          backgroundColor: "black",
          borderRadius: `calc(${rounded} - 2px)`,
          
        }}
      />

      {/* Children Content */}
      <div
        className={cn("relative z-10 text-white", className)}
        style={{ borderRadius: `calc(${rounded} - 2px)` }}
      >
        {children}
      </div>
    </Tag>
  );
}
