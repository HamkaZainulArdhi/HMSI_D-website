import Masonry from './Masonry'
import React from "react";
  
const data = [
  { id: 1, image: '/images/heroimage/2.png', height: 400 },
  { id: 2, image: '/images/heroimage/1.png', height: 300 },
  { id: 3, image: '/images/heroimage/3.png', height: 300 },
  { id: 4, image: '/images/heroimage/2.png', height: 300 },
  { id: 5, image: '/images/heroimage/2.png', height: 300 },
  { id: 6, image: '/images/heroimage/2.png', height: 300 },
  { id: 7, image: 'https://picsum.photos/id/37/200/300', height: 200 },
  { id: 8, image: 'https://picsum.photos/id/39/200/300', height: 300 },
  { id: 9, image: 'https://picsum.photos/id/85/200/300', height: 200 },
  { id: 10, image: 'https://picsum.photos/id/103/200/300', height: 400 }
];

export default function GalleryPage() {
  return (
    <main className='mb-20'>
      <h1 className="text-slate-900 text-center dark:text-white text-5xl font-bold mb-8" style={{ fontFamily: "Playfair Display" }}  >Our Memorise</h1>
      <Masonry data={data} />
    </main>
  );
}