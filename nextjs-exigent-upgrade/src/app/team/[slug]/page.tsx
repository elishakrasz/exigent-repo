import React from 'react';
import { PortableText, type SanityDocument } from 'next-sanity';
import { client, urlForImage } from '../../sanity/client';
import Image from 'next/image';
import { Metadata } from 'next';

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
  const person = await client.fetch<SanityDocument>(PERSON_QUERY, { slug });
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

// ImageGallery component for rendering image galleries
// const ImageGallery = ({ images, caption }: { images: { url: string; alt?: string }[]; caption?: string }) => (
//   <div className="mt-8">
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
//       {images.map((image, index) => (
//           <div key={index} className="relative h-64">
//           <Image
//             src={urlForImage(image).quality(100).url()}
//             alt={image.alt || 'Gallery Image'}
//             width={100}
//             height={100}
//             className=''
//           />
//         </div>
//         ))}
//     </div>
//     {caption && <p className="mt-4 text-center italic">{caption}</p>}
//   </div>
// );



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
        <h3 className="text-2xl mx-10 font-semibold text-gray-700">
          An Experienced and Dedicated Team at Your Service
        </h3>
        <div className="h-[3px] w-[120px] bg-red-500 rounded mx-auto mt-4"></div>
      </div>
     {/* Grid Section */}
<div className="mt-8 max-auto items-center justify-items-center">
  <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto">
    {/* Left Column */}
    <div className="mx-auto text-center col-span-1">
      <div>
        <Image
          // src={urlForImage(person.image).quality(100).url()}
          // alt={person.name}
          // fill
          // className="rounded-full object-cover"

          src={urlForImage(person.image).quality(100).url()}
          alt={person.name}
          width={100}
          height={100}
          className="rounded-full w-[125%]"
        />
      </div>
      <div>
        <h1 className="text-2xl mt-2">{person.name}</h1>
        <p className="text-[13px] text-gray-500 italic mt-2">{person.title}</p>
        <p className="text-[13px] leading-4 text-gray-500 mt-1">{person.subtitle}</p>

        <div className="flex items-center justify-center my-2">
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
        <span className="border-b-2 border-gray-300 mt-4"></span>
      </div>
    </div>

    {/* Right Column */}
    <div className="col-span-3 max-w-[80%]">
      {/* Render description using PortableText */}
      <div className="mt-2">
        {person.description?.map((block, index) => (
          <CustomPortableText key={block._key || index} value={[block]} />
        ))}
      </div>

      {/* Render content blocks */}
      {/* <div>
        {person.content?.map((block, index) => {
          if (block.images) {
            return (
              <ImageGallery
                key={index}
                images={block.images || []}
                caption={block.caption}
              />
            );
          }
          return null; // Skip other blocks
        })}
      </div> */}
    </div>
  </div>
</div>
</div>
  );
}
