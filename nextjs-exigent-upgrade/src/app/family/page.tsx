import Image from "next/image";
import { Bodoni_Moda, Lato } from "next/font/google";
import Button from "../components/utilities/Button";
import Link from "next/link";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
});
const lato = Lato({
  weight: ["300", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const Family = () => {
  return (
    <div>
      {/* Main Section */}
      <div className="max-w-7xl mt-10">
        <div className="">
          {/* Text Section */}
          <div className="">
            <div className="md:grid md:grid-cols-6 mt-8">
              <div className="md:col-span-4">
                <div className="md:text-5xl md:text-center font-semibold leading-10">
                  <h3 className="text-3xl sm:text-4xl md:font-normal md:text-5xl">
                    Family Office
                  </h3>
                  <p className="text-base md:text-base font-light mt-2 text-gray-500 leading-relaxed">
                    For high-net-worth families
                  </p>
                  <div className="border-b-4 border-red-500 rounded-full w-24 mt-4 mx-auto"></div>
                </div>

                
                {/* Image Section */}
              <div className="mt-6 md:hidden">
                <div className="w-2/3 md:w-4/5 mx-auto text-center">
                  <Image
                    src="/assets/Birds.png"
                    alt="Map"
                    width={300}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>
                <div className="mt-8 px-12 md:ml-[20%] md:max-w-[820px]">
                <p className="text-sm md:text-sm font-light text-gray-500 leading-relaxed">
                  <span className="font-semibold text-gray-600">
                    Exigent Family Office
                  </span>{" "}
                  is purpose-built for families who are seeking to create a
                  stronger alignment between their capital and their values.
                </p>
                <p className="mt-6 text-sm text-gray-500">
                  We provide a range of services that include:
                </p>
              </div>
              </div>
              
              
              {/* Image Section */}
              <div className="hidden md:block md:col-span-2" >
                <div className="md:w-full mx-auto">
                  <Image
                    src="/assets/Birds.png"
                    alt="Map"
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
<div className="mx-auto  md:pl-24 md:grid md:grid-cols-6 md:max-w-6xl mt-8 text-center md:align-top md:gap-0 px-2 md:px-0 lg:max-w-5xl lg:px-8 lg:ml-20 divide-y-0 md:divide-y-0 md:divide-x-2 divide-slate-600 text-gray-900">
  {[
    "Investment and Wealth Management",
    "Comprehensive Reporting",
    "Tax and Estate Planning",
    "Philanthropic Advisory",
    "Family Governance and Succession Planning",
    "Networking and Unique Events",
  ].map((service, index) => (
    <div
      key={index}
      className={`${lato.className} flex flex-col justify-center items-center my-4 h-6`}
    >
      <h1 className="font-sans text-sm md:text-xs px-2 md:align-top"> {service}</h1>
    </div>
  ))}
</div>

      {/* Leadership Section */}
      <div>
        <div className="mt-10 mb:mt-16 text-center mx-auto justify-items-center">
          <div className="mb:mt-8 mb-12">
            <Link
              href="/contact"
              className="hover:bg-red-500 hover:text-white font-sans font-normal text-base border-2 border-gray-400 py-1 rounded-full px-6"
            >
              Contact Us
            </Link>
          </div>
          <h3 className="text-4xl mb-4">Leadership Team</h3>
          <div className="border-b-4 border-red-500 rounded-full w-24 mt-4 mx-auto"></div>

          {/* Team Member */}
          <div className="max-w-[350px] h-[350px] mx-auto">
            <div className={bodoni.className}>
              <Image
                src="/assets/team/Hoenlein.png"
                alt="Hon. Malcolm Hoenlein"
                width={210}
                height={140}
                className="mt-10 object-contain"
              />
              <p className="text-[28px] mb:text-3xl font-semibold">
                Hon. Malcolm Hoenlein
              </p>
              <div className={lato.className}>
                <p className="text-lg md:text-[18px] italic mt-2 text-gray-600">
                  Global Ambassador
                </p>
                <p className="md:text-[18px] mb-12 text-gray-600">
                  Exigent Family Office
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className={lato.className}>
            <h1 className="py-32 italic font-light font-sans text-gray-400 text-sm">
              Services provided by Exigent Family Office Ltd. (Israel) in
              conjunction with professional third parties.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Family;
