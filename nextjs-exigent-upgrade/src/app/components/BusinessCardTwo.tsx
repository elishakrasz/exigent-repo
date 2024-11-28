import React from "react";
import Image from "next/image";
import Link from "next/link";


const BusinessSectionTwo = () => {
  return (
    <div className="text-center mx-auto mt-14 px-4 md:px-10 lg:px-20 max-w-7xl">
      {/* Header Section */}
      {/* <div className="mb-16">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700">
          Exigent is a diversified financial services company with three distinct businesses.
        </h3>
        <div className="h-[3px] w-[120px] bg-red-500 rounded mx-auto mt-6"></div>
      </div> */}

      {/* Business Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Family Office */}
        <div className="flex flex-col items-center">
          <h4 className="text-lg font-semibold text-gray-800">Family Office</h4>
          <p className="text-sm text-gray-500 mt-2">For high-net-worth families</p>
          <Image
            src="/assets/Birds.png"
            alt="Family Office"
            width={200}
            height={200}
            className="mt-6 w-2/3 object-contain"
          />
          <Link
          href="/family"
          className="text-sm inline-block mt-4 hover:bg-red-600 hover:text-white font-sans font-normal md:text-base border-2 border-gray-400 py-1 rounded-full px-6"
        >
          Learn more
        </Link>
        </div>

        {/* Investment Products */}
        <div className="flex flex-col items-center">
          <h4 className="text-lg font-semibold text-gray-800">Investment Products</h4>
          <p className="text-sm text-gray-500 mt-2">For well-qualified investors</p>
          <Image
            src="/assets/ShipA.jpg"
            alt="Investment Products"
            width={200}
            height={200}
            className="mt-6 w-2/3 object-contain"
          />
          <Link
          href="/family"
          className="text-sm inline-block mt-4 hover:bg-red-600 hover:text-white font-sans font-normal md:text-base border-2 border-gray-400 py-1 rounded-full px-6"
        >
          Learn more
        </Link>
        </div>

        {/* Strategic Advisory */}
        <div className="flex flex-col items-center">
          <h4 className="text-lg font-semibold text-gray-800">Strategic Advisory</h4>
          <p className="text-sm text-gray-500 mt-2">For businesses and corporates</p>
          <Image
            src="/assets/Cufflink.jpg"
            alt="Strategic Advisory"
            width={200}
            height={200}
            className="mt-6 w-2/3 object-contain"
          />
         <Link
          href="/family"
          className="text-sm inline-block mt-4 hover:bg-red-600 hover:text-white font-sans font-normal md:text-base border-2 border-gray-400 py-1 rounded-full px-6"
        >
          Learn more
        </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessSectionTwo;
