import { createRouter } from "../createRouter";
import { feedback } from "../../zodSchema/feedback";
import { pusher } from "../../utils/pusher";

export const feedbackRouter = createRouter().mutation("add", {
  input: feedback,
  resolve: async ({ input }) => {
    const response = await pusher.trigger("feedback", "create-event", input);
    return response;
  },
});
