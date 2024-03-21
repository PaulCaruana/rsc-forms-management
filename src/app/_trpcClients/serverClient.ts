import { headers } from "next/headers";
import { appRouter } from "@/server";
import { db } from "@/db/drizzleOrm";

export const serverClient = appRouter.createCaller({
  db: db,
  headers: headers(),
});
