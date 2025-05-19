"use client";
import supabase from "@/lib/db";
import { useEffect, useState } from "react";
const Gallery = () => {
  const [gallery, setgallery] = useState<GalleryItem[]>([]);

  useEffect(() => {
  const fetchgallery=async () => {
    const { data, error } = await supabase.from("gallery").select("*");
    if (error) 
      console.error("Error fetching gallery data:", error);
      else setgallery(data);
    };

    fetchgallery();
  }, [supabase]); 

  console.log(gallery);

  return (
    <div>
      <div>
        <h1>helo</h1>
      </div>
    </div>
  )

}
export default Gallery;