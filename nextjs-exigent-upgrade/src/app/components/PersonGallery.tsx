'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Bodoni_Moda, Lato } from 'next/font/google';
import Card from './Card';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
});

const lato = Lato({
  weight: ['300', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function PersonGallery({ persons }: { persons: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const searchParams = useSearchParams();
  const slugTwo = searchParams.get('slug');

  useEffect(() => {
    if (slugTwo && persons.length > 0) {
      const index = persons.findIndex((person) => person.slug.current === slugTwo);
      if (index !== -1) setCurrentIndex(index);
    }
  }, [slugTwo, persons]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? persons.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === persons.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mt-12 mx-auto items-center">
      <div className="relative px-6">
        {/* Button: Previous */}
        <button
          className="absolute left-[17%] md:left-[2px] lg:left-[-2px] top-[15%] transform -translate-y-1/2 z-10p-2"
          onClick={handlePrev}
        >
          <Image
            src="/assets/arrow_left.png"
            alt="Previous Arrow"
            width={22}
            height={22}
          />
        </button>


        {/* Card Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {persons.map((person, index) => (
              <div
                key={index}
                className="flex-none w-full mx-auto px-2"
                style={{
                  width: '100%',
                }}
              >
                <Card person={person} />
              </div>
              
            ))}
          </div>
         
        </div>
        {/* Button: Next */}
        <button
          className="absolute right-[17%] md:right-[-4px] lg:right-[-10px] xl:right-[-10px]  top-[15%] transform -translate-y-1/2 text-black z-10 p-2"
          onClick={handleNext}
        >
          <Image
            src="/assets/arrow_right.png"
            alt="Next Arrow"
            width={22}
            height={22}
          />
        </button>
       

        {/* Right Arrow */}
        {/* <button
          className="absolute right-[20%] sm:right-[25%] md:right-[10%] lg:right-[92px] xl:right-[-10px] top-[55%] transform -translate-y-1/2 text-black z-10 p-2"
          onClick={handleNext}
        >
          <Image src="/assets/arrow_right.png" alt="Next Arrow" width={20} height={20} />
        </button> */}
      </div>
    </div>
  );
}
