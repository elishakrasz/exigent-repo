import Link from "next/link"

export default function About() {
  return (
    <div className="grid grid-cols-12 gap-4 mx-auto max-w-6xl">
      <div className="exigent-name-wrap text-center py-10 col-span-5">
        <p className="mt-4 v-small-head tracking-wider">
          e
          <span>
            <img src="../../../assets/small-x.svg" alt="x" className="inline px-1" />
          </span>
          igent <span className="font-sans font-light text-lg">adjective</span>
        </p>
        <p>
          ex
          <span className="text-red-500">-</span>i
          <span className="text-red-500">-</span>gent{' '}
          <span className="text-red-500">|</span> /ˈekzəjənt/ <br />
          pressing; demanding; requiring urgent attention.
        </p>
        <img src="/assets/map.svg" alt="Map" className="mapAbout mt-6 mx-auto" />
      </div>
    <div className="col-span-1"></div>
      <div className="flex flex-col justify-center items-center col-span-6">
        <div className="ml-6">
          <div className="mt-20">
            <h3 className="text-5xl">About</h3>
            <div className="redline h-[4px] w-[120px] bg-red-500 rounded mt-6 ml-2"></div>
          </div>
          <p className="about text-[16px] text-gray-500 mt-14 max-w-full leading-relaxed">
            Founded in 2009 during the depths of the financial crisis. Driven by relationships, core values and a strong work ethic. Led by a team of senior executives with robust experience and expertise. <br />
          Deploy a thesis driven approach to generate ideas and provide timely products and solutions. Ability to leverage a remarkable relationship network on behalf of our clients.
          </p>
          
        </div>
        <div className="mt-6">
          <Link href="/contact" className="font-normal rounded-full border px-6 py-1 border-gray-400">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
