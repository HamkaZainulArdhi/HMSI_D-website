"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ScatteredImageGallery({ className }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false); // Tambahkan state ini

  useEffect(() => {
    setIsClient(true); // Set saat komponen dimount di client

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const images = [
    { src: "/images/heroimage/2.png", alt: "Image 1", className: "top-30 left-8 w-[190px] h-[230px] z-20", strength: 0.02 },
    { src: "/images/heroimage/7.png", alt: "Image 2", className: "top-40 right-0 w-[187px] h-[230px] z-10", strength: 0.05 },
    { src: "/images/heroimage/4.png", alt: "Image 3", className: "top-73 left-[58%] w-[250px] h-[180px] -translate-x-1/2 -translate-y-1/2 z-30", strength: 0.03 },
    { src: "/images/heroimage/3.png", alt: "Image 4", className: "bottom-32 left-70 w-[250px] h-[220px] z-10", strength: 0.01 },
    { src: "/images/heroimage/6.png", alt: "Image 5", className: "bottom-40 right-0 w-[290px] h-[170px] z-20", strength: 0.03 },
    { src: "/images/heroimage/5.png", alt: "Image 5", className: "bottom-10 right-100 w-[180px] h-[250px] z-20", strength: 0.025 },
    { src: "/images/heroimage/1.png", alt: "Image 5", className: "bottom-18 left-0 w-[200px] h-[170px] z-20", strength: 0.015 },
  ];

  if (!isClient) return null; // Hindari render di server

  return (
    <div className={cn("relative w-full h-full", className)}>
      <style jsx global>{`
        .cursor-follow-image {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
      `}</style>

      {images.map((img, index) => {
        const moveX = (mousePosition.x - window.innerWidth / 2) * img.strength;
        const moveY = (mousePosition.y - window.innerHeight / 2) * img.strength;

        return (
          <div
            key={index}
            className={cn(
              "absolute shadow-md bg-amber-50 rounded-sm overflow-hidden opacity-90 hover:opacity-100 cursor-follow-image",
              img.className
            )}
            style={{
              transform: `translate(${moveX}px, ${moveY}px)`,
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJdijYqwAAAAABJRU5ErkJggg=="
            />
          </div>
        );
      })}
    </div>
  );
}
