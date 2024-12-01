import React from "react";
import Image from "next/image";
import { Lato } from "next/font/google";
import Investments from "../components/Investments";

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
        <div className="">
          {/* Text Section */}
          <div className="md:grid md:grid-cols-6 mt-8">
            <div className="md:col-span-4">
              <div className="md:text-5xl text-center font-semibold leading-10">
                <h3 className="text-3xl sm:text-4xl md:font-normal">
                  Special Situation Investing
                </h3>
                <p className="text-base md:text-lg font-light mt-2 text-gray-500 leading-relaxed">
                  For qualified investors
                </p>
              </div>

              <div className="border-b-4 border-red-500 rounded-full w-24 mt-4 mx-auto"></div>
              {/* Image Section */}
              <div className="mt-6 text-center mx-auto md:hidden">
                <div className="">
                  <Image
                    src="/assets/ShipA.jpg"
                    alt="Ship"
                    width={350}
                    height={250}
                    className="w-1/2 md:w-2/3 mx-auto object-contain"
                  />
                </div>
              </div>
              <div className="mt-8 px-12 md:ml-24 md:max-w-[820px]">
                <p className="text-base font-light text-gray-500 leading-relaxed">
                  <span className="font-semibold text-gray-600">
                    Exigent Capital Group
                  </span>{" "}
                  leverages a proprietary investment pipeline, strong
                  underwriting capabilities, and a world-class network of
                  strategic relationships to deliver timely and thematic
                  investment products to a global investor base.
                </p>
                <p className="mt-6 text-base text-gray-500">
                  We provide a range of services that include:
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="hidden md:block mt-6 md:col-span-2">
              <div className="w-2/3 md:w-full mx-auto">
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
        <div>
        {/* Services Grid */}
        <div className="space-y-4 text-center md:max-w-4xl md:text-sm md:grid md:grid-cols-3 md:space-y-0 md:gap-6 mt-4 px-4 lg:px-0 lg:ml-20 mx-auto divide-y-0 md:divide-y-0 md:divide-x-2 divide-slate-600 text-gray-900 md:border-r-2 md:border-slate-800">

        {/* <div className="mx-auto md:pl-24 md:grid md:grid-cols-6 md:max-w-6xl mt-4 text-center md:space-y-0 md:gap-8 px-4 lg:px-0 lg:ml-20 divide-y-0 md:divide-y-0 md:divide-x-2 divide-slate-600  text-gray-900 md:border-r-2 md:border-slate-800"> */}
          {[
            "Secondaries, GP Stakes, Growth Equity and Real Estate",
            "Structured as Single-Asset SPVs, Funds and Co-Investment Vehicles",
            "Geographic Coverage of North America, Europe/UK and Israel",
          ].map((service, index) => (
            <div key={index} className={`${lato.className} py-2 md:py-0`}>
              <h1 className="font-sans text-sm px-4">{service}</h1>
              <p className="border-b-2 border-slate-900 mt-6 w-20 mx-auto md:border-0"></p>
            </div>
          ))}
        </div>
      </div>

      {/* Investments Section */}
      <div className="text-center px-4 lg:px-0 mx-auto max-w-[90%] lg:max-w-6xl">
        <div className="mt-8 mb-12">
          <span className="hover:bg-[#F90002] hover:text-white font-sans font-normal text-base border-2 border-gray-400 py-2 px-6 rounded-full">
            Contact Us
          </span>
        </div>
        <h3 className="text-3xl lg:text-4xl mb-4">
          Notable Investments & Partnerships
        </h3>
        <div className="h-[3px] w-[120px] bg-red-500 rounded mx-auto mt-4"></div>

        {/* Investments Grid */}
        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            {
              src: "/assets/investments/XAI.png",
              alt: "xAI",
              text: "We are early backers of Elon Musk in his mission to build the world's leading artificial intelligence company, xAI",
            },
            {
              src: "/assets/investments/HP.png",
              alt: "HighPost",
              text: "We are GP partners with Bezos and Moros families in HighPost Capital and anchor investors in the firm's consumer-focused investment funds",
            },
            {
              src: "/assets/investments/Insightec.png",
              alt: "Insightec",
              text: "We are board members and major shareholders in Insightec, the world leader in incisionless brain surgery",
            },
          ].map((investment, index) => (
            <div key={index} className="text-center">
              <Image
                src={investment.src}
                alt={investment.alt}
                width={120}
                height={80}
                className="w-1/4 lg:w-[120px] mx-auto object-contain"
              />
              <div className="mt-6">
                <h1
                  className={`${lato.className} font-light text-base lg:text-base italic px-4`}
                >
                  {investment.text}
                </h1>
              </div>
            </div>
          ))}
        </div> */}

        <Investments />
        {/* Disclaimer */}
        <div className={`${lato.className} mt-12`}>
          <h1 className="py-12 italic font-light text-gray-400 text-sm">
            Services provided by Exigent Family Office Ltd. (Israel) in
            conjunction with professional third parties.
          </h1>
        </div>
      </div>
    </div>
  
  );
};

export default Special;
