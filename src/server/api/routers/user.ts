import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { userSchema } from "@/model/user";
import { userService } from "@/server/services/serviceContainer";

export const userRouter = createTRPCRouter({
  getUsers: publicProcedure.query(async () => await userService.fetchAll()),
  create: publicProcedure
    .input(userSchema)
    .mutation(async ({ input }) => await userService.create(input)),
});
