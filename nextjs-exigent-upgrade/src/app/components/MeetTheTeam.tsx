'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { urlForImage } from '../sanity/client';
import { Bodoni_Moda, Lato } from 'next/font/google';
import Link from 'next/link';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
});

const lato = Lato({
  weight: ['300', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});


export default function MeetTheTeam({ persons }: { persons: any }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? persons.length - 4 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === persons.length - 4 ? 0 : prev + 1));
  };

  return (
    <div className="mt-32 text-center mx-auto justify-items-center">
      <h3 className="text-3xl justify-self-center mb-4">Meet the Team</h3>
      <div className="redline justify-self-center mb-8 h-[3px] w-[120px] bg-red-500 rounded"></div>
      <div className="relative w-full max-w-5xl mx-auto mt-10">
        {/* Button: Previous */}
        <button
          className="absolute left-[-2rem] top-1/2 transform -translate-y-1/2 text-black font-bold p-2 z-10"
          onClick={handlePrev}
          style={{ width: '40px', height: '40px' }}
        >
          <Image
            src="/assets/arrow_left.png"
            alt="Previous Arrow"
            width={40}
            height={40}
          />
        </button>

        {/* Carousel Track */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 25}%)`, // Moves by 25% (4 cards visible at a time)
            }}
          >
            {persons.map((person, index) => (
              <div
                key={index}
                className="flex-none w-1/4 px-2"
                style={{ minWidth: '25%' }} // Ensures 4 cards fit exactly
              >
                <Link href={`team/${person.slug.current}`} key={index} className="">
                  <div className="border border-gray-300 h-[315px] w-[230px]">
                    <div className={bodoni.className}>
                      <div className="mt-10 w-3/5 mx-auto">
                        <Image
                          src={urlForImage(person.image).quality(100).url()}
                          alt={person.name}
                          width={150}
                          height={150}
                          className="object-contain"
                        />
                      </div>
                      <p className="text-2xl font-semibold mt-2">{person.name}</p>
                      <div className={lato.className}>
                        <p className="text-[18px] italic mt-2 text-gray-600">
                          {person.title}
                        </p>
                        <p className="text-[18px] mb-12 text-gray-600">{person.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Button: Next */}
        <button
          className="absolute right-[-2rem] top-1/2 transform -translate-y-1/2 text-black font-bold p-2 z-10"
          onClick={handleNext}
          style={{ width: '40px', height: '40px' }}
        >
          <Image
            src="/assets/arrow_right.png"
            alt="Next Arrow"
            width={40}
            height={40}
          />
        </button>
      </div>
    </div>
  );
}
