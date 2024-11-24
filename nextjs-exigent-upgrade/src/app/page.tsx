import Link from 'next/link'
import {type SanityDocument} from 'next-sanity'
import {client} from './sanity/client'

import Firm from './components/Firm'
import BusinessCard from './components/BusinessCard'
import MeetTheTeam from './components/MeetTheTeam'
import Investments from './components/Investments'
import StrategicAdvisors from './components/StrategicAdvisors'
import Contact from './components/Contact'
import {Bodoni_Moda, Lato} from 'next/font/google'

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
})
const lato = Lato({
  weight: ['300', '700'],
  style: ['normal', 'italic'],
})

const HOME_QUERY = `*[_type == "home"]{ _id,title, subtitle, body }`
const PERSON_QUERY = `*[_type == "person" && order < 12] | order(order asc) | { _id,name,title, subtitle, description, image, slug, order }`

const options = {next: {revalidate: 30}}

export default async function Home() {
  const home = await client.fetch<SanityDocument[]>(HOME_QUERY, {}, options)
  const persons = await client.fetch<SanityDocument[]>(PERSON_QUERY, {}, options)

  console.log(home)
  return (
    <div>
      {/* Gradient Overlay */}
      <div>
        <div className="">
          <div className="_1200 w-clearfix">
            <div className="animation-wrap">
              <div className="animation-txtx">
                <img src="/assets/logo-x.svg" />
              </div>
              <div className="animation-e">
                <img src="/assets/logo-ani-e.svg" />
              </div>
              <div className="animation-txt1">
                <p className="text-center text-xl md:text-2xl lg:text-3xl max-w-screen-lg mx-auto overflow-hidden whitespace-pre-wrap">
                  traordinary People
                </p>
              </div>
              <div className="animation-txt2">
                <p className="text-center text-xl md:text-2xl lg:text-3xl max-w-screen-lg mx-auto overflow-hidden whitespace-pre-wrap">
                  emplary Values
                </p>
              </div>
              <div className="animation-txt3">
                <p className="text-center text-xl md:text-2xl lg:text-3xl max-w-screen-lg mx-auto overflow-hidden whitespace-pre-wrap">
                  ceptional Opportunities
                </p>
              </div>
              <div className="animation-txtlogo">
                <img src="/assets/logo-ani.svg" />
              </div>
            </div>

            {/* <div className="animation-wrap"> 
          <div className="animation-txtx ">
            <img src="/assets/logo-x.svg" />
          </div>
          <div className="animation-e"><img src="/assets/logo-ani-e.svg" /></div>
          <div className="animation-txt1">
            <p className="">traordinary People</p>
          </div>
          <div className="animation-txt2">
            <p>emplary Values</p>
          </div>
          <div className="animation-txt3">
            <p>ceptional Opportunities</p>
          </div>
          
      
          <div className="animation-txtlogo">
            <img src="/assets/logo-ani.svg" />
          </div>
        </div> */}
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="mt-36 text-center mx-auto max-w-5xl">
        <div className="justify-items-center mx-auto max-w-2xl">
          <h3 className="text-[22px] text-gray-400">
            Exigent is a diversified financial services company with three distinct businesses.
          </h3>

          <div className="head-small-red-line h-[3px] w-[120px] bg-red-500 rounded mx-auto mt-4"></div>
        </div>
      </div>
      <BusinessCard />
      <MeetTheTeam persons={persons} />
      <Investments />
      <StrategicAdvisors />
      <Firm />
      <Contact />
    </div>
  )
}
