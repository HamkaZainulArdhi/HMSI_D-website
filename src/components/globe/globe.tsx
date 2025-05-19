import Image from "next/image";
import React from "react";

export default function HeroGladiators() {
  return (
    <div className="relative h-[550px] md:h-[600px] lg:h-[650px] w-full bg-whitecus dark:bg-black overflow-hidden">
      <div className="relative h-full w-full flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-[150%] md:w-[140%] lg:w-[130%] xl:w-[120%] 
                      aspect-square">
          <Image
            src="/images/heroglobe/ovalHITAM.png"
            alt="Glow background"
            fill
            className="object-contain hidden dark:block"
            priority
          />
          <Image
            src="/images/heroglobe/oval.png"
            alt="Glow background"
            fill
            className="object-contain block dark:hidden "
            priority
          />
        </div>
        
        <div className="absolute top-0 left-0 w-full h-full p-4 sm:p-2 md:p-8 lg:p-10">
          <div className="relative h-full ">
            <div className="absolute left-0 top-30 sm:top-8 md:top-10 text-black dark:text-white ">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-none">The</h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">gladiators</h1>
            </div>
            
            <div className="absolute right-0 top-30 sm:top-8 md:top-8 max-w-[200px] sm:max-w-xs md:max-w-sm lg:max-w-md">
              <p className="text-gray-800 dark:text-gray-200 text-right text-xs sm:text-xs md:text-base">
                A squad of bold minds, built for real-world
                battles, not with swords, but with skills and hustle
                — We don't just show up, we show out
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


