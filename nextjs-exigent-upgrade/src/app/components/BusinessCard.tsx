import Link from "next/link";
import Image from "next/image";

const BusinessCard = () => {
  return (
    <div className="px-8 max-w-[380px] sm-max-w-[480px] md:max-w-[840px] lg:max-w-[920px] xl:max-w-[10060] mt-12 mx-auto text-center grid grid-cols-1 lg:grid-cols-3 lg:gap-2">
      {/* Family Office Section */}
      <div className="" >
        <h1 className="text-2xl font-semibold">Family Office</h1>
        <p className="text-gray-400 text-base mt-2 md:mt-0">For high-net-worth families</p>
        <div className="w-2/3 mt-8 mx-auto md:w-1/2 lg:w-2/3">
          <Image
            src="/assets/Birds.png"
            alt="Family Office"
            width={300}
            height={200}
            className="rounded-lg object-cover"
          />
        </div>
        <Link
          href="/family"
          className="text-sm inline-block mt-4 hover:bg-red-600 hover:text-white font-sans font-normal md:text-base border-2 border-gray-400 py-1 rounded-full px-6"
        >
          Learn more
        </Link>
      </div>

      {/* Investment Products Section */}
      <div className="py-4 md:mt-4 lg:py-0 lg:mt-0">
        <h1 className="text-2xl font-semibold">Investment Products</h1>
        <p className="text-gray-400 text-base mt-2 md:mt-0">
          For well-qualified investors
        </p>
        <div className="w-2/3 mx-auto md:w-[275px] lg:w-2/3 lg:mt-2">
          <Image
            src="/assets/ShipA.jpg"
            alt="Investment Products"
            width={300}
            height={224}
            className="rounded-lg object-cover"
          />
        </div>
        <Link
          href="/special"
          className="text-sm mt-4 inline-block  hover:bg-red-600 hover:text-white font-sans font-normal md:text-base border-2 border-gray-400 py-1 rounded-full px-6"
        >
          Learn more
        </Link>
      </div>

      {/* Strategic Advisory Section */}
      <div className="md:mt-4 lg:py-0 lg:mt-0">
        <h1 className="text-2xl font-semibold">Strategic Advisory</h1>
        <p className="text-gray-400 text-base mt-2 md:mt-0">
          For businesses and corporates
        </p>
        <div className="w-2/3 px-[14px] mt-6 mx-auto  md:w-[275px] lg:w-[180px] lg:mt-6 xl:w-[224px] xl:mt-10">
          <Image
            src="/assets/Cufflink.jpg"
            alt="Strategic Advisory"
            width={300}
            height={208}
            className="rounded-lg object-cover"
          />
        </div>
        <Link
          href="/strategic"
          className="text-sm mt-4 inline-block md:mt-8 lg:mt-8 xl:mt-6 hover:bg-red-600 hover:text-white font-sans font-normal md:text-base border-2 border-gray-400 py-1 rounded-full px-6"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default BusinessCard;
