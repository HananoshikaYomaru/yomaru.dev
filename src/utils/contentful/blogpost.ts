/**
 * code from https://github.com/vercel/next.js/blob/canary/examples/cms-contentful/lib/api.js
 */

import { fetchGraphQL } from "./contentful";

const POST_GRAPHQL_FIELDS = `
slug
title
bannerImage 
date 
author{
  __typename
  ... on Author {
      name
      description
      image
  }
}
sys {
publishedAt
}
excerpt 
content 
`;

export type Post = {
  slug: string;
  title: string;
 bannerImage: any;  
  date: string;
  author: {
    name: string;
    description: string;
    image:any
  };
  sys: {
    publishedAt: string;
  };
  excerpt: string;
  content: string;
};



function extractPost(fetchResponse: any): Post {
  return fetchResponse?.data?.postCollection?.items?.[0];
}

function extractPostEntries(fetchResponse: any): Post[] {
  return fetchResponse?.data?.postCollection?.items;
}

export async function getPostBySlug(slug: string) {
  const entry = await fetchGraphQL(
    `query {
        postCollection(where: { slug: "${slug}" }, limit: 1) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }`,
  );
  return extractPost(entry);
}

export async function getAllPostsWithSlug() {
  const entries = await fetchGraphQL(
    `query {
        postCollection(where: { slug_exists: true }, order: date_DESC) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }`
  );
  return extractPostEntries(entries);
}

export async function getAllPostsForHome() {
  const entries = await fetchGraphQL(
    `query {
        postCollection(order: date_DESC) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }`
  );
  return extractPostEntries(entries);
}

/**
 * 
 * @param slug 
 * @returns 
 */
export async function getPostAndMorePosts(
  slug: string,
) {
  const entries = await fetchGraphQL(
    `query {
        postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, limit: 2) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }`,
  );
  return {
    post: getPostBySlug(slug),
    morePosts: extractPostEntries(entries),
  };
}
