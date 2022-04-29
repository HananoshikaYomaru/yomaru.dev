import { createRouter } from "../createRouter";
import { feedback } from "../../zodSchema/feedback";

export const feedbackRouter = createRouter().mutation("add", {
  input: feedback,
  resolve: ({ input }) => {
    return input;
  },
});
