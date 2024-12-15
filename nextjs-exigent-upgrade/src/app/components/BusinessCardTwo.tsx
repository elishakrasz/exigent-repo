import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./utilities/Button";


const BusinessSectionTwo = () => {
  return (
    <div className="text-center mx-auto max-w-[460px] mt-10 px-4 md:max-w-3xl lg:max-w-4xl lg:mt-14 xl:max-w-5xl xl:mt-24">
      {/* Header Section */}
      {/* <div className="mb-16">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700">
          Exigent is a diversified financial services company with three distinct businesses.
        </h3>
        <div className="h-[3px] w-[120px] bg-red-500 rounded mx-auto mt-6"></div>
      </div> */}

      {/* Business Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-2 ">
        {/* Family Office */}
        <div className="flex flex-col items-center">
          <h4 className="text-3xl font-semibold text-gray-800 md:text-xl lg:text-2xl xl:text-2xl">Family Office</h4>
          <p className="text-sm text-gray-500 mt-2">For high-net-worth families</p>
          <Image
            src="/assets/Birds.png"
            alt="Family Office"
            width={200}
            height={200}
            className="mt-6 md:mt-5 w-2/3 object-contain"
          />
        <Button />
        </div>

        {/* Investment Products */}
        <div className="mt-6 flex flex-col items-center md:mt-0">
          <h4 className="text-3xl font-semibold text-gray-800 md:text-xl lg:text-2xl xl:text-2xl">Investment Products</h4>
          <p className="text-sm text-gray-500 mt-2">For qualified investors</p>
          <Image
            src="/assets/ShipA.jpg"
            alt="Investment Products"
            width={200}
            height={200}
            className="mt-6 md:mt-1 w-2/3 object-contain"
          />
          
        <Button />
        </div>

        {/* Strategic Advisory */}
        <div className="mt-6 flex flex-col items-center md:mt-0">
          <h4 className="text-3xl  font-semibold text-gray-800 md:text-xl lg:text-2xl xl:text-2xl">Strategic Advisory</h4>
          <p className="text-sm text-gray-500 mt-2">For businesses and corporates</p>
          <Image
            src="/assets/Cufflink.jpg"
            alt="Strategic Advisory"
            width={200}
            height={200}
            className="mt-6 md:mt-5 w-[60%] object-contain"
          />
         <Button />
        </div>
      </div>
    </div>
  );
};

export default BusinessSectionTwo;
