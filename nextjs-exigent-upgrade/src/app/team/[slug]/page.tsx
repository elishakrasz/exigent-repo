import React from 'react';
import { PortableText, type SanityDocument } from 'next-sanity';
import { client, urlForImage } from '../../sanity/client';
import Image from 'next/image';
import { Bodoni_Moda, Lato } from 'next/font/google';
import Link from 'next/link';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
});

const lato = Lato({
  weight: ['300', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

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

const PERSON_GALLERY_QUERY = `*[_type == "person" && slug.current == $slug][0] | {
  _id, name, title, subtitle, description, image, slug, order,
  gallery[]{
      asset->{
        _id,
        url
      },
      caption
    }
}`;



const SLUGS_QUERY = `
*[_type == "person"]{
  "slug": slug.current
}`;

// Generate static paths for all available slugs
export async function generateStaticParams() {
  const items = await client.fetch<{ slug: string }[]>(SLUGS_QUERY);

  // Return the paths in the format required by Next.js
  return items.map((item) => ({
    slug: item.slug, // Matches the `[slug]` dynamic segment
  }));
}

// Fetch the data for the specific person based on the slug
async function fetchPersonData(slug: string) {
  const person = await client.fetch<SanityDocument>(PERSON_GALLERY_QUERY, { slug });
  console.log('person', person);
  return person;
}

const CustomPortableText = ({ value }: { value: any }) => {
  return (
    <PortableText
      value={value}
      components={{
        block: {
          // Custom rendering for "normal" blocks
          normal: ({ children }) => (
            <p className="text-sm text-gray-800 my-2">{children}</p>
          ),
        },
        marks: {
          // Custom rendering for "strong" (bold) text
          strong: ({ children }) => (
            <strong className="font-bold">{children}</strong>
          ),
          // Custom rendering for "em" (italic) text
          em: ({ children }) => (
            <em className="italic text-gray-600">{children}</em>
          ),
        },
        listItem: ({ children }) => (
          <li className="text-xs text-gray-600 py-1">{children}</li>
        ),
      }}
    />
  );
};


// The dynamic page component
export default async function Page({ params }) {
  const { slug } = await params;

  // Fetch the person data
  const person = await fetchPersonData(slug);

  // Handle the case where no data is found
  if (!person) {
    return <div>404 - Person Not Found</div>;
  }

  return (
    <div className="max-w-7xl max-auto justify-items-center mt-16">
      <div className="max-w-3xl">
        <h3 className="text-2xl mx-10 normal text-gray-700">
          An Experienced and Dedicated Team at Your Service
        </h3>
        <div className="h-[3px] w-[120px] bg-red-500 rounded mx-auto mt-4"></div>
      </div>
      {/* Grid Section */}
      <div className="mt-8 max-auto items-center justify-items-center">
        <div className="grid grid-cols-5 gap-4 max-w-3xl mx-auto px-14">
          {/* Left Column */}
          <div className="mx-auto text-center col-span-2">
            <div className="w-full px-2 mx-auto">
              <div className={bodoni.className}>
                <div className="w-full flex justify-center">
                  <Image
                    src={urlForImage(person.image).quality(100).url()}
                    alt={person.name}
                    width={150}
                    height={150}
                    className="object-contain w-1/2 mx-auto"
                  />
                </div>
                <p className="text-xl font-normal mt-2">{person.name}</p>
                <div className={lato.className}>
                  <p className="text-[14px] italic  text-gray-600 mt-1">
                    {person.title}
                  </p>
                  <p className="text-xs my-2 text-gray-600">
                    {person.subtitle}
                  </p>
                  <div className="flex items-center justify-center my-2 px-6">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="mx-2">
                      <Image
                        alt="linkedin in"
                        src="/assets/in.png"
                        width={12}
                        height={12}
                        className="pb-2"
                      />
                    </span>
                    <div className="flex-grow border-t border-gray-400"></div>
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="col-span-3 max-w-full">
            {/* Render description using PortableText */}
            <div className="mt-2">
              {person.description?.map((block, index) => (
                <CustomPortableText key={block._key || index} value={[block]} />
              ))}
            </div>

            <div className="mt-6 flex flex-row space-x-2">
            {person.gallery.map((image, index) => (
              <div key={index} className="image-container">
                <Image
                  src={urlForImage(image.asset).width(1800).height(375).url()}
                  alt={image.caption || 'Gallery image'}
                  width={400}
                  height={100}
                  // layout="responsive"
                  className=''
                />

              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
