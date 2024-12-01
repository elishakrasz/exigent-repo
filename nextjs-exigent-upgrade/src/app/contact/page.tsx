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
        <div className="mt-2 space-x-2">
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
              className="w-20 md:w-24"
            />
          </Link>
          <Image
            src="/assets/Email.png"
            alt="Email Icon"
            width={24}
            height={24}
            className="w-4 md:w-6 transition-opacity duration-100"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1  md:grid md:grid-cols-12 md:gap-2 pt-8 mx-auto md:max-w-7xl">
        
        <div className='md:col-span-1'/>
        {/* Left Section: Image */}
        <div className="items-center text-center max-auto md:col-span-4">
          <Image
            src="/assets/Bunting.jpeg"
            alt="Bunting"
            width={400}
            height={300}
            className="w-3/4 md:w-full"
          />
        </div>

        

        {/* Right Section: Contact Details */}
        <div className="text-center md:col-span-6 ">
          <h1 className={`${lato.className} text-lg font-normal mt-8`}>Be in touch</h1>
          <div className="md:grid md:grid-cols-2 md:text-right md:mt-6 mb-8">
            <div className={lato.className}>
              <p className="text-base">Israel 972-2-500-9450</p>
              <p className="md:mb-8 text-base">US 1-646-506-9450</p>
            </div>
            <h1 className="text-base text-red-500 font-sans font-light md:text-left md:ml-10">
              info@exigentcap.com
            </h1>
          </div>

          {/* Offices Section */}
          <h1 className={`${lato.className} text-lg font-normal`}>Offices</h1>
          <div className="border-b-4 border-red-500 rounded-full mt-2 w-12 mx-auto"></div>

          <div className="grid grid-cols-2 gap-4 text-right mt-6">
            {/* Jerusalem Office */}
            <div className={lato.className}>
              <p className="text-lg font-normal">Jerusalem</p>
              <p className="text-base">Wyndham Deedes #5</p>
              <p className="text-base">Jerusalem, Israel</p>
            </div>

            {/* Herzliya Office */}
            <div className="text-left pl-6 pb-36">
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
