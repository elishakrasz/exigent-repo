


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

const Strategic = () => {
  return (
    <div>
      {/* Main Section */}
      <div className="max-w-7xl lg:max-w-[1000px] lg:mx-auto mt-10">
        <div className="">
          {/* Text Section */}
          <div className="">
            <div className="md:grid md:grid-cols-6 mt-8">
              <div className="md:col-span-4 lg:max-w-[850px] md:mt-12">
                <div className="md:text-5xl md:text-center font-semibold leading-10">
                  <h3 className="text-center text-3xl sm:text-4xl md:font-normal md:text-5xl">
                  Strategic Advisory
                  </h3>
                  <p className="text-center text-base md:text-base font-light mt-2 text-gray-500 leading-relaxed">
                  For business owners and management teams
                  </p>
                  <div className="border-b-4 border-red-500 rounded-full w-24 mt-4 mx-auto"></div>
                </div>

                
                {/* Image Section */}
              <div className="mt-6 md:hidden">
                <div className="w-2/3 md:w-4/5 mx-auto text-center">
                  <Image
                    src="/assets/Cufflink.jpg"
                  alt="Cufflink"
                    width={300}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>
                <div className="mt-8 px-6 sm:px-12 sm:max-w-[480px] mx-auto md:ml-8 md:max-w-[820px] lg:max-w-[1020px]">
                <p className="text-sm md:text-sm font-light text-gray-500 leading-relaxed">
                  <span className="font-semibold text-gray-600">
                  Exigent Strategic Advisors
                  </span>{" "}
                  is a boutique consulting practice that combines the full power of our investment platform,
                  in-house domain experts, and global relationship network.
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
                    src="/assets/Cufflink.jpg"
                    alt="Cufflink"
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
<div className="mx-auto md:pl-16 md:grid md:grid-cols-4 md:max-w-6xl mt-8 md:mt-4 text-center md:align-top md:gap-0 px-2 md:px-0 lg:max-w-[1060px] lg:px-20 md:divide-y-0 md:divide-x-2 divide-slate-600 text-gray-900">
  {[
    'Strategic Capital Formation',
                    'Business Planning & Operational Strategy',
                    'Commercial Expansion',
                    'Placement of Directors and Board Members',
  ].map((service, index) => (
    <div
      key={index}
      className={`${lato.className} flex flex-col items-center align-items-center my-8 md:my-4 h-8`}
    >
      <h1 className="font-sans text-sm md:text-xs px-2 md:align-text-bottom"> {service} <p className={`border-b-2 mx-auto mt-6 border-slate-700 w-16 md:border-b-0 ${index === 3 ? "border-b-0 md:border-b-0" : ""} `}></p></h1>
    </div>
  ))}
</div>

      {/* Leadership Section */}
      <div>
      <div className="mt-6 text-center mx-auto justify-items-center">
        <Link
          href="/contact"
          className="text-sm inline-block md:mt-8 hover:bg-[#F5101E] hover:text-white font-sans font-normal md:text-sm border-2 border-gray-400 py-1 rounded-full px-6"
        >
          Contact Us
        </Link>
        <h3 className="text-4xl mt-14 mb-4 md">Leadership Team</h3>
        <div className="border-b-4 border-red-500 rounded-full w-24 mt-4 mx-auto"></div>

        {/* Leadership Profiles */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl md:mt-8 mx-auto lg:max-w-[780px]">
          {[
            {
              imgSrc: '/assets/team/Carter.png',
              name: 'Sir General Nick Carter',
              title: 'Strategic Advisory',
              expertise: 'Aerospace & Defence',
            },
            {
              imgSrc: '/assets/team/David.png',
              name: 'Dr. Eli David',
              title: 'Strategic Advisory',
              expertise: 'Artificial Intelligence',
            },
          ].map((leader, index) => (
            <div key={index} className={`${bodoni.className} text-center`}>
              <Image
                className="w-1/3 md:mt-10 md:w-1/2 object-contain mx-auto"
                src={leader.imgSrc}
                alt={leader.name}
                width={200}
                height={200}
              />
              <p className="text-2xl md:text-3xl font-normal mt-2">{leader.name}</p>
              <div className={lato.className}>
                <p className="text-[18px] italic mt-2 text-gray-600">
                  {leader.title}
                </p>
                <p className="text-[18px] mb-6 text-gray-600">
                  {leader.expertise}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className={lato.className}>
          <h1 className="py-32 px-8 italic font-light font-sans text-gray-400 text-xs">
            Services provided by Exigent Family Office Ltd. (Israel) in conjunction with professional third parties.
          </h1>
        </div>
      </div>

       
      </div>
    </div>
  );
};

export default Strategic;