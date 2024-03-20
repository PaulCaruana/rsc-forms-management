import { headers } from "next/headers";
import { appRouter } from "@/server/root";
import { db } from "@/db";

export const serverClient = appRouter.createCaller({
  db: db,
  headers: headers(),
});
