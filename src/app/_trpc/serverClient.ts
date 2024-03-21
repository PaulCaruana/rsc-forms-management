import { headers } from "next/headers";
import { appRouter } from "@/server";
import { db } from "@/drizzleOrm";

export const serverClient = appRouter.createCaller({
  db: db,
  headers: headers(),
});
