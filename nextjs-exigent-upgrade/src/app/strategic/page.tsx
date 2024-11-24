import Image from 'next/image';
import {Bodoni_Moda, Lato} from 'next/font/google'

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
})
const lato = Lato({
  weight: ['300', '700'],
  style: ['normal', 'italic'],
})

const Strategic = () => {
  return (
    
    <div className="text-center mx-auto max-w-6xl">
      <div className="grid grid-cols-2">
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
              boutique consultuing pratice that combines the full power of our investment platform,
              in house domain experts and global relationship network.
            </h1>
            <h1 className="font-sans text-gray-600 font-light mt-4">
              We provide a range of services that include:
            </h1>
          </div>
        </div>
        <div>
          <img className="w-2/3" src="/assets/Cufflink.jpg" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-4 max-w-[940px] divide-x-2 divide-slate-600 ml-20 text-center align-top">
        <div className={lato.className}>
            <h1 className='font-sans text-sm p-4'>Strategic Capital Formation</h1>
        </div>
        <div className={lato.className}>
            <h1 className='font-sans text-sm p-4'>Business Planning, Operational Strategy, Commercial Expansion</h1>
        </div>
        <div className={lato.className}>
            <h1 className='font-sans text-sm p-4'>Placement of Directors and Board Members</h1>
        </div>
      </div>
      <div>
      <div className="mt-16 text-center mx-auto justify-items-center">
      <div className="mt-8 mb-12">
                <span className="hover:bg-red-500 hover:text-white font-sans font-normal text-base border-2 border-gray-400 py-1 rounded-full px-6">Contact Us</span>
                </div>  
        <h3 className="text-4xl mb-4">Leadership Team</h3>
        <div className="border-b-4 border-red-500 rounded-full w-24 mt-4 mx-auto"></div>
        <div className="max-w-3xl mt-8">
          <div className='flex'>
          <div className={bodoni.className}>
                    <img
                      className="mt-10 w-3/5 object-contain"
                      src="/assets/team/Carter.png"
                      alt="Hon. Malcolm Hoenlein"
                    />
                    <p className="text-3xl font-normal ">Sir General Nick Carter</p>
                    <div className={lato.className}>

                      <p className="text-[18px] italic mt-2 text-gray-600">Strategic Advisory</p>
                      <p className="text-[18px] mb-12 text-gray-600">Aerospace & Defence</p>
                    </div>
                  </div>

                  <div className={bodoni.className}>
                    <img
                      className="mt-10 w-3/5 object-contain"
                      src="/assets/team/David.png"
                      alt="Hon. Malcolm Hoenlein"
                    />
                    <p className="text-3xl font-normal ">Dr. Eli David</p>
                    <div className={lato.className}>

                      <p className="text-[18px] italic mt-2 text-gray-600">Strategic Advisory</p>
                      <p className="text-[18px] mb-12 text-gray-600">Artificial Intelligence</p>
                    </div>
                  </div>
          </div>
                 
                  
                </div>
                <div className={lato.className}>
                <h1 className='py-32 italic font-light font-sans text-gray-400 text-sm'>Services provided by Exigent Family Office Ltd. (Israel) in conjunction with profiessional third parties.</h1>
                </div>
                
        </div>
      </div>
      
    </div>
  )
}

export default Strategic
