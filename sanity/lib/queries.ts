import { groq } from 'next-sanity'

export const projectsQuery = groq`
  *[_type == "project"] | order(date desc) {
    _id,
    title,
    slug,
    thumbnail,
    description,
    clientName,
    date,
    price,
    techStack,
    link
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    thumbnail,
    description,
    clientName,
    date,
    price,
    techStack,
    link
  }
`
