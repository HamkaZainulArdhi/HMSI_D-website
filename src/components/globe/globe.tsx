import Image from "next/image";
import React from "react";

export default function HeroGladiators() {
  return (
    <div className="bg-whitecus relative h-[550px] w-full overflow-hidden md:h-[600px] lg:h-[650px] dark:bg-black">
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="absolute top-1/2 left-1/2 aspect-square w-[150%] -translate-x-1/2 -translate-y-1/2 transform md:w-[140%] lg:w-[130%] xl:w-[120%]">
          <Image
            src="/images/heroglobe/ovalHITAM.png"
            alt="Glow background"
            fill
            className="hidden object-contain dark:block"
            priority
          />
          <Image
            src="/images/heroglobe/oval.png"
            alt="Glow background"
            fill
            className="block object-contain dark:hidden"
            priority
          />
        </div>

        <div className="absolute top-0 left-0 h-full w-full p-4 sm:p-2 md:p-8 lg:p-10">
          <div className="relative h-full">
            <div className="absolute top-30 left-0 text-black sm:top-8 md:top-10 dark:text-white">
              <h1 className="text-3xl leading-none font-light sm:text-4xl md:text-5xl lg:text-6xl">
                The
              </h1>
              <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
                gladiators
              </h1>
            </div>

            <div className="absolute top-30 right-0 max-w-[200px] sm:top-8 sm:max-w-xs md:top-8 md:max-w-sm lg:max-w-md">
              <p className="text-right text-xs text-gray-800 sm:text-xs md:text-base dark:text-gray-200">
                A squad of bold minds, built for real-world battles, not with
                swords, but with skills and hustle — We don&apos;t just show up,
                we show out
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
