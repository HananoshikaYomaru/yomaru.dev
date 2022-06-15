import { createRouter } from "../createRouter";
import {
  getAllWorkWithSlug,
  getWorkBySlug,
  getAllSlugs,
} from "../../utils/contentful/work";
import { z } from "zod";

export const workRouter = createRouter()
  .query("getAllWorkWithSlug", {
    input: z.object({
      limit: z.number().optional(),
    }),
    resolve: async ({ input }) => {
      const { limit } = input;
      const works = await getAllWorkWithSlug(limit);
      console.log("getting works...", works);
      return works;
    },
  })
  .query("getWorkBySlug", {
    input: z.object({
      slug: z.string().min(1),
    }),
    resolve: async ({ input }) => {
      const { slug } = input;
      const response = await getWorkBySlug(slug);
      return response;
    },
  })
  .query("getAllSlugs", {
    resolve: getAllSlugs,
  });

// export type definition of API
export type WorkRouter = typeof workRouter;
