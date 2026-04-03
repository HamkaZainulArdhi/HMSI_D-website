import { PhotoboothDemo } from "@/components/photobooth/Photobooth";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kelas S1SI-23-D | Photobooth Page",
  description:
    "keren nih ada. Fitur photobooth yang seru banget buat ngabadikan momen-momen seru bareng temen-temen di kelas S1S1-23-D Telkom University Purwokerto. Bisa foto-foto lucu, kreatif, dan pastinya penuh kenangan. Jangan lupa share hasil fotonya ya, biar semua bisa ikut seru-seruan bareng!",
  // other metadata
};

const PhotoboothPage = () => {
  return (
    <>
      <PhotoboothDemo />
    </>
  );
};

export default PhotoboothPage;
