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
      <div className="max-w-8xl mt-10">
        <div className="grid grid-cols-3">
          {/* Text Section */}
          <div className="col-span-2">
            <div className="mt-8">
              <div className="text-5xl justify-items-center">
                <h3 className="font-normal">Special Situation Investing</h3>
                <p className="text-lg font-normal mt-4 text-gray-400">For qualified investors</p>
                <div className="border-b-4 border-red-500 rounded-full w-24 mt-4 mx-auto"></div>
                <div className="mt-12 ml-[80px] max-w-[660px]">
                  <div className="text-base text-gray-500">
                    <span className="font-semibold text-gray-700">Exigent Capital Group</span> leverages a proprietary investment pipeline, strong underwriting capabilities, and a world-class network of strategic relationships to deliver timely and thematic investment products to a global investor base.
                  </div>
                  <p className="mt-6 text-base text-gray-500">We provide a range of services that include:</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-span-1 pr-16">
            <Image
              src="/assets/ShipA.jpg"
              alt="Ship"
              width={350}
              height={250}
              className="w-[350px] object-contain"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="px-4 ml-72 grid grid-cols-3 max-w-[880px] mt-12 text-center divide-x-2 divide-slate-600 align-top text-gray-700">
          {[
            'Secondaries, GP Stakes, Growth Equity and Real Estate',
            'Structured as Single-Asset SPVs, Funds and Co-Investment Vehicles',
            'Geographic Coverage of North America, Europe/UK and Israel',
          ].map((service, index) => (
            <div key={index} className={lato.className}>
              <h1 className="font-sans text-sm px-4">{service}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* Investments Section */}
      <div className="text-center mx-auto max-w-4xl justify-items-center">
        <div className="mt-14 mb-12">
          <span className="hover:bg-red-500 hover:text-white font-sans font-normal text-base border-2 border-gray-400 py-1 rounded-full px-6">
            Contact Us
          </span>
        </div>
        <h3 className="justify-self-center text-4xl mb-4 mt-[36px]">Notable Investments & Partnerships</h3>
        <div className="head-small-red-line h-[3px] w-[120px] bg-red-500 rounded mx-auto mt-4"></div>

        {/* Investments Grid */}
        <div className="mt-16 mx-auto max-w-5xl grid grid-cols-3 gap-16">
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
            <div key={index}>
              <div>
                <Image
                  src={investment.src}
                  alt={investment.alt}
                  width={120}
                  height={80}
                  className="object-contain w-auto h-auto"
                />
              </div>
              <div className="mt-12 max-w-2/3">
                <h1 className={lato.className}>
                  <span className="font-light text-[18px] italic">{investment.text}</span>
                </h1>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className={lato.className}>
          <h1 className="py-32 italic font-light font-sans text-gray-400 text-sm">
            Services provided by Exigent Family Office Ltd. (Israel) in conjunction with professional third parties.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Special;
