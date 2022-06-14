import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";

export type Context = trpc.inferAsyncReturnType<typeof createContext>;

export async function createContext(opts?: trpcNext.CreateNextContextOptions) {
  // for API-response caching see https://trpc.io/docs/caching
  return {};
}