import { createReactQueryHooks, createTRPCClient } from "@trpc/react";
import type { AppRouter } from "../server/routers/_app";
import type { inferProcedureOutput } from "@trpc/server";




/**
 * use this hook in any react components to query 
 * https://trpc.io/docs/nextjs#4-create-trpc-hooks
 */
export const trpc = createReactQueryHooks<AppRouter>();

// export const transformer = superjson;
/**
 * This is a helper method to infer the output of a query resolver
 * @example type HelloOutput = inferQueryOutput<'hello'>
 */
export type inferQueryOutput<
  TRouteKey extends keyof AppRouter["_def"]["queries"]
> = inferProcedureOutput<AppRouter["_def"]["queries"][TRouteKey]>;

/**
 * this is a vallina trpc js client 
 */
export const trpcClient = createTRPCClient<AppRouter>({
  url : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}/api/trpc`
  : "http://localhost:3000/api/trpc"
} )