'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import Image from 'next/image';
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

  const searchParams = useSearchParams();
  const slugTwo = searchParams.get('slug'); // Retrieve slug from query parameters

  console.log('slugTwo:', slugTwo); // Debugging log for slugTwo
  console.log('persons:', persons); // Debugging log for persons

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
    if (slugTwo && persons.length > 0) {
      // Find the index of the team member based on the slug
      const index = persons.findIndex((person) => person.slug.current === slugTwo);
      console.log('Matching index:', index); // Debugging log for index
      if (index !== -1) {
        setCurrentIndex(index);
      } else {
        console.warn('Slug not found in persons:', slugTwo); // Warning for unmatched slug
      }
    }
  }, [slugTwo, persons]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? persons.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === persons.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="mt-8 mx-auto items-center">
    {/* <div className="mt-8 mx-auto max-w-[460px] md:max-w-[780px] lg:max-w-[1040px] xl:max-w-[1220px]"> */}
      <div className="relative px-6">
        <button
          className="absolute left-[58px] md:left-[86px] lg:left-[132px] top-[40vw]  sm:top-[35vw] md:top-1/2 transform -translate-y-1/2 z-20"
          onClick={handlePrev}
        >
          <Image
            src="/assets/arrow_left.png"
            alt="Previous Arrow"
            width={20}
            height={20}
          />
        </button>

        <div className="overflow-hidden">
          <div
            className="flex gap-1"
            // className="flex transition-transform duration-500 gap-1"
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
                <Test person={person} />
              </div>
            ))}
          </div>
        </div>

        <button
          className="absolute right-[44px] md:right-[36px] lg:right-[92px] xl:right-[-10px] top-[40vw] md:top-1/2 transform -translate-y-1/2 text-black z-10 p-2"
          onClick={handleNext}
        >
          <Image
            src="/assets/arrow_right.png"
            alt="Next Arrow"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
}
