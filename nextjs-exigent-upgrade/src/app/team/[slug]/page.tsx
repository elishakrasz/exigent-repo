import Image from 'next/image';
import { type SanityDocument } from 'next-sanity';
import { client, urlForImage } from '../../sanity/client';
import { PortableText } from 'next-sanity';

import { Lato } from 'next/font/google';

const lato = Lato({
  weight: ['300', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

// GROQ query with dynamic slug parameter
const PERSON_QUERY = `*[_type == "person" && slug.current == $slug][0] | {
   _id, name, title, subtitle, description, image, slug, order,
  content[] {
    _type == "imageGallery" => {
      images[] {
        asset-> {
          url
        },
        alt
      },
      caption
    }
  }
}`;
const options = { next: { revalidate: 30 } };

const PortableTextComponents = {
  types: {
    image: ({ value }: { value: { asset: { url: string }; alt?: string } }) => (
      <Image
        src={value.asset.url}
        alt={value.alt || ''}
        width={500}
        height={400}
        className="rounded-md my-5 mx-auto"
      />
    ),
    imageGallery: ({ value }: { value: { images: any; caption?: string } }) => (
      <div className="my-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {value.images.map((image, index) => (
            <Image
              key={index}
              src={image.asset.url}
              alt={image.alt || ''}
              width={300}
              height={200}
              className="rounded-lg"
            />
          ))}
        </div>
        {value.caption && <p className="text-center mt-4 text-gray-500">{value.caption}</p>}
      </div>
    ),
  },
};

// The function to fetch data needs to be separate to ensure server-side rendering works.
async function fetchPerson(slug: string): Promise<SanityDocument | null> {
  return await client.fetch<SanityDocument>(PERSON_QUERY, { slug }, options);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug  = (await params).slug


  // Fetch person document based on slug
  const person = await fetchPerson(slug);

  if (!person) {
    return <div>404 - Person Not Found</div>;
  }

  return (
    <div className="mx-auto max-w-7xl py-16 my-10">
      <div className="grid grid-cols-6 gap-4 border-l-2 border-red-700 pt-6 pb-10">
        {/* Left Section: Profile Image and Details */}
        <div className="col-span-2 flex flex-col items-center">
          <Image
            src={urlForImage(person.image).quality(100).url()}
            alt={person.name}
            width={300}
            height={300}
            className="rounded-full"
          />
          <div className="text-center mt-4">
            <h1 className="text-xl font-semibold">{person.name}</h1>
            <div className={lato.className}>
              <h2 className="italic font-light text-gray-400 text-base">{person.title}</h2>
              <h3 className="font-light text-gray-400 text-base">{person.subtitle}</h3>
            </div>
          </div>
        </div>

        {/* Right Section: Description and Content */}
        <div className="col-span-4 text-gray-500">
          <div className="text-sm">
            {Array.isArray(person.description) && (
              <PortableText value={person.description} />
            )}
          </div>
          <div className="mt-6">
            <PortableText
              value={person.content}
              components={PortableTextComponents}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
