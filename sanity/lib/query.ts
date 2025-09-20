import { defineQuery } from "next-sanity";

export const STARTUP_QUERY = defineQuery(`
*[_type == "startup"] | order(_createdAt desc) {
  _id,
  slug,
  category,
  author -> {
    id, name, image, bio
  },
  description,
  image,
  pitch, 
  title, 
  views
}`);
