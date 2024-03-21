import { headers } from "next/headers";
import { appRouter } from "@/server/api";
import { db } from "@/server/db/drizzleOrm";

export const serverClient = appRouter.createCaller({
  db: db,
  headers: headers(),
});
