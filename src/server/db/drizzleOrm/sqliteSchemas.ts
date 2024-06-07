import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const user = sqliteTable("user", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  firstName: text("first_name", { length: 256 }).notNull(),
  lastName: text("last_name", { length: 256 }).notNull(),
  username: text("user_name").unique().notNull(),
  createdAt: text("created_at")
    .default(sql`CURRENT_TIME`)
    .notNull(),
});

export type UserSchema = typeof user;
