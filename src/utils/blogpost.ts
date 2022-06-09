/**
 * code from https://github.com/vercel/next.js/blob/canary/examples/cms-contentful/lib/api.js
 */

const POST_GRAPHQL_FIELDS = `
    slug
    title
    coverImage { 
        url 
    }
    date 
    author{
        __typename
        ... on Author {
            name
            description
            picture{
                url
            }
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
  coverImage: {
    url: string;
  };
  date: string;
  author: {
    name: string;
    description: string;
    picture: {
      url: string;
    };
  };
  sys: {
    publishedAt: string;
  };
  excerpt: string;
  content: string;
};

export async function fetchGraphQL(query: string, preview = true) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

function extractPost(fetchResponse: any): Post {
  return fetchResponse?.data?.postCollection?.items?.[0];
}

function extractPostEntries(fetchResponse: any): Post[] {
  return fetchResponse?.data?.postCollection?.items;
}

export async function getPreviewPostBySlug(slug: string) {
  const entry = await fetchGraphQL(
    `query {
        postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }`,
    true
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

export async function getAllPostsForHome(preview: boolean = true) {
  const entries = await fetchGraphQL(
    `query {
        postCollection(order: date_DESC, preview: ${
          preview ? "true" : "false"
        }) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }`,
    preview
  );
  return extractPostEntries(entries);
}

export async function getPostAndMorePosts(
  slug: string,
  preview: boolean = true
) {
  const entry = await fetchGraphQL(
    `query {
        postCollection(where: { slug: "${slug}" }, preview: ${
      preview ? "true" : "false"
    }, limit: 1) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }`,
    preview
  );
  const entries = await fetchGraphQL(
    `query {
        postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
      preview ? "true" : "false"
    }, limit: 2) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }`,
    preview
  );
  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries),
  };
}
