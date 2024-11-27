import Image from 'next/image';
import { urlForImage } from '../sanity/client';
import { Bodoni_Moda, Lato } from 'next/font/google';
import { type SanityDocument } from 'next-sanity';
import Link from 'next/link';
import { client } from '../sanity/client';

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
const OTHER_QUERY = `*[_type == "person" && order > 12] | order(order asc) | { _id,name,title, subtitle, description, image, order }`;

const options = { next: { revalidate: 30 } };

export default async function Team() {
  const persons = await client.fetch<SanityDocument[]>(PERSON_QUERY, {}, options);
  const others = await client.fetch<SanityDocument[]>(OTHER_QUERY, {}, options);

  return (
    <div className="mt-8 text-center mx-auto max-w-7xl">
      <div className="mx-auto max-w-3xl">
        <h3 className="text-2xl font-semibold text-gray-900">
          An Experienced and Dedicated Team at Your Service
        </h3>
        <div className="h-[3px] w-[120px] bg-red-500 rounded mx-auto mt-4"></div>
      </div>

      {/* Main Team */}
      <div className="mt-12 grid grid-cols-4 gap-6 mx-auto max-w-6xl">
        {persons.map((person) => (
          <Link href='/team/${person.slug}' key={person._id} className="block">
            <div className="px-4 text-center">
              <div className={bodoni.className}>
                <div className="relative w-40 h-40 mx-auto">
                  <Image
                    src={urlForImage(person.image).quality(100).url()}
                    alt={person.name}
                    fill
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
          </Link>
        ))}
      </div>

      {/* Other Members */}
      <div className="mt-16 grid grid-cols-6 gap-8 mx-auto max-w-6xl">
        <div className="col-span-1"></div>
        {others.map((other) => (
          <div key={other._id} className="col-span-2">
            <div className="px-4 text-center">
              <div className={bodoni.className}>
                <div className="relative w-32 h-32 mx-auto">
                  <Image
                    src={urlForImage(other.image).quality(100).url()}
                    alt={other.name}
                    fill
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
          </div>
        ))}
        <div className="col-span-1"></div>
      </div>
    </div>
  );
}
