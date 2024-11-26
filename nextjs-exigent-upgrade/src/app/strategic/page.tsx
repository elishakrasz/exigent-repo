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
      <div className="grid grid-cols-2">
        {/* Text Section */}
        <div className="justify-items-center mx-auto max-w-3xl mt-10">
          <h3 className="justify-self-center text-5xl mb-4">Strategic Advisory</h3>
          <div className={lato.className}>
            <h3 className="text-[18px] font-sans text-gray-400">
              For business owners and management teams
            </h3>
          </div>
          <div className="head-small-red-line h-[3px] w-[120px] bg-red-500 rounded mx-auto mt-4"></div>
          <div className="mt-8 text-left ml-16">
            <h1 className="font-sans text-gray-600 font-light mt-16">
              <span className="font-semibold text-gray-800">Exigent Strategic Advisors</span> is a
              boutique consulting practice that combines the full power of our investment platform,
              in-house domain experts, and global relationship network.
            </h1>
            <h1 className="font-sans text-gray-600 font-light mt-4">
              We provide a range of services that include:
            </h1>
          </div>
        </div>

        {/* Image Section */}
        <div>
          <Image
            className="w-2/3 mx-auto"
            src="/assets/Cufflink.jpg"
            alt="Cufflink"
            width={500}
            height={400}
          />
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-3 max-w-[940px] divide-x-2 divide-slate-600 mx-auto mt-8 text-center align-top">
        {[
          'Strategic Capital Formation',
          'Business Planning, Operational Strategy, Commercial Expansion',
          'Placement of Directors and Board Members',
        ].map((service, index) => (
          <div key={index} className={lato.className}>
            <h1 className="font-sans text-sm p-4">{service}</h1>
          </div>
        ))}
      </div>

      {/* Leadership Section */}
      <div className="mt-16 text-center mx-auto justify-items-center">
        <div className="mt-8 mb-12">
          <span className="hover:bg-red-500 hover:text-white font-sans font-normal text-base border-2 border-gray-400 py-1 rounded-full px-6">
            Contact Us
          </span>
        </div>
        <h3 className="text-4xl mb-4">Leadership Team</h3>
        <div className="border-b-4 border-red-500 rounded-full w-24 mt-4 mx-auto"></div>

        {/* Leadership Profiles */}
        <div className="max-w-3xl mt-8 flex justify-around">
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
            <div key={index} className={bodoni.className}>
              <Image
                className="mt-10 w-3/5 object-contain mx-auto"
                src={leader.imgSrc}
                alt={leader.name}
                width={200}
                height={200}
              />
              <p className="text-3xl font-normal mt-2">{leader.name}</p>
              <div className={lato.className}>
                <p className="text-[18px] italic mt-2 text-gray-600">{leader.title}</p>
                <p className="text-[18px] mb-12 text-gray-600">{leader.expertise}</p>
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
