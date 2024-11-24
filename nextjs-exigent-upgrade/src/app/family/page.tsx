import React from 'react'
import {Bodoni_Moda, Lato} from 'next/font/google'

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
})
const lato = Lato({
  weight: ['300', '700'],
  style: ['normal', 'italic'],
})

const Family = () => {
  return (
    <div>
      <div className="max-w-8xl mt-10">
        <div className="grid grid-cols-5">
          <div className="col-span-3">
            <div className="mt-8">
              <div className="text-5xl text-center font-semibold leading-10">
                <h3 className="font-normal">Family Office</h3>
                <p className="text-lg font-light mt-4 text-gray-500 leading-relaxed">
                  For high-net-worth families
                </p>
              </div>

              <div className="border-b-4 border-red-500 rounded-full w-24 mt-4 mx-auto"></div>
              <div className="mt-12 ml-64 max-w-[620px] mx-auto">
                <p className="text-base font-light text-gray-500 leading-relaxed">
                  <span className="font-semibold text-gray-600">Exigent Family Office</span> is
                  purpose-built for families who are seeking to create a stronger alignment between
                  their capital and their values.
                </p>
                <p className="mt-6 text-base text-gray-500">
                  {' '}
                  We provide a range of services that include:
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <img src="/assets/Birds.png" alt="Map" className="w-3/5" />
          </div>
          
        </div>
        <div className="mx-auto pl-24 grid grid-cols-6 max-w-6xl mt-12 text-center divide-x-2 divide-slate-600 align-top text-gray-700">
          <div className={lato.className}>
            <h1 className="font-sans text-sm">Investment and Wealth Management</h1>
          </div>
          <div className={lato.className}>
            <h1 className="font-sans text-[14px] px-2">
              Comprehensive Reporting
            </h1>
          </div>
          <div className={lato.className}>
            <h1 className="font-sans text-sm px-4">Tax and Estate Planning</h1>
          </div>
          <div className={lato.className}>
            <h1 className="font-sans text-sm px-6">Philanthropic Advisory</h1>
          </div>
          <div className={lato.className}>
            <h1 className="font-sans text-sm px-2">
            Family Governance and Succession Planning
            </h1>
          </div>
          <div className={lato.className}>
            <h1 className="font-sans text-sm px-6">Networking and Unique Events</h1>
          </div>
        </div>
      </div>
      <div>
      <div className="mt-16 text-center mx-auto justify-items-center">
      <div className="mt-8 mb-12">
                <span className="hover:bg-red-500 hover:text-white font-sans font-normal text-base border-2 border-gray-400 py-1 rounded-full px-6">Contact Us</span>
                </div>  
        <h3 className="text-4xl mb-4">Leadership Team</h3>
        <div className="border-b-4 border-red-500 rounded-full w-24 mt-4 mx-auto"></div>
        <div className="max-w-[350px] h-[350px]">
                  <div className={bodoni.className}>
                    <img
                      className="mt-10 w-3/5 object-contain"
                      src="/assets/team/Hoenlein.png"
                      alt="Hon. Malcolm Hoenlein"
                    />
                    <p className="text-3xl font-semibold ">Hon. Malcolm Hoenlein</p>
                    <div className={lato.className}>

                      <p className="text-[18px] italic mt-2 text-gray-600">Global Ambassador</p>
                      <p className="text-[18px] mb-12 text-gray-600">Exigent Family Office</p>
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

export default Family
