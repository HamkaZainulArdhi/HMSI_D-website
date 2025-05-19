import  Gallery  from "@/components/gallerycircular/tes";
import { Metadata } from "next";
import ProfileSectionAbout from "@/components/feedIG about/MovingBorder";

import GalleryPage from "@/components/galleryabout";

export const metadata: Metadata = {
  title: "About Page | SID-7 2023",
  description: "This is about Page for our stories at SID-7",
  // other metadata
};

const PhotoboothPage = () => {
  return (
    <>
     <ProfileSectionAbout  />
     {/* <Gallery /> */}
     <GalleryPage />
    </>
  );
};

export default PhotoboothPage;
