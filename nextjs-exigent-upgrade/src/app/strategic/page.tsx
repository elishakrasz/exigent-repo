import Image from 'next/image';
import { Bodoni_Moda, Lato } from 'next/font/google';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
});

const lato = Lato({
  weight: ['300', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const Strategic = () => {
  return (
    <div className="text-center mx-auto max-w-6xl">
      {/* Main Section */}
      <div className="max-w-7xl mt-10">
        <div>
          {/* Text Section */}
          <div className="md:grid md:grid-cols-6 mt-8">
            <div className="md:col-span-4">
              <div className="md:text-5xl text-center font-semibold leading-10">
                <h3 className="text-3xl sm:text-4xl md:font-normal">
                  Strategic Advisory
                </h3>
                <p className="text-base md:text-lg font-light mt-2 text-gray-500 leading-relaxed">
                  For business owners and management teams
                </p>
              </div>

              <div className="border-b-4 border-red-500 rounded-full w-24 mt-4 mx-auto"></div>

              {/* Image Section for Small Screens */}
              <div className="mt-6 md:hidden">
                <div className="w-1/2 md:w-4/5 mx-auto">
                  <Image
                    src="/assets/Cufflink.jpg"
                    alt="Cufflink"
                    width={500}
                    height={400}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="mt-8 px-12 md:ml-24 md:max-w-[820px]">
                <p className="text-base text-left font-light text-gray-500 leading-relaxed">
                  <span className="font-semibold text-gray-600">
                    Exigent Strategic Advisors
                  </span>{' '}
                  is a boutique consulting practice that combines the full power of our investment platform,
                  in-house domain experts, and global relationship network.
                </p>
                <p className="mt-6 text-base text-left text-gray-500">
                  We provide a range of services that include:
                </p>
              </div>
            </div>

            {/* Image Section for Medium and Larger Screens */}
            <div className="hidden md:block md:col-span-2">
              <div className="md:w-full mx-auto">
                <Image
                  src="/assets/Cufflink.jpg"
                  alt="Cufflink"
                  width={500}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="text-center md:max-w-4xl md:grid md:grid-cols-3 md:gap-6 mt-8 mx-auto divide-y-0 md:divide-y-0 md:divide-x-2 divide-slate-600 text-gray-900 md:align-top">
          {[
            'Strategic Capital Formation',
            'Business Planning, Operational Strategy, Commercial Expansion',
            'Placement of Directors and Board Members',
          ].map((service, index, arr) => (
            <div
              key={index}
              className={`${lato.className} flex flex-col justify-center items-center px-6 py-4 ${
                index === arr.length - 1 ? 'md:border-0' : ''
              }`}
            >
              <h1 className="font-sans text-sm">{service}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership Section */}
      <div className="mt-10 text-center mx-auto justify-items-center">
        <div className="mt-8 mb-12">
          <span className="hover:bg-red-500 hover:text-white font-sans font-normal text-base border-2 border-gray-400 py-1 rounded-full px-6">
            Contact Us
          </span>
        </div>
        <h3 className="text-4xl mb-4">Leadership Team</h3>
        <div className="border-b-4 border-red-500 rounded-full w-24 mt-4 mx-auto"></div>

        {/* Leadership Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mt-8 mx-auto">
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
                className="mt-10 w-3/5 object-contain mx-auto"
                src={leader.imgSrc}
                alt={leader.name}
                width={200}
                height={200}
              />
              <p className="text-3xl font-normal mt-2">{leader.name}</p>
              <div className={lato.className}>
                <p className="text-[18px] italic mt-2 text-gray-600">
                  {leader.title}
                </p>
                <p className="text-[18px] mb-12 text-gray-600">
                  {leader.expertise}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className={lato.className}>
          <h1 className="py-32 italic font-light font-sans text-gray-400 text-sm">
            Services provided by Exigent Family Office Ltd. (Israel) in conjunction with professional third parties.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Strategic;
