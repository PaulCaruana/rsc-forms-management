import "server-only"; // Make sure you can't import this on client

import { createTRPCRouter } from "@/server/trpc";
import { todoRouter } from "@/server/routers/todo";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  todo: todoRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
