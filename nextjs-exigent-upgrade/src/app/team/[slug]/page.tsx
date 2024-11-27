import React from 'react';
import { type SanityDocument } from 'next-sanity';
import { client } from '../../sanity/client';

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
  return person;
}

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
    <div className="max-w-7xl mx-auto py-16">
      <h1 className="text-4xl font-bold">{person.name}</h1>
      <p>{person.title}</p>
      <p>{person.subtitle}</p>
      {/* Add more content as needed */}
    </div>
  );
}
