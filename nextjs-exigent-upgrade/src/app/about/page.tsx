import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:py-12 md:py-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-4">
        <section className="text-center md:col-span-5">
          <h1 className="sr-only">About Exigent</h1>
          <p className="mt-4 text-sm uppercase tracking-wider">
            e
            <span>
              <Image src="/assets/small-x.svg" alt="" width={12} height={12} className="inline px-1" />
            </span>
            igent <span className="font-sans font-light text-base normal-case">adjective</span>
          </p>
          <p className="mt-2 text-base sm:text-lg">
            ex
            <span className="text-red-500">-</span>i
            <span className="text-red-500">-</span>gent{' '}
            <span className="text-red-500">|</span> /ˈekzəjənt/ <br />
            pressing; demanding; requiring urgent attention.
          </p>
          <Image 
            src="/assets/map.svg" 
            alt="Global presence map" 
            width={36} 
            height={36} 
            className="mt-6 mx-auto"
          />
        </section>

        <div className="hidden md:block md:col-span-1" aria-hidden="true"></div>

        <section className="flex flex-col items-center md:items-start md:col-span-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left">About</h2>
            <div className="h-1 w-24 bg-red-500 rounded mt-4 mx-auto md:mx-0"></div>
          </div>
          <p className="text-base text-gray-600 mt-8 max-w-xl leading-relaxed text-center md:text-left">
            Founded in 2009 during the depths of the financial crisis. Driven by relationships, core values and a strong work ethic. Led by a team of senior executives with robust experience and expertise.
          </p>
          <p className="text-base text-gray-600 mt-4 max-w-xl leading-relaxed text-center md:text-left">
            Deploy a thesis driven approach to generate ideas and provide timely products and solutions. Ability to leverage a remarkable relationship network on behalf of our clients.
          </p>
          <Link 
            href="/contact" 
            className="mt-8 inline-block font-normal rounded-full border px-6 py-2 border-gray-400 hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </main>
  );
}

