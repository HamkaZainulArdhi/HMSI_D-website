"use client";
import React from "react";
import Image from "next/image"; // ✅ Import Image
import { HoverBorderGradient } from "@/components/feedIG/moving-border";

export default function ProfileSection() {
  const galleryImages = [
    { id: 1, src: "/images/about/photo01.png", alt: "Gallery Image 1" },
    { id: 2, src: "/images/about/photo02.png", alt: "Gallery Image 2" },
    { id: 3, src: "/images/about/photo03.png", alt: "Gallery Image 3" },
    { id: 4, src: "/images/about/photo04.png", alt: "Gallery Image 4" },
    { id: 5, src: "/images/about/photo05.png", alt: "Gallery Image 5" },
    { id: 6, src: "/images/about/photo06.png", alt: "Gallery Image 6" },
    { id: 7, src: "/images/about/photo07.png", alt: "Gallery Image 7" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 bg-whitecus dark:bg-black transition-colors duration-500">
      <h1 className="text-slate-900 dark:text-white text-5xl font-bold mb-4">
        About us
      </h1>
      <p className="text-slate-600 dark:text-slate-300 text-center max-w-2xl mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
      </p>

      <HoverBorderGradient className="bg-slate-100 dark:bg-[#202020] border-slate-100 dark:border-slate-600">
        {/* Profile Header */}
        <div className="flex items-center justify-between p-7 ">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-slate-300 dark:bg-slate-200 rounded-xl mr-4"></div>
            <div>
              <h2 className="text-slate-800 dark:text-white text-xl font-medium">@sid7.23</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm italic">999M followers</p>
            </div>
          </div>
          <a href="#" className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            <span className="mr-1">+</span> Get in touch <span className="ml-1">+</span>
          </a>
        </div>

        <div className="p-6 px-20 w-full">
          {/* Gallery Grid - Top Row (4 images) */}
          <div className="grid grid-cols-4 gap-3 mb-3">
            {galleryImages.slice(0, 4).map((image) => (
              <div key={image.id} className="relative aspect-square bg-slate-300 dark:bg-slate-200 rounded-md overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Gallery Grid - Bottom Row (3 images centered) */}
          <div className="flex justify-center gap-3">
            {galleryImages.slice(4, 7).map((image) => (
              <div key={image.id} className="relative aspect-square w-[calc(25%-9px)] bg-slate-300 dark:bg-slate-200 rounded-md overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <p className="text-slate-600 dark:text-slate-300 text-center mt-8">
            Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
            libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>
      </HoverBorderGradient>
    </div>
  );
}
