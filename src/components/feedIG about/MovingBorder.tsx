"use client";
import React from "react";
import Image from "next/image"; 
import { HoverBorderGradient } from "@/components/feedIG/moving-border";

export default function ProfileSectionAbout() {
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
    <div className="lg:min-h-screen  flex flex-col items-center justify-center py-12 px-4 sm:px-16 bg-whitecus dark:bg-black transition-colors duration-500 mt-15">
      <h1 style={{ fontFamily: "Playfair Display" }} className="text-slate-900 dark:text-white text-5xl font-bold mb-4">
        About us
      </h1>
      <div className="flex items-start  max-w-7xl">
      <Image
        src="/images/about/glint.png"
        alt="Profile Image"
        width={100}
        height={100}
        className="-mt-3  "
      />
      <p className="ml-auto text-justify text-[18px] text-slate-600 dark:text-slate-300  max-w-5xl">
        Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis kita harus kompak dalam segala aspek perkuliahan 4 tahun kita harus lulus semua amiien.
      </p>
      </div>
      <p className="text-slate-600  text-justify text-[18px] dark:text-slate-300  e  mb-8">
      Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu temanan.
      </p>

      <HoverBorderGradient className="bg-slate-100 dark:bg-[#202020] border-slate-100 dark:border-slate-600">
        {/* Profile Header */}
        <div className="flex items-center justify-between p-7 ">
          <div className="flex items-center">
            <div className="relative w-16 h-16 bg-slate-300 dark:bg-slate-200 rounded-xl mr-4 overflow-hidden">
              <Image
                src="/images/about/pp.png"
                alt="Profile Image"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-slate-800 dark:text-white text-xl font-medium">@sid7.23</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm italic">99M followers</p>
            </div>
          </div>
          <a
            href="#"
            className="inline-flex items-center ml-2 justify-center py-2 sm:px-6 sm:py-2 text-xs sm:text-base shadow-[0_0_0_3px_#000000_inset] bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-300"
          >
            <span className="mx-1">+</span> Get in touch <span className="mx-1">+</span>
          </a>

        </div>

        <div className="p-6  -px-30 sm:px-20">
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
          <p className="text-slate-600 border-1 border-white dark:text-slate-300 text-xs sm:text-base text-center mt-8">
          We’re a team of future changemakers. or at least that’s what we told the lecturers.
        Some came for the knowledge… the rest just to get attendance
        
          </p>
        </div>
      </HoverBorderGradient>
    </div>
  );
}
