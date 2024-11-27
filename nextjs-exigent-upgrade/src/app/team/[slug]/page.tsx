import React from 'react'
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

const SLUGS_QUERY =  `
*[_type == "person"]{
  "slug": slug.current
}`;

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const items = await client.fetch<{ slug: string }[]>(SLUGS_QUERY);
 
  return items.map((item) => ({
    slug: item.slug,
  }))
}
 
// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ params }) {
  const { slug } = await params
  return (
    <div>the param is: {slug}</div>
  )
}
