import { DB } from "@/server/db/drizzleOrm";
import { eq } from "drizzle-orm";
import { DataAccessService } from "@/server/services/data-access/DataAccessService";
import { SQLiteTableWithColumns } from "drizzle-orm/sqlite-core";

export abstract class DataAccessServiceDrizzle<
  E,
  S extends SQLiteTableWithColumns<any>,
> implements DataAccessService<E>
{
  private readonly db: DB;
  private readonly schema: S;

  protected constructor(db: DB, schema: S) {
    this.db = db;
    this.schema = schema;
  }

  async fetchAll(): Promise<E[]> {
    const results = await this.db.select().from(this.schema);
    return results.map((result) => result as E);
  }

  async fetchByUniqueId(key: string, value: string): Promise<E | undefined> {
    const e = await this.db
      .select()
      .from(this.schema)
      .where(eq(this.schema[key], value))
      .get();
    return e as E;
  }

  async create(entity: E): Promise<E> {
    // Ensure the entity type matches the table schema
    const insertResult = await this.db
      .insert(this.schema)
      .values(entity as any)
      .returning();
    return insertResult[0] as E;
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
