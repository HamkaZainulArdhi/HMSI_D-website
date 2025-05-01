"use client";
import { useRef, useEffect } from "react";
import { App } from "@/components/gallerycircular/classes/index";
import type { GalleryItem } from "./utils";

interface CircularGalleryProps {
  items?: GalleryItem[];
  bend?: number;
  textColor?: string;
  borderRadius?: number;
  font?: string;
}

/**
 * CircularGallery Component
 * 
 * A WebGL-powered gallery with curved/circular carousel effect.
 * 
 * @param {GalleryItem[]} [props.items] - Array of image items with text captions
 * @param {number} [props.bend=2] - How much the gallery should curve (0 = flat, higher values = more curve)
 * @param {string} [props.textColor="#ffffff"] - Color of the text captions
 * @param {number} [props.borderRadius=0.05] - Border radius for the images (0-0.5)
 * @param {string} [props.font="bold 30px DM Sans"] - Font for text captions
 */
export default function CircularGallery({
  items,
  bend = 2,
  textColor = "#ffffff",
  borderRadius = 0.05,
  font = "bold 30px DM Sans",
}: CircularGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Initialize the WebGL gallery
    const app = new App(containerRef.current, {
      items,
      bend,
      textColor,
      borderRadius,
      font,
    });
    
    // Clean up on unmount
    return () => {
      app.destroy();
    };
  }, [items, bend, textColor, borderRadius, font]);
  
  return (
    <div
      className="border-2 border-white h-[400px] w-full cursor-grab overflow-hidden active:cursor-grabbing"
      ref={containerRef}
    />
  );
}