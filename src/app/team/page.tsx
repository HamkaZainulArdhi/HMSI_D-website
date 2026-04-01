
import ChromaGrid from "@/components/ui/ChromaGrid";
import ChromaGridHead from "@/components/ui/ChromaGridHead";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HMSI-D | Our Team Page",
  description:
    "Capture your moments with our photobooth feature. Share and enjoy your photos with friends and family.",
  // other metadata
};

const OurTeamPage = () => {
  return (
    <>
      {/* <OurTeam /> */}
      <ChromaGridHead />
      <ChromaGrid />
    </>
  );
};

export default OurTeamPage;
