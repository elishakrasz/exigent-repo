import { Bodoni_Moda, Lato } from 'next/font/google';
import Image from 'next/image';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
});

const lato = Lato({
  weight: ['300', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const StrategicAdvisors = () => {
  return (
    <div className="mt-36 text-center mx-auto justify-items-center max-w-5xl">
      <h3 className="text-3xl justify-self-center mb-4">
        Strategic Advisors & Domain Experts
      </h3>
      <div className="redline justify-self-center mb-8 h-[3px] w-[120px] bg-red-500 rounded"></div>

      <div className="mt-8 max-w-[300px] mx-auto lg:max-w-6xl md:grid md:grid-cols-11 md:gap-4">
        {/* Sir General Nick Carter */}
        <div className="my-6 col-span-4 border border-gray-300 px-2">
          <div className={bodoni.className}>
            <div className="mt-10 w-3/5 mx-auto">
              <Image
                src="/assets/team/Carter.png"
                alt="Sir General Nick Carter"
                width={200}
                height={200}
              />
            </div>
            <p className="text-3xl mt-2 font-normal">Sir General Nick Carter</p>
            <div className={lato.className}>
              <p className="text-[18px] italic mt-2 text-gray-600">Strategic Advisory</p>
              <p className="text-[18px] mb-12 text-gray-600">Aerospace & Defence</p>
            </div>
          </div>
        </div>

        {/* Dr. Elie David */}
        <div className="my-6 col-span-3 border border-gray-300 px-2">
          <div className={bodoni.className}>
            <div className="mt-14 mx-auto w-[188px]">
              <Image
                src="/assets/team/David.png"
                alt="Dr. Elie David"
                width={188}
                height={188}
              />
            </div>
            <p className="text-3xl mt-4 font-normal">Dr. Elie David</p>
            <div className={lato.className}>
              <p className="text-[18px] italic mt-2 text-gray-600">Strategic Advisory</p>
              <p className="text-[18px] mb-12 text-gray-600">Artificial Intelligence</p>
            </div>
          </div>
        </div>

        {/* Hon. Malcolm Hoenlein */}
        <div className="col-span-4 border border-gray-300 px-2">
          <div className={bodoni.className}>
            <div className="mt-10 w-3/5 mx-auto">
              <Image
                src="/assets/team/Hoenlein.png"
                alt="Hon. Malcolm Hoenlein"
                width={200}
                height={200}
              />
            </div>
            <p className="text-2xl md:text-3xl mt-2 font-normal">Hon. Malcolm Hoenlein</p>
            <div className={lato.className}>
              <p className="text-[16px] md:text-[18px] italic mt-2 text-gray-600">Global Ambassador</p>
              <p className="text-[16px] md:text-[18px] mb-12 text-gray-600">Exigent Family Office</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicAdvisors;
