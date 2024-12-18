import Image from 'next/image';
import { urlForImage } from '../sanity/client';
import { Bodoni_Moda, Lato } from 'next/font/google';
import { type SanityDocument } from 'next-sanity';
import { client } from '../sanity/client';
import Link from 'next/link';
import Absolute from '../components/Gallery';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
});
const lato = Lato({
  weight: ['300', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const PERSON_QUERY = `*[_type == "person" && order < 13] | order(order asc) | { _id,name,title, subtitle, description, image, slug, order }`;

const PERSON_GALLERY_QUERY = `*[_type == "person"] | order(order asc) {
  _id, name, title, subtitle, description, image, slug, order,
  gallery[]{
      asset->{
        _id,
        url
      },
      caption
    }
}`;
const OTHER_QUERY = `*[_type == "person" && order > 12] | order(order asc) | { _id,name,title, subtitle, description, image,slug, order }`;

const options = { next: { revalidate: 30 } };

export default async function Team() {
  const persons = await client.fetch<SanityDocument[]>(PERSON_QUERY, {}, options);
  const others = await client.fetch<SanityDocument[]>(OTHER_QUERY, {}, options);
  const persons_gallery = await client.fetch<SanityDocument[]>(PERSON_GALLERY_QUERY, {}, options);

  return (
    <div className="mt-8 text-center mx-auto">
      <div className="mx-auto max-w-3xl">
        <h3 className="text-2xl mx-10 md:text-2xl font-semibold text-gray-700">
          An Experienced and Dedicated Team at Your Service
        </h3>
        <div className="h-[3px] w-[120px] bg-red-500 rounded mx-auto mt-4"></div>
      </div>

  {/* <PersonGalleryTwo persons={persons_gallery} /> */}
  {/* <PersonGallery persons={persons_gallery} /> */}
  <Absolute persons={persons_gallery} />
      {/* Main Team */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid-cols-4  mx-auto max-w-6xl px-12">
        {persons.map((person) => (
          <a href={`/team?slug=${person.slug.current}`} key={person._id} className="block pb-4">
          {/* <Link href={`/team/${person.slug}`} key={person._id} className="block"> */}
            <div className="px-4 text-center mb-4 ">
              <div className={bodoni.className}>
                <div className="relative w-40 h-40 mx-auto">
                  <Image
                    src={urlForImage(person.image).quality(100).url()}
                    alt={person.name}
                    // fill
                    width={200}
                    height={100}
                    className="rounded-full object-cover"
                  />
                </div>
                <p className="font-semibold text-xl mt-4">{person.name}</p>
                <div className={lato.className}>
                  <p className="italic mt-2 text-gray-600 text-sm">{person.title}</p>
                  <p className="text-gray-600 text-sm">{person.subtitle}</p>
                </div>
              </div>
            </div>
            {/* <div className='h-36 w-full mx-16 bg-blue-600 grid grid-cols-1 sm:grid-cols-2 md:grid md:grid-cols-4'></div> */}
          </a>
        ))}
      </div>


      <div className="md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 md:gap-8 mx-auto max-w-5xl pb-24 px-12">
        {/* <div className="col-span-1"></div> */}
        {others.map((other) => (
          <div key={other._id} className="col-span-1 md:col-span-3 ">
            <Link href={`/team?slug=${other.slug.current}`} key={other._id} className="pb-4">
            <div className="px-4 text-center mb-4">
              <div className={bodoni.className}>
                <div className="relative w-40 h-40 mx-auto">
                  <Image
                    src={urlForImage(other.image).quality(100).url()}
                    alt={other.name}
                    // fill
                    width={200}
                    height={100}
                    className="rounded-full object-cover"
                  />
                </div>
                <p className="font-semibold text-xl mt-4">{other.name}</p>
                <div className={lato.className}>
                  <p className="italic mt-2 text-gray-600 text-sm">{other.title}</p>
                  <p className="text-gray-600 text-sm">{other.subtitle}</p>
                </div>
              </div>
            </div>
            </Link>
          </div>
        ))}
        <div className="col-span-1"></div>
      </div>
    </div>
  );
}