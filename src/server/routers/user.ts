import { user } from "@/db/schema";
import { createTRPCRouter, publicProcedure } from "@/server/trpc";
import { schema2 } from "@/app/registrationSchema";

export const userRouter = createTRPCRouter({
  getUsers: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.select().from(user).all();
  }),
  create: publicProcedure.input(schema2).mutation(async ({ ctx, input }) => {
    return await ctx.db.insert(user).values({
      firstName: input.firstName,
      lastName: input.lastName,
      username: input.username,
    });
  }),
});
