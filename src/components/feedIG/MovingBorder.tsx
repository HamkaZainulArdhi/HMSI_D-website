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
    <div className="bg-whitecus flex flex-col items-center justify-center px-4 py-12 transition-colors duration-500 sm:px-16 lg:min-h-screen dark:bg-black">
      <h1
        style={{ fontFamily: "Playfair Display" }}
        className="mb-4 text-5xl font-bold text-slate-900 dark:text-white"
      >
        About us
      </h1>
      <p className="mb-8 max-w-2xl text-center text-slate-600 dark:text-slate-300">
        We’re a team of future changemakers. or at least that’s what we told the
        lecturers. Some came for the knowledge… the rest just to get attendance
      </p>

      <HoverBorderGradient className="border-slate-100 bg-slate-100 dark:border-slate-600 dark:bg-[#202020]">
        {/* Profile Header */}
        <div className="flex items-center justify-between p-7">
          <div className="flex items-center">
            <div className="relative mr-4 h-16 w-16 overflow-hidden rounded-xl bg-slate-300 dark:bg-slate-200">
              <Image
                src="/images/about/pp.png"
                alt="Profile Image"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl font-medium text-slate-800 dark:text-white">
                @sid7.23
              </h2>
              <p className="text-sm text-slate-500 italic dark:text-slate-400">
                99M followers
              </p>
            </div>
          </div>
          <a
            href="https://www.instagram.com/sid7.23?igsh=M2RkMDh3OHB4dTJr"
            className="ml-2 inline-flex transform items-center justify-center rounded-lg border border-black bg-transparent py-2 text-xs font-bold text-black shadow-[0_0_0_3px_#000000_inset] transition duration-300 hover:-translate-y-1 sm:px-6 sm:py-2 sm:text-base dark:border-white dark:text-white"
          >
            <span className="mx-1">+</span> Get in touch{" "}
            <span className="mx-1">+</span>
          </a>
        </div>

        <div className="-px-30 p-6 sm:px-20">
          {/* Gallery Grid - Top Row (4 images) */}
          <div className="mb-3 grid grid-cols-4 gap-3">
            {galleryImages.slice(0, 4).map((image) => (
              <div
                key={image.id}
                className="relative aspect-square overflow-hidden rounded-md bg-slate-300 dark:bg-slate-200"
              >
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
              <div
                key={image.id}
                className="relative aspect-square w-[calc(25%-9px)] overflow-hidden rounded-md bg-slate-300 dark:bg-slate-200"
              >
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
          <p className="mt-8 text-center text-xs text-slate-600 sm:text-base dark:text-slate-300">
            We’re a team of future changemakers. or at least that’s what we told
            the lecturers. Some came for the knowledge… the rest just to get
            attendance
          </p>
        </div>
      </HoverBorderGradient>
    </div>
  );
}
