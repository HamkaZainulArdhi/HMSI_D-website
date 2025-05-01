import Link from "next/link";
import GridBackground from "@/components/AternityUI/Backgroundgrid";
import ScatteredImageGallery from "../ui/headergalery";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white dark:bg-gray-dark "
      >
        <GridBackground>
          <ScatteredImageGallery className="z-10" />
        </GridBackground>
      </section>
    </>
  );
};

export default Hero;
