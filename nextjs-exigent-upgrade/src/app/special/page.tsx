import React from "react";
import Image from "next/image";
import { Lato } from "next/font/google";
import Investments from "../components/Investments";
import Link from "next/link";


const lato = Lato({
  weight: ["300", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const Special = () => {
  return (
    <div>
      {/* Main Section */}
      <div className="mt-10">
        <div>
          {/* Text Section */}
          <div className="md:grid md:grid-cols-6 mt-8">
            <div className="md:col-span-4">
              <div className="md:text-5xl text-center font-semibold leading-10">
                <h3 className="text-3xl sm:text-4xl md:text-4xl md:font-normal">
                  Special Situation Investing
                </h3>
                <p className="text-base md:text-sm font-light mt-2 text-gray-500 leading-relaxed">
                  For qualified investors
                </p>
              </div>

              <div className="border-b-4 border-red-500 rounded-full w-24 mt-4 mx-auto"></div>

              {/* Image Section for Mobile */}
              <div className="mt-6 text-center mx-auto md:hidden">
                <Image
                  src="/assets/ShipA.jpg"
                  alt="Ship"
                  width={350}
                  height={250}
                  className="w-2/3 md:w-2/3 mx-auto object-contain"
                />
              </div>

              {/* Description Section */}
              <div className="mt-8 px-12 md:ml-24 md:max-w-[820px]">
                <p className="text-sm md:text-sm font-light text-gray-500 leading-relaxed">
                  <span className="font-semibold text-gray-600">
                  Exigent Capital Group
                  </span>{" "}
                  leverages a proprietary investment pipeline, strong
                  underwriting capabilities, and a world-class network of
                  strategic relationships to deliver timely and thematic
                  investment products to a global investor base.
                </p>
                <p className="mt-6 text-sm text-gray-500">
                  We provide a range of services that include:
                </p>
              </div>
            </div>

            {/* Image Section for Larger Screens */}
            <div className="hidden md:block mt-6 md:mt-0 md:col-span-2">
              <div className="w-2/3 mx-auto">
                <Image
                  src="/assets/ShipA.jpg"
                  alt="Ship"
                  width={300}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="pl-8 mt-4 md:mt-10">
      <div className="text-center md:max-w-[800px] md:grid md:grid-cols-3  md:gap-0 md:mt-0 px-2 lg:px-0 lg:ml-20 mx-auto divide-y-0 md:divide-y-0 md:divide-x-2 divide-slate-600 text-gray-900">
  {[
    "Secondaries, GP Stakes, Growth Equity and Real Estate",
    "Structured as Single-Asset SPVs, Funds and Co-Investment Vehicles",
    "Geographic Coverage of North America, Europe/UK and Israel",
  ].map((service, index) => (
    <div
      key={index}
      className={`${lato.className} flex flex-col justify-center items-center py-4 h-4`}
    >
      <h1 className="font-sans text-sm md:text-xs px-6 align-top">{service}</h1>
    </div>
  ))}
</div>
      </div>
      


      {/* Investments Section */}
      <div className="text-center px-4 lg:px-0 mx-auto max-w-[90%] lg:max-w-6xl">
      <Link
          href="/contact"
          className="text-sm inline-block mt-4 md:mt-8 hover:bg-[#F5101E] hover:text-white font-sans font-normal md:text-sm border-2 border-gray-400 py-1 rounded-full px-6"
        >
          Contact Us
        </Link>
        <Investments />

        {/* Disclaimer */}
        <div className={`${lato.className} mt-12`}>
          <h1 className="py-12 italic font-light text-gray-400 text-xs">
            Services provided by Exigent Family Office Ltd. (Israel) in
            conjunction with professional third parties.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Special;
