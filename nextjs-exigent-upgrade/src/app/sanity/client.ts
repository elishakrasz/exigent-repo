import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";


export const client = createClient({
  projectId: "t79x65c2",
  dataset: "production",
  apiVersion: "2024-01-01", // Make sure this matches your schema version
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlForImage(source: any) {
  return builder.image(source);
}