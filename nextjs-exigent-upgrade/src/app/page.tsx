import Image from "next/image";
import { type SanityDocument } from "next-sanity";
import { client } from "./sanity/client";

import Firm from "./components/Firm";
import Investments from "./components/Investments";
import StrategicAdvisors from "./components/StrategicAdvisors";
import Contact from "./components/Contact";
import BusinessSectionTwo from "./components/BusinessCardTwo";
import MeetTheTeamTwo from "./components/MeetTheTeamTwo";
import Animate from "./components/animation/Animate";

import localFont from 'next/font/local'

// const bodoniTrue = localFont({ src: '../../fonts/bodoni/bodoni-book-bt.ttf'})


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
      <Animate />
      {/* Leadership Section */}
      <div className="mt-20 lg:mt-26 text-center mx-auto">
        <div className="justify-items-center mx-auto">
          <h3 className="max-w-[320px] sm:max-w-[520px] text-xl font-normal sm:text-2xl sm:px-8 md:text-2xl md:max-w-2xl lg:max-w-[840px] lg:text-3xl xl:text-4xl xl:max-w-[980px] text-gray-400">
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
