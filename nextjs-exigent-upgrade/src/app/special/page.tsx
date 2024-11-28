import React from 'react';
import Image from 'next/image';
import { Lato } from 'next/font/google';

const lato = Lato({
  weight: ['300', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const Special = () => {
  return (
    <div>
      {/* Main Section */}
      <div className="mt-10 px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          {/* Text Section */}
          <div className="lg:w-2/3">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-5xl font-normal">Special Situation Investing</h3>
              <p className="text-base lg:text-lg mt-2 font-normal text-gray-400">
                For qualified investors
              </p>
              <div className="border-b-4 border-red-500 rounded-full w-24 mt-4 mx-auto lg:mx-0"></div>
              <div className="mt-6 lg:mt-12 text-justify lg:ml-[80px] max-w-[90%] lg:max-w-[660px] mx-auto lg:mx-0">
                <p className="text-sm text-gray-500">
                  <span className="font-semibold text-gray-700">Exigent Capital Group</span> leverages a proprietary investment pipeline, strong underwriting capabilities, and a world-class network of strategic relationships to deliver timely and thematic investment products to a global investor base.
                </p>
                <p className="mt-6 text-sm text-gray-500">
                  We provide a range of services that include:
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-6 lg:mt-0 lg:w-1/3 text-center">
            <Image
              src="/assets/ShipA.jpg"
              alt="Ship"
              width={350}
              height={250}
              className="w-2/3 lg:w-[350px] mx-auto object-contain"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="space-y-4 text-center max-w-[360px] md:grid md:grid-cols-3 md:space-y-0 md:gap-8 mt-12 px-4 lg:px-0 lg:ml-20 md:max-w-[880px] mx-auto divide-y-2 md:divide-y-0 md:divide-x-2 divide-slate-600 text-gray-700">
          {[
            'Secondaries, GP Stakes, Growth Equity and Real Estate',
            'Structured as Single-Asset SPVs, Funds and Co-Investment Vehicles',
            'Geographic Coverage of North America, Europe/UK and Israel',
          ].map((service, index) => (
            <div key={index} className={`${lato.className} py-6 md:py-0`}>
              <h1 className="text-base lg:text-base px-6">{service}</h1>
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
        <h3 className="text-3xl lg:text-4xl mb-4">Notable Investments & Partnerships</h3>
        <div className="h-[3px] w-[120px] bg-red-500 rounded mx-auto mt-4"></div>

        {/* Investments Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            {
              src: '/assets/investments/XAI.png',
              alt: 'xAI',
              text: 'We are early backers of Elon Musk in his mission to build the world\'s leading artificial intelligence company, xAI',
            },
            {
              src: '/assets/investments/HP.png',
              alt: 'HighPost',
              text: 'We are GP partners with Bezos and Moros families in HighPost Capital and anchor investors in the firm\'s consumer-focused investment funds',
            },
            {
              src: '/assets/investments/Insightec.png',
              alt: 'Insightec',
              text: 'We are board members and major shareholders in Insightec, the world leader in incisionless brain surgery',
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
                <h1 className={`${lato.className} font-light text-base lg:text-base italic px-4`}>
                  {investment.text}
                </h1>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className={`${lato.className} mt-12`}>
          <h1 className="py-12 italic font-light text-gray-400 text-sm">
            Services provided by Exigent Family Office Ltd. (Israel) in conjunction with professional third parties.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Special;
