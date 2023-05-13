import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: process.env.REACT_APP_SANITY_PROJECT_DATASET,
    apiVersion: '2023-05-10',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_PROJECT_TOKEN,
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);