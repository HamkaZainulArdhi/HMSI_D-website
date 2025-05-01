import Image from "next/image";
import React from "react";

export default function HeroGladiators() {
  return (
    <section className="relative flex items-center border-b border-white justify-between h-[550px] py-20 px-10 bg-black overflow-hidden">
      {/* Background Glow from Image */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 border-white border-4 w-[800px] h-[550px] z-0 pointer-events-none">
        <Image
          src="/images/heroglobe/Ellipse 3.png"
          alt="Glow background"
          fill
          className="object-contain scale-170 "
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex justify-between w-full items-center">
        <div className="text-white text-left">
          <h1 className="text-4xl font-light leading-none">The</h1>
          <h1 className="text-5xl font-bold -mt-2">gladiators</h1>
        </div>

        <p className="text-gray-300 max-w-md text-right text-sm leading-relaxed">
          Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>
    </section>
  );
}
