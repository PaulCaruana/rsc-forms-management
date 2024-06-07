import { UserService } from "@/server/data/UserService";
import { user, user as userSchema } from "@/server/db/drizzleOrm/sqliteSchemas";
import { User } from "@/model/user";
import { DB } from "@/server/db/drizzleOrm";
import { eq } from "drizzle-orm";

export class UserServiceDrizzle implements UserService<User> {
  private db: DB;

  constructor(db: DB) {
    this.db = db;
  }

  async fetchAll(): Promise<User[]> {
    const users = await this.db.select().from(userSchema);
    return users;
  }

  async fetchByUniqueId(username: string): Promise<User> {
    const result = await this.db
      .select()
      .from(userSchema)
      .where(eq(user.username, username))
      .limit(1);
    return result[0] || null;
  }

  async create(user: User): Promise<User> {
    const result = await this.db.insert(userSchema).values(user).returning();
    return result[0];
  }

  /*
  async getAll(): Promise<YourModelType[]> {
    return await this.db.select().from(yourTable);
  }

  async getById(id: number | string): Promise<YourModelType | null> {
    const result = await this.db
      .select()
      .from(yourTable)
      .where({ id })
      .limit(1);
    return result[0] || null;
  }

  async update(
    id: number | string,
    data: Partial<YourModelType>,
  ): Promise<YourModelType | null> {
    const result = await this.db
      .update(yourTable)
      .set(data)
      .where({ id })
      .returning();
    return result[0] || null;
  }

  async delete(id: number | string): Promise<boolean> {
    const result = await this.db.delete(yourTable).where({ id });
    return !!result.rowCount; // if rowCount is greater than 0, it means the deletion was successful
  }
*/
}
