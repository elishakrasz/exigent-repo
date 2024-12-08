'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { urlForImage } from '../sanity/client';
import { Bodoni_Moda, Lato } from 'next/font/google';
import Test from './Test';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
});

const lato = Lato({
  weight: ['300', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function PersonGalleryTwo({ persons }: { persons: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  const [isClient, setIsClient] = useState(false);
  const router = isClient ? useRouter() : null;
  const { slug } = router?.query || {};

  

//   const router = useRouter();
//   const { slug } = router.query; // Extract slug from query parameter


  // Update visible cards based on screen size
  const updateVisibleCards = () => {
    if (window.innerWidth >= 1280) setVisibleCards(4); // Large screens
    else if (window.innerWidth >= 1024) setVisibleCards(3); // Desktop
    else if (window.innerWidth >= 768) setVisibleCards(2); // Tablet
    else setVisibleCards(1); // Mobile
  };

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  useEffect(() => {
    if (slug) {
      // Find the index of the team member based on the slug
      const index = persons.findIndex((person) => person.slug.current === slug);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [slug, persons]);
  
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, persons.length - visibleCards) : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= Math.max(0, persons.length - visibleCards) ? 0 : prev + 1
    );
  };

  return (
    <div className="mt-8  mx-auto max-w-[460px] md:max-w-[780px]  lg:max-w-[940px] xl:max-w-[1220px]">
      <div className="relative px-6">
        <button
          className="absolute left-[16px] md:left-[86px] lg:left-[132px] top-1/2 transform -translate-y-1/2 z-20"
          onClick={handlePrev}
        >
          <Image
            src="/assets/arrow_left.png"
            alt="Previous Arrow"
            width={24}
            height={24}
          />
        </button>

         {/* Button: Previous */}
         {/* <button
          className="absolute left-[9px] md:left-[2px] lg:left-[-2px] top-1/2 transform -translate-y-1/2 z-10p-2"
          onClick={handlePrev}
        >
          <Image
            src="/assets/arrow_left.png"
            alt="Previous Arrow"
            width={24}
            height={24}
          />
        </button> */}

        {/* Carousel Track */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 gap-1"
            style={{
              transform: `translateX(-${currentIndex * (100 / 1)}%)`,
            }}
          >
            {persons.map((person, index) => (
              <div
                key={index}
                className="flex-none px-0.5"
                style={{
                  width: `calc(${100 / 1}% - 3px)`,
                }}
              >
                <Test person={persons[currentIndex]} />
           
              </div>
            ))}
          </div>
        </div>

        {/* Button: Next */}
        <button
          className="absolute right-[0px] md:right-[36px] lg:right-[92px]  xl:right-[-10px]  top-1/2 transform -translate-y-1/2 text-black z-10 p-2"
          onClick={handleNext}
        >
          <Image
            src="/assets/arrow_right.png"
            alt="Next Arrow"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
}

