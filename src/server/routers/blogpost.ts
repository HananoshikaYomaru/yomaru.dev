import { createRouter } from "../createRouter";
import { z } from "zod";
import {
  getAllPostsWithSlug,
  getPostAndMorePosts,
  getPreviewPostBySlug,
} from "../../utils/blogpost";

export const blogpostRouter = createRouter()
  .query("all", {
    resolve: async () => {
      console.log("getting posts...");
      const posts = await getAllPostsWithSlug();
      return posts;
    },
  })
  .query("byId", {
    input: z.object({
      slug: z.string().nonempty(),
    }),
    resolve: async ({ input }) => {
      const { slug } = input;
      const response = await getPostAndMorePosts(slug);
      return response;
    },
  });
