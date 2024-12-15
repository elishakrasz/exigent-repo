import Image from "next/image";
import { Bodoni_Moda, Lato } from "next/font/google";
import Button from "../components/utilities/Button";
import Link from "next/link";
import Investments from "../components/Investments";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
});
const lato = Lato({
  weight: ["300", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const Special = () => {
  return (
    <div>
      {/* Main Section */}
      <div className="max-w-7xl lg:max-w-[1000px] lg:mx-auto mt-10">
        <div className="">
          {/* Text Section */}
          <div className="">
            <div className="md:grid md:grid-cols-6 mt-8">
              <div className="md:col-span-4 lg:max-w-[850px] md:mt-12">
                <div className="mx-auto max-w-[320px] md:max-w-[560px] lg:max-w-[680px] md:text-5xl md:text-center font-semibold leading-10">
                  <h3 className=" text-center text-3xl sm:text-4xl md:font-normal md:text-5xl">
                  Special Situation Investing
                  </h3>
                  <p className="text-center text-base md:text-base font-light mt-2 text-gray-500 leading-relaxed">
                  For qualified investors
                  </p>
                  <div className="border-b-4 border-red-500 rounded-full w-24 mt-4 mx-auto"></div>
                </div>

                
                {/* Image Section */}
              <div className="mt-6 md:hidden">
                <div className="w-2/3 md:w-4/5 mx-auto text-center">
                  <Image
                    src="/assets/ShipA.jpg"
                                    alt="Ship"
                    width={300}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>
                <div className="mt-8 px-6 sm:px-12 sm:max-w-[480px] mx-auto md:ml-8 md:max-w-[820px] lg:max-w-[1020px]">
                <p className="text-sm md:text-sm font-light text-gray-500 leading-relaxed">
                  <span className="font-semibold text-gray-600">
                  Exigent Capital Group
                  </span>{" "}
                  leverages a proprietary investment pipeline, strong
            underwriting capabilities, and a world-class network of
            strategic relationships to deliver timely and thematic
            investment products to a global investor base.
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  We provide a range of services that include:
                </p>
              </div>
              </div>
              
              
              {/* Image Section */}
              <div className="hidden md:block md:col-span-2" >
                <div className="md:w-[350px] mx-auto">
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

      
      </div>

{/* Services Grid */}
<div className="max-w-[350px] mx-auto md:pl-16 md:grid md:grid-cols-3 md:max-w-6xl mt-8 md:mt-4 text-center md:align-top md:gap-0 px-2 md:px-0 lg:max-w-[1060px] lg:px-20 md:divide-y-0 md:divide-x-2 divide-slate-600 text-gray-900">
  {[
    "Secondaries, GP Stakes, Growth Equity and Real Estate",
                        "Structured as Single-Asset SPVs, Funds and Co-Investment Vehicles",
                        "Geographic Coverage of North America, Europe/UK and Israel",
  ].map((service, index) => (
    <div
      key={index}
      className={`${lato.className} flex flex-col items-center align-items-center my-10 px-4  md:my-4 h-8`}
    >
      <h1 className="font-sans text-sm md:text-xs px-2 md:align-text-bottom"> {service} <p className={`border-b-2 mx-auto mt-4 border-slate-700 w-20 md:border-b-0 ${
          index === 2 ? "border-none" : ""
        }`}></p></h1>
    </div>
  ))}
</div>

<Investments />
       {/* Disclaimer */}
       <div className={lato.className}>
          <h1 className="mx-auto max-w-[380px] md:max-w-[500px] text-center py-32 px-8 italic font-light font-sans text-gray-400 text-xs">
            Services provided by Exigent Family Office Ltd. (Israel) in conjunction with professional third parties.
          </h1>
        </div>
    </div>
  );
};

export default Special;
