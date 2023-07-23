import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!

const config = {
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
}

// Set up the client for fetching data in the getProps page functions
export const client = createClient(config)

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source)