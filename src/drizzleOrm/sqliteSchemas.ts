import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";
export const todos = sqliteTable("todos", {
  id: integer("id").primaryKey(),
  content: text("content"),
  done: integer("done"),
});

export const user = sqliteTable("user", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  firstName: text("first_name", { length: 256 }),
  lastName: text("last_name", { length: 256 }),
  username: text("user_name").unique().notNull(),
  createdAt: text("created_at").default(sql`CURRENT_TIME`),
});
