import * as trpc from "@trpc/server";
import { z } from "zod";
import { createRouter } from "../createRouter";
import { feedbackRouter } from "./feedback";

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
  .merge("feedback.", feedbackRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
