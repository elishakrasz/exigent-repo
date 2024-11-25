import { type SanityDocument } from 'next-sanity';
import { client, urlForImage } from '../../sanity/client';
import { PortableText } from 'next-sanity';

import { Bodoni_Moda, Lato } from 'next/font/google';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
});
const lato = Lato({
  weight: ['300', '700'],
  style: ['normal', 'italic'],
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
      <img
        src={value.asset.url}
        alt={value.alt || ''}
        style={{ maxWidth: '100%', margin: '20px 0' }}
      />
    ),
    imageGallery: ({ value }: { value: { images: any[]; caption?: string } }) => (
      <div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {value.images.map((image, index) => (
            <img
              key={index}
              src={image.asset.url}
              alt={image.alt || ''}
              style={{ maxWidth: '30%', borderRadius: '8px' }}
            />
          ))}
        </div>
        {value.caption && <p style={{ textAlign: 'center' }}>{value.caption}</p>}
      </div>
    ),
  },
};

export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // Fetch person document based on slug
  const person = await client.fetch<SanityDocument>(PERSON_QUERY, { slug }, options);

  if (!person) {
    return <div>404 - Person Not Found</div>;
  }

  return (
    <div className="mx-auto max-w-7xl py-16 my-10">
      <div className="grid grid-cols-6 max-w-[920px] border-l-2 border-red-700 pt-6 pb-10 border-gray-300">
        <div className="col-span-2 items-center flex flex-col">
          <img
            className="w-2/5"
            src={urlForImage(person.image).quality(100).url()}
            alt={person.name}
          />
          <div className="text-center">
            <h1 className="text-xl">{person.name}</h1>
            <div className={lato.className}>
              <h2 className="font-sans italic font-light text-gray-400 text-base">
                {person.title}
              </h2>
              <h3 className="font-sans font-light text-gray-400 text-base">
                {person.subtitle}
              </h3>
            </div>
          </div>
        </div>
        <div className="col-span-4 pt-4 text-gray-500">
          <div className="text-sm">
            {Array.isArray(person.description) && (
              <PortableText value={person.description} />
            )}
          </div>
          <div>
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
