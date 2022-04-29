import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter } from "../../../server/routers/_app";

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
  onError: ({ error }) => {
    if (error.code === "INTERNAL_SERVER_ERROR") {
      // send to bug reporting
      console.error("Something went wrong", error);
    }
  },
});
