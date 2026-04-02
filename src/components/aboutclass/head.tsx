"use client";

import React from "react";
import Folder from "../ui/Folder";
import ModelViewer from "../ui/ModelViewer";
import { ImagesBadgeDemo } from "../AternityUI/button-folder";
import Link from "next/link";

const Head: React.FC = () => {
  // Fungsi scroll ke elemen yang ditentukan berdasarkan id
  const handleScrollToSection = (id: string) => {
    const targetSection = document.getElementById(id);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-between px-4 py-16 md:flex-row md:px-8 lg:px-16">
      <div className="mb-8 w-full text-center md:mb-0 md:w-1/2 md:text-left">
        <h1
          style={{ fontFamily: "Playfair Display" }}
          className="mb-4 text-3xl font-bold md:text-4xl"
        >
          S1SI-07-D -- Kelas Kami Adalah KELAZZZZZ🥶
        </h1>
        <p className="mb-6">
          Kami Adalah Kelas Sistem Informasi 07 D Fakultas Rekayasa industri
          telkom university yang penuh semangat dan
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:justify-start">
          <Link href="/team">
            <ImagesBadgeDemo />
          </Link>
        </div>
      </div>
      <div className="">
        <ModelViewer
          url="/images/logo/3dmodel.glb"
          width={350}
          height={400}
          modelXOffset={0}
          modelYOffset={0}
          enableMouseParallax
          enableHoverRotation
          environmentPreset="forest"
          fadeIn={false}
          ambientIntensity={0.5}
          autoRotate
          autoRotateSpeed={0.35}
          defaultZoom={1}
        />
      </div>
    </div>
  );
};

export default Head;
