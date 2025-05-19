import { PhotoboothDemo } from "@/components/photobooth/Photobooth";
import Breadcrumb from "@/components/Common/Breadcrumb";
import  Gallery  from "@/components/gallerycircular/tes";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const PhotoboothPage = () => {
  return (
    <>
     <PhotoboothDemo />
     <Gallery />
    </>
  );
};

export default PhotoboothPage;
