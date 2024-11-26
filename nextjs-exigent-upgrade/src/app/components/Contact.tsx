import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="mt-28 text-center mx-auto justify-items-center">
      <h3 className="text-5xl mb-4">Contact</h3>
      <div className="h-[3px] w-[120px] bg-red-500 rounded mx-auto mb-24"></div>
      <div className="grid grid-cols-3 gap-16">
        {/* Locations */}
        <div className="text-left">
          <div>
            <h1 className="text-lg font-normal font-sans">Jerusalem</h1>
            <p className="text-base font-light font-sans">Wyndham Deeds Street #5</p>
            <p className="mb-8">Jerusalem, Israel</p>

            <h1 className="text-lg font-normal font-sans">Herzliya</h1>
            <p className="text-base font-light font-sans">Arik Einstein #3</p>
            <p className="text-base font-light font-sans mb-36">Herzliya, Israel</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-left">
          <div>
            <p className="text-base">Israel 972-2-500-9450</p>
            <p className="mb-8 text-base">US 1-646-506-9450</p>
            <h1 className="text-base text-red-500 font-sans font-light">
              info@exigentcap.com
            </h1>
          </div>
        </div>

        {/* Social and Contact Icons */}
        <div className="flex space-x-3">
          <Link
            href="https://www.linkedin.com/company/exigentcapitalgroup/"
            className="mr-4 group relative"
            target="_blank"
          >
            <Image
              src="/assets/LinkedIn.png"
              alt="LinkedIn"
              width={112}
              height={28}
              className="transition-opacity duration-100 group-hover:opacity-0"
            />
            <Image
              src="/assets/RedLinkedIn.png"
              alt="LinkedIn Red"
              width={112}
              height={28}
              className="absolute top-0 left-0 transition-opacity duration-100 opacity-0 group-hover:opacity-100"
            />
          </Link>
          <Link
            href="mailto:info@exigentcapitalgroup.com"
            className="mr-4 group relative"
          >
            <Image
              src="/assets/Email.png"
              alt="Email Icon"
              width={24}
              height={24}
              className="transition-opacity duration-100 group-hover:opacity-0"
            />
            <Image
              src="/assets/RedMail.png"
              alt="Red Email Icon"
              width={24}
              height={24}
              className="absolute top-0 left-0 transition-opacity duration-100 opacity-0 group-hover:opacity-100"
            />
          </Link>
          <Link
            href="tel:info@exigentcapitalgroup.com"
            className="mr-4 group relative"
          >
            <Image
              src="/assets/Phone Icon.png"
              alt="Phone Icon"
              width={16}
              height={16}
              className="transition-opacity duration-100 group-hover:opacity-0"
            />
            <Image
              src="/assets/RedPhone.png"
              alt="Red Phone Icon"
              width={16}
              height={16}
              className="absolute top-0 left-1 transition-opacity duration-100 opacity-0 group-hover:opacity-100"
            />
          </Link>
          <Link
            href="mailto:info@exigentcapitalgroup.com"
            className="mr-4 group relative"
          >
            <Image
              src="/assets/Location Icon.png"
              alt="Location Icon"
              width={16}
              height={16}
              className="transition-opacity duration-100 group-hover:opacity-0"
            />
            <Image
              src="/assets/RedLocation.png"
              alt="Red Location Icon"
              width={16}
              height={16}
              className="absolute top-0 left-1 transition-opacity duration-100 opacity-0 group-hover:opacity-100"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
