import { eq } from "drizzle-orm";

import { z } from "zod";

import { todos } from "@/db/schema";
import { createTRPCRouter, publicProcedure } from "@/server/trpc";

export const todoRouter = createTRPCRouter({
  getTodos: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.select().from(todos).all();
  }),
  addTodo: publicProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(todos).values({ content: input, done: 0 }).run();
      return true;
    }),
  setDone: publicProcedure
    .input(
      z.object({
        id: z.number(),
        done: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .update(todos)
        .set({ done: input.done })
        .where(eq(todos.id, input.id))
        .run();
      return true;
    }),
});
