import { user } from "@/server/db/drizzleOrm/sqliteSchemas";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { userSchema } from "@/model/user";

export const userRouter = createTRPCRouter({
  getUsers: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.select().from(user).all();
  }),
  create: publicProcedure.input(userSchema).mutation(async ({ ctx, input }) => {
    return await ctx.db.insert(user).values({
      firstName: input.firstName,
      lastName: input.lastName,
      username: input.username,
    });
  }),
});
