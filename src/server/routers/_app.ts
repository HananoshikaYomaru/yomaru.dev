
import { z } from "zod";
import { createRouter } from "../createRouter";
import { blogPostRouter } from "./blogpost";
import { feedbackRouter } from "./feedback";
import { workRouter } from "./work";

/**
 * every router need to be register here. This is the router of the whole app 
 */
export const appRouter = createRouter()
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `hello ${input?.text ?? "world"}`,
      };
    },
  })
  // .merge("feedback.", feedbackRouter)
  .merge("blogpost.", blogPostRouter)
  .merge("work.",  workRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
