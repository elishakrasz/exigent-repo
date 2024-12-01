import React from "react";
import Image from "next/image";
import Link from "next/link";


const BusinessSectionTwo = () => {
  return (
    <div className="">
      {/* Header Section */}

      {/* Business Cards Section */}
      <div className="">
        {/* Family Office */}
        <div className="">
          <h4 className="">Family Office</h4>
          <p className="">For high-net-worth families</p>
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
        <div className="">
          <h4 className="">Investment Products</h4>
          <p className="">For well-qualified investors</p>
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
        <div className="">
          <h4 className="">Strategic Advisory</h4>
          <p className="">For businesses and corporates</p>
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
