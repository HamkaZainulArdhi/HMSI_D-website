import Image from "next/image";
import React from "react";

const UnderlineText: React.FC = () => {
  return (
    <section className="mx-auto mt-1 mb-2 w-[300px] max-w-full">
      {/* Gambar versi gelap */}
      <Image
        src="/images/about/list.png"
        alt="list bottom dark"
        className="hidden dark:block"
        width={300}
        height={100}
      />

      {/* Gambar versi terang */}
      <Image
        src="/images/about/listHITAM.png"
        alt="list bottom light"
        className="block dark:hidden"
        width={300}
        height={100}
      />
    </section>
  );
};

export default UnderlineText;
