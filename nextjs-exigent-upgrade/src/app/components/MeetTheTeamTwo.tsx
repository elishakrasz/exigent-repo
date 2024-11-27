'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bodoni_Moda, Lato } from 'next/font/google';
import { urlForImage } from '../sanity/client';

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
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'screen' | 'desktop'>('mobile');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setScreenSize('desktop');
      else if (window.innerWidth >= 1024) setScreenSize('screen');
      else if (window.innerWidth >= 768) setScreenSize('tablet');
      else setScreenSize('mobile');
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleCount = {
    desktop: 4,
    screen: 3,
    tablet: 2,
    mobile: 1,
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, persons.length - visibleCount[screenSize]) : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + visibleCount[screenSize] >= persons.length ? 0 : prev + 1));
  };

  const visiblePersons = persons.slice(currentIndex, currentIndex + visibleCount[screenSize]);

  return (
    <section className="max-w-8xl mt-8 sm:mt-16 md:mt-24 lg:mt-32 text-center mx-auto px-6 sm:px-36 md:px-24 lg:px-20">
      <h2 className={`${bodoni.className} text-3xl sm:text-4xl md:text-5xl mb-4`}>Meet the Team</h2>
      <div className="redline mx-auto mb-6 sm:mb-8 h-[3px] w-[120px] bg-red-500 rounded"></div>

      <div className="relative w-full max-w-7xl mx-auto mt-6 sm:mt-8 md:mt-10">
        <CarouselButton direction="left" onClick={handlePrev} disabled={currentIndex === 0} />

        <div className="overflow-hidden">
          <div className={`flex transition-transform duration-500 justify-center gap-4`}>
            {visiblePersons.map((person, index) => (
              <PersonCard key={index} person={person} screenSize={screenSize} />
            ))}
          </div>
        </div>

        <CarouselButton direction="right" onClick={handleNext} disabled={currentIndex + visibleCount[screenSize] >= persons.length} />
      </div>
    </section>
  );
}

function PersonCard({ person, screenSize }: { person: any; screenSize: 'mobile' | 'tablet' | 'screen' | 'desktop' }) {
  const cardWidth =
    screenSize === 'desktop' ? 'w-1/4' :
    screenSize === 'screen' ? 'w-1/3' :
    screenSize === 'tablet' ? 'w-1/2' : 'w-full';

  return (
    <Link href={`team/${person.slug.current}`} className={`${cardWidth} `}>
      <div className="border border-gray-300 h-[280px] sm:h-[300px] md:h-[320px] flex flex-col items-center justify-center">
        <Image
          className="w-24 sm:w-28 object-contain mb-4"
          src={urlForImage(person.image).quality(100).url()}
          alt={person.name}
          width={120}
          height={120}
        />
        <h3 className={`${bodoni.className} text-lg sm:text-xl md:text-2xl font-semibold`}>{person.name}</h3>
        <div className={`${lato.className} mt-2`}>
          <p className="text-sm sm:text-base md:text-lg italic text-gray-600">{person.title}</p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">{person.subtitle}</p>
        </div>
      </div>
    </Link>
  );
}



function CarouselButton({ direction, onClick, disabled }: { direction: 'left' | 'right'; onClick: () => void; disabled: boolean }) {
  return (
    <button
      className={`absolute top-1/2 transform -translate-y-1/2 ${direction === 'left' ? '-left-10' : '-right-10'} text-black p-2 z-10 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      <Image
        src={`/assets/arrow_${direction}.png`}
        alt={`${direction} arrow`}
        width={26}
        height={26}
      />
    </button>
  );
}

