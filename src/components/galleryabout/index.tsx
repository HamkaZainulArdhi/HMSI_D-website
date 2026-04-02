import UnderlineText from "../ui/underlinetext";
import Masonry from "./Masonry";
import React from "react";

const data = [
  { id: 1, image: "/images/heroimage/1.png" },
  { id: 2, image: "/images/heroimage/2.png" },
  { id: 3, image: "/images/heroimage/3.png" },
  { id: 4, image: "/images/heroimage/4.png" },
  { id: 5, image: "/images/heroimage/5.png" },
  { id: 6, image: "/images/heroimage/6.png" },
  { id: 7, image: "/images/gallery/1.jpg" },
  { id: 8, image: "/images/gallery/2.jpg" },
  { id: 9, image: "/images/gallery/3.jpg" },
  { id: 10, image: "/images/gallery/4.jpg" },
  { id: 11, image: "/images/gallery/5.jpg" },
  { id: 12, image: "/images/gallery/6.jpg" },
  { id: 13, image: "/images/gallery/7.jpg" },
  { id: 14, image: "/images/gallery/8.jpg" },
  { id: 15, image: "/images/gallery/9.jpg" },
  { id: 16, image: "/images/gallery/10.jpg" },
  { id: 17, image: "/images/gallery/11.jpg" },
  { id: 18, image: "/images/gallery/12.jpg" },
  { id: 19, image: "/images/gallery/13.jpg" },
  { id: 20, image: "/images/gallery/14.jpg" },

];

export default function GalleryPage() {
  return (
    <main className="mb-20">
      <h1
        className="text-center text-5xl font-bold text-slate-900 dark:text-white"
        style={{ fontFamily: "Playfair Display" }}
      >
        Our Memorize
      </h1>
      <UnderlineText />
      <Masonry data={data} />
    </main>
  );
}
