import "server-only";

import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

import * as schema from "./sqliteSchemas";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";

const sqlite = new Database("sqlite.db");

export const db = drizzle(sqlite, { schema });

export type DB = typeof db;

migrate(db, { migrationsFolder: "drizzle" });
