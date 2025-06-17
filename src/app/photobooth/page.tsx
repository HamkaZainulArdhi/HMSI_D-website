import { PhotoboothDemo } from "@/components/photobooth/Photobooth";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HMSI-D | Photobooth Page",
  description:
    "Capture your moments with our photobooth feature. Share and enjoy your photos with friends and family.",
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
