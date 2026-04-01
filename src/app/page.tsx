import Brands from "@/components/photobooth";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import ProfileSection from "@/components/feedIG/MovingBorder";
import { Metadata } from "next";
import CircularGalleryDemo from "@/components/globe/circulargallery";
import FAQAccordion from "@/components/Accordion/index";
import Head from "@/components/aboutclass/head";

export const metadata: Metadata = {
  title: "HMSI-D | Home Page",
  description:
    "Welcome to the HMSI-D Home Page, where you can explore our latest features and updates.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      {/* <AboutClass /> */}
      <Head />
      <ProfileSection />
      <CircularGalleryDemo />
      <FAQAccordion />
    </>
  );
}
