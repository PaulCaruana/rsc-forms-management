import type { Config } from "drizzle-kit";

export default {
  schema: "./src/drizzleOrm/sqliteSchemas.ts",
  out: "./drizzle",
  driver: "better-sqlite",
  dbCredentials: {
    url: "sqlite.db",
  },
} satisfies Config;
