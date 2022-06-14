import { createRouter } from "../createRouter";
import { z } from "zod";
import {
  getAllPostsWithSlug,
  getPostAndMorePosts,
  getPostBySlug,
} from "../../utils/contentful/blogpost";

export const blogPostRouter = createRouter()
  .query("getAllPostsWithSlug", {
    resolve: async () => {
      console.log("getting posts...");
      const posts = await getAllPostsWithSlug();
      return posts;
    },
  })
  .query("getPostAndMorePosts", {
    input: z.object({
      slug: z.string().nonempty(),
    }),
    resolve: async ({ input }) => {
      const { slug } = input;
      const response = await getPostAndMorePosts(slug);
      return response;
    },
  });

  // export type definition of API
export type BlogPostRouter = typeof blogPostRouter;
