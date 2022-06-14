import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { Context } from "./context";



/**
 * this function is used in every `server/routers/*.ts`
 */
export function createRouter() {
  return trpc.router<Context>();
}
