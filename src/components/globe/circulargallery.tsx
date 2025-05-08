import React from 'react';
import CircularGallery from '@/components/gallerycircular';
import HeroGladiators from './globe';

const CircularGalleryDemo = () => {
  return (
    <div className="relative h-[650px] top-[-100px] sm:top-0 overflow-hidden">
      {/* Background orange globe */}
      <HeroGladiators />

      {/* Circular Gallery */}
      <div className="absolute top-[220px] w-full z-10 flex justify-center">
        <CircularGallery
          bend={-2}
          textColor="#ffffff"
          borderRadius={0.05}
        />
      </div>
    </div>
  );
};

export default CircularGalleryDemo;
