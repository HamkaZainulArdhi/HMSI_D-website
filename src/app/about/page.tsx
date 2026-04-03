import { Metadata } from "next";
import ProfileSectionAbout from "@/components/feedIG about/MovingBorder";
import GalleryPage from "@/components/galleryabout";

export const metadata: Metadata = {
  title: "Kelas S1SI-23-D | About Page",
  description: "Temukan kisah seru dan momen berharga kelas S1S1-23-D Telkom University Purwokerto di halaman ini. Dari cerita kuliah, kegiatan seru, hingga dokumentasi kenangan, semua ada di sini. Jelajahi perjalanan kami selama kuliah bersama dan rasakan kehangatan persahabatan yang terjalin di kelas ini.",
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
