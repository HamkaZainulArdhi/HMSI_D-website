import { Metadata } from "next";
import ProfileSectionAbout from "@/components/feedIG about/MovingBorder";
import GalleryPage from "@/components/galleryabout";

export const metadata: Metadata = {
  title: "HMSI-D | About Page",
  description: "Learn more about HMSI-D, our mission, and our team.",
  // other metadata
};

const PhotoboothPage = () => {
  return (
    <>
      <ProfileSectionAbout />
      <GalleryPage />
    </>
  );
};

export default PhotoboothPage;
