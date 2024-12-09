import Image from "next/image";
import { type SanityDocument } from "next-sanity";
import { client } from "./sanity/client";

import Firm from "./components/Firm";
import BusinessCard from "./components/BusinessCard";
import MeetTheTeam from "./components/MeetTheTeam";
import Investments from "./components/Investments";
import StrategicAdvisors from "./components/StrategicAdvisors";
import Contact from "./components/Contact";
import BusinessSectionTwo from "./components/BusinessCardTwo";
import MeetTheTeamTwo from "./components/MeetTheTeamTwo";



const PERSON_QUERY = `*[_type == "person" && order < 12] | order(order asc) | { _id,name,title, subtitle, description, image, slug, order }`;

const options = { next: { revalidate: 30 } };

export default async function Home() {
  const persons = await client.fetch<SanityDocument[]>(
    PERSON_QUERY,
    {},
    options,
  );

  return (
    <div>
      {/* White Screen Animation */}
      <div className="fixed inset-0 bg-white z-[999999] animate-[backgroundanimation_9.5s_ease-in-out_forwards]"></div>

      {/* Gradient Overlay */}
      <div className="container relative">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="relative z-[9999999] animate-[backgroundanimation_9.5s_cubic-bezier(0.5,0,0,1)_forwards]">
            {/* Rotating Logo X */}
            <div className="absolute left-[35.7vw] top-[1.5vw] w-[5.0vw] animate-[animation-x_9.5s_cubic-bezier(0.5,0,0,1)_forwards]">
              <Image
                src="/assets/logo-x.svg"
                alt="Logo X"
                width={75}
                height={75}
              />
            </div>

            {/* Logo E Animation */}
            <div className="absolute top-[0.4vw] left-0 right-0 mx-auto w-[40vw] animate-[animation-1_9.5s_cubic-bezier(0.5,0,0,1)_forwards]">
              <Image
                src="/assets/logo-ani-e.svg"
                alt="Logo E"
                width={320}
                height={320}
              />
            </div>

            {/* Text Animations */}
            <div className="absolute left-[41.0vw] text-gray-400 uppercase font-[Bodoni Moda] text-[7vw] leading-[8.4vw] animate-[animation-2_9.5s_cubic-bezier(0.5,0,0,1)_forwards] top-[calc(50%-2px)]">
              traordinary People
            </div>
            <div className="absolute left-[41.0vw] text-gray-400 uppercase font-[Bodoni Moda] text-[7vw] leading-[8.4vw] animate-[animation-3_9.5s_cubic-bezier(0.5,0,0,1)_forwards] top-[calc(50%-2px)]">
              emplary Values
            </div>
            <div className="absolute left-[41.0vw] text-gray-400 uppercase font-[Bodoni Moda] text-[7vw] leading-[8.4vw] animate-[animation-4_9.5s_cubic-bezier(0.5,0,0,1)_forwards] top-[calc(50%-2px)]">
              ceptional Opportunities
            </div>
            <div className="absolute left-[41.0vw] text-gray-400 uppercase font-[Bodoni Moda] text-[7vw] leading-[8.4vw] animate-[animation-4_9.5s_cubic-bezier(0.5,0,0,1)_forwards] top-[calc(50%-2px)]">
              ceptional
            </div>

            {/* Final Animated Logo */}
            <div className="absolute top-[0.2vw] left-0 right-0 mx-auto w-[40vw] animate-[animation-8_9.5s_ease-in-out_forwards]">
              <Image
                src="/assets/logo-ani.svg"
                alt="Final Animated Logo"
                width={320}
                height={320}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="mt-36 text-center mx-auto max-w-5xl">
        <div className="justify-items-center mx-auto max-w-3xl">
          <h3 className="max-w-[320px] text-xl font-normal sm:max-w-[500px] sm:text-2xl  sm:px-8  md:text-xl md:max-w-xl lg:max-w-3xl lg:text-xl xl:text-[26px] text-gray-400">
            Exigent is a diversified financial services company with three
            distinct businesses.
          </h3>
          <div className="h-[3px] w-[120px] bg-red-500 rounded mx-auto mt-6"></div>
        </div>
      </div>
      {/* <BusinessCard /> */}
      <BusinessSectionTwo />
      {/* <MeetTheTeam persons={persons} /> */}
      <MeetTheTeamTwo persons={persons} />
      <Investments />
      <StrategicAdvisors />
      <Firm />
      <Contact />
    </div>
  );
}
