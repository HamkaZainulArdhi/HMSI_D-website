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
    "Ini dia website kelas Sistem Informasi D 2023 ( S1SI-07-D ) Telkom University Purwokerto. Tempat kumpulnya cerita, kegiatan, dokumentasi, dan momen seru anak-anak SID 2023. Dibuat santai aja, yang penting seru dan penuh kenangan selama kuliah bareng.",
};

 const jsonLd = {
   "@context": "https://schema.org",
   "@type": "Organization",
   name: "SID23 Telkom Purwokerto",
   url: "https://sisfo23d-telkom.vercel.app",
 };

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
