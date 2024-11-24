import {urlForImage} from '../sanity/client'
import {Bodoni_Moda, Lato} from 'next/font/google'
import { type SanityDocument } from "next-sanity";
import { PortableText } from '@portabletext/react';
import {client} from '../sanity/client'
import Link from 'next/link'



const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
})
const lato = Lato({
  weight: ['300', '700'],
  style: ['normal', 'italic'],
})

const PERSON_QUERY = `*[_type == "person" && order < 13] | order(order asc) | { _id,name,title, subtitle, description, image, slug, order }`
const OTHER_QUERY = `*[_type == "person" && order > 12] | order(order asc) | { _id,name,title, subtitle, description, image, order }`

const options = {next: {revalidate: 30}}

export default async function Team() {
    const persons = await client.fetch<SanityDocument[]>(PERSON_QUERY, {}, options)
    const others = await client.fetch<SanityDocument[]>(OTHER_QUERY, {}, options)

  return (
    <div>
    <div className="mt-8 text-center mx-auto max-w-5xl">
      <div className="justify-items-center mx-auto max-w-3xl">
        <h3 className="text-2xl font-semibold text-gray-900">
          An Experienced and Dedicated Team at Your Service
        </h3>
        <div className="head-small-red-line h-[3px] w-[120px] bg-red-500 rounded mx-auto mt-4"></div>
      </div>
      <div className="mt-12 mx-auto max-w-6xl grid grid-cols-4 gap-4">
        
        {persons.map((person) => (
          
            <Link href={`/${person.slug}`} className='' key={person._id}>
            <div className="px-2">
              <div className={bodoni.className}>
                <img
                  className="mt-10 w-3/5"
                  src={urlForImage(person.image).quality(100).url()}
                  alt={person.name}
                />
                <p className="font-semibold text-2xl mt-2">{person.name}</p>
                <div className={lato.className}>
                  <p className="text-base italic mt-2 text-gray-600">{person.title}</p>
                  <p className="text-base mb-12 text-gray-600">{person.subtitle}</p>
                </div>
                
              </div>
            </div>
          </Link>
    
          
        ))}
      </div>
      <div className="mx-auto max-w-6xl grid grid-cols-6 gap-4">
        <div className='col-span-1'></div>
      {others.map((other) => (
          <div className='col-span-2' key={other._id}>
            <div className="px-2">
              <div className={bodoni.className}>
                <img
                  className="mt-10 w-1/2"
                  src={urlForImage(other.image).quality(100).url()}
                  alt={other.name}
                />
                <p className="font-semibold text-2xl mt-2">{other.name}</p>
                <div className={lato.className}>
                  <p className="text-base italic mt-2 text-gray-600">{other.title}</p>
                  <p className="text-base mb-12 text-gray-600">{other.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className='col-span-1'></div>
      </div>
    </div>
    
      </div>
    
  )
}


// export default function MeetTheTeam({ persons }) {

//   return (
//     <div className="mt-36">
//       <h3 className="justify-self-center text-5xl mb-4">Meet the Team</h3>
//       <div className="redline justify-self-center mb-24 h-[3px] w-[120px] bg-red-500 rounded"></div>
//       <div className="carousel">
//       <button className="carousel__button carousel__button--prev" onClick={handlePrev}>
//         ❮
//       </button>
//       <div className="carousel__track mt-12 mx-auto max-w-6xl grid grid-cols-4 gap-4" style={{
//             transform: `translateX(-${currentIndex * 25}%)`,
//             transition: 'transform 0.5s ease',
//           }}>
//         {persons.map((person: any) => (
//           <div className="carousel__card" key={person._id}>
//             <div className="border border-gray-300 px-2">
//               <div className={bodoni.className}>
//               <img className="mt-10 w-3/5" src={urlForImage(person.image).quality(100).url()} alt="" />

//                 <p className="text-3xl mt-2 ">{person.name}</p>
//                 <div className={lato.className}>
//                   <p className="text-[22px] italic mt-2 text-gray-600">{person.title}</p>
//                   <p className="text-[22px] mb-12  text-gray-600">{person.subtitle}</p>
//                 </div>
//               </div>
//               <p className="text-lg">
                
//               </p>
//             </div>
//           </div>
//         ))}
      
//       </div>
//       </div>

//       <button className="carousel__button carousel__button--next" onClick={handleNext}>
//         ❯
//       </button>
//     </div>
//   )
// // }
