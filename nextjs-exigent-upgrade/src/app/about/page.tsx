import Image from "next/image";
import { Bodoni_Moda, Lato } from 'next/font/google';
import Link from 'next/link';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
});

const lato = Lato({
  weight: ['300', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});


export default function About() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:py-12 md:py-16">
      <div className="grid grid-cols-1 gap-8 md:px-16 md:grid-cols-12 md:gap-4">
        <section className="text-center md:col-span-5">
          <h1 className="sr-only">About Exigent</h1>
          <p  className={`${bodoni.className} bodoni inline px-1 mt-4 text-3xl tracking-wider`}>
            e
            <span>
              <Image src="/assets/small-x.svg" alt="" width={12} height={12} />
            </span>
            igent <span className="font-sans font-light text-base normal-case">adjective</span>
          </p>
          <p className="mt-2 text-sm ">
            ex
            <span className="text-red-500">-</span>i
            <span className="text-red-500">-</span>gent{' '}
            <span className="text-red-500">|</span> /ˈekzəjənt/ <br />
            pressing; demanding; requiring urgent attention.
          </p>
          <Image 
            src="/assets/map.svg" 
            alt="Global presence map" 
            width={360} 
            height={360} 
            className="mt-6 mx-auto"
          />
        </section>

        <div className="hidden md:block md:col-span-1" aria-hidden="true"></div>

        <section className="flex flex-col items-center md:items-start md:col-span-6">
          <div>
            <h2 className="text-4xl sm:text-4xl md:text-4xl font-normal text-center md:text-left">About</h2>
            <div className="h-1 w-24 bg-red-500 rounded mt-4 mx-auto md:mx-0"></div>
          </div>
          <p className="text-sm text-gray-600 mt-8 max-w-xl leading-relaxed text-center md:text-left">
            Founded in 2009 during the depths of the financial crisis. Driven by relationships, core values and a strong work ethic. Led by a team of senior executives with robust experience and expertise.
          </p>
          <p className="text-sm text-gray-600 mt-4 max-w-xl leading-relaxed text-center md:text-left">
            Deploy a thesis driven approach to generate ideas and provide timely products and solutions. Ability to leverage a remarkable relationship network on behalf of our clients.
          </p>
          <Link 
            href="/contact" 
            className="mt-8 inline-block text-sm  rounded-full border px-6 py-1 border-gray-400 hover:bg-[#F90002] hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </main>
  );
}

