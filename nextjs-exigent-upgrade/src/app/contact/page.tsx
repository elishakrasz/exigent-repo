import '../globals.css'
import Link from 'next/link'
import {type SanityDocument} from 'next-sanity'
import {PortableText} from '@portabletext/react'
import {client} from '../sanity/client'

import {Bodoni_Moda, Lato} from 'next/font/google'

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
})
const lato = Lato({
  weight: ['300', '700'],
  style: ['normal', 'italic'],
})

const CONTACT_QUERY = `*[_type == "contact"]{ _id, tagline, email, phone, jerusalem, herzliya }`
const options = {next: {revalidate: 30}}

export default async function Contact() {
  const contactObject = await client.fetch<SanityDocument[]>(CONTACT_QUERY, {}, options)

  return (
    <div className="mt-12">
      <div className='max-auto justify-items-center'>
        <h1 className='text-5xl'>Contact</h1>
        <div className="border-b-4 border-red-500 rounded-full w-24 mt-4 mx-auto"></div>
        <div className='space-x-2'>
        <a
          href="https://www.linkedin.com/company/exigentcapitalgroup/"
          target="_blank"
          className="mt-4"
        >
          <img src="/assets/LinkedIn-Logo.svg" alt="LinkedIn" className="w-[110px]" />
        </a>
        <img
              src="/assets/Email.png"
              alt="Email Icon"
              className="w-6  transition-opacity duration-100 group-hover:opacity-0"
            />

        </div>
        
      </div>
      <div className='grid grid-cols-12 gap-4 pt-8 max-auto justify-between max-w-8xl'>
      <div className='col-span-1'></div>
        <div className='col-span-4 ml-24'>
        <img src="/assets/Bunting.jpeg" alt="Bunting" className="w-full" />
        </div>
        <div className='col-span-1'></div>
        <div className='col-span-6 max-auto justify-items-center'>
          <h1 className={lato.className}>Be in touch</h1>
          <div className='grid grid-cols-2 gap-4 text-right mt-4 mb-8'>
          <div className={lato.className}>
            <p className="text-base">Israel 972-2-500-9450</p>
            <p className="mb-8 text-base">US 1-646-506-9450</p>
          </div>
            <h1 className="text-base text-red-500 font-sans font-light">info@exigentcap.com</h1>
          </div>

          <h1 className={lato.className}>Offices</h1>
          <div className="border-b-4 border-red-500 rounded-full w-12 mt-4 mx-auto"></div>

          <div className='grid grid-cols-2 gap-4 text-right mt-4'>
          <div className={lato.className}>
            <p className="text-lg font-normal">Jerusalem</p>
            <p className="text-base">Wyndham Deedes #5</p>
            <p className="text-base">Jerusalem, Israel</p>
          </div>
          <div className="text-left pl-6">
            <p className="text-lg font-normal">Herzliya</p>
            <p className="text-base">Arik Enstein #3</p>
            <p className="text-base">Herzliya, Israel</p>
          </div>
          </div>
          <div className="">
         
        </div>
        </div>
      </div>
    
    </div>

  )
}