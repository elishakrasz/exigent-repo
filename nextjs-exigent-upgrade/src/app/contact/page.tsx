import Link from 'next/link';
import Image from 'next/image';
import { Lato } from 'next/font/google';


const lato = Lato({
  weight: ['300', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default async function Contact() {

  return (
    <div className="mt-12">
      {/* Contact Title Section */}
      <div className="text-center">
        <h1 className="text-5xl">Contact</h1>
        <div className="border-b-4 border-red-500 rounded-full w-24 mt-4 mx-auto"></div>
        <div className="mt-4 space-x-2">
          <Link
            href="https://www.linkedin.com/company/exigentcapitalgroup/"
            target="_blank"
            className="inline-block"
          >
            <Image
              src="/assets/LinkedIn-Logo.svg"
              alt="LinkedIn"
              width={110}
              height={30}
              className="w-[110px]"
            />
          </Link>
          <Image
            src="/assets/Email.png"
            alt="Email Icon"
            width={24}
            height={24}
            className="w-6 transition-opacity duration-100"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-12 gap-4 pt-8 mx-auto max-w-7xl">
        <div className="col-span-1"></div>

        {/* Left Section: Image */}
        <div className="col-span-4 ml-24">
          <Image
            src="/assets/Bunting.jpeg"
            alt="Bunting"
            width={400}
            height={300}
            className="w-full"
          />
        </div>

        <div className="col-span-1"></div>

        {/* Right Section: Contact Details */}
        <div className="col-span-6">
          <h1 className={`${lato.className} text-lg font-semibold`}>Be in touch</h1>
          <div className="grid grid-cols-2 gap-4 text-right mt-4 mb-8">
            <div className={lato.className}>
              <p className="text-base">Israel 972-2-500-9450</p>
              <p className="mb-8 text-base">US 1-646-506-9450</p>
            </div>
            <h1 className="text-base text-red-500 font-sans font-light">
              info@exigentcap.com
            </h1>
          </div>

          {/* Offices Section */}
          <h1 className={`${lato.className} text-lg font-semibold`}>Offices</h1>
          <div className="border-b-4 border-red-500 rounded-full w-12 mt-4 mx-auto"></div>

          <div className="grid grid-cols-2 gap-4 text-right mt-4">
            {/* Jerusalem Office */}
            <div className={lato.className}>
              <p className="text-lg font-normal">Jerusalem</p>
              <p className="text-base">Wyndham Deedes #5</p>
              <p className="text-base">Jerusalem, Israel</p>
            </div>

            {/* Herzliya Office */}
            <div className="text-left pl-6">
              <p className="text-lg font-normal">Herzliya</p>
              <p className="text-base">Arik Einstein #3</p>
              <p className="text-base">Herzliya, Israel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
