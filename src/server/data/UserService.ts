import { user } from "@/server/db/drizzleOrm/sqliteSchemas";
export interface UserService<User> {
  fetchAll(): Promise<User[]>;
  fetchByUniqueId(id: string): Promise<User>;
  create(user: User): Promise<User>;
}
