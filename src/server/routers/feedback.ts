import { createRouter } from "../createRouter";
import { z } from "zod";

export const feedbackRouter = createRouter().mutation("add", {
  input: z.object({
    id: z.string().uuid().optional(),
    text: z.string().min(1),
  }),
  resolve: ({ input }) => {
    return input;
  },
});
