
import Blog from "@/components/Blog";
import Brands from "@/components/photobooth";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import ProfileSection from "@/components/feedIG/MovingBorder";
import { Metadata } from "next";
import CircularGalleryDemo from "@/components/globe/circulargallery";
import FAQAccordion from "@/components/Accordion/index";


export const metadata: Metadata = {
  title: "HMSI-D",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <ProfileSection />
      <CircularGalleryDemo />
      <FAQAccordion />

      
      {/* <Features />
      
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact /> */}
    </>
  );
}
