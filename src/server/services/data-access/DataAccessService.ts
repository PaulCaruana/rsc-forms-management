export interface DataAccessService<E> {
  fetchAll(): Promise<E[]>;
  fetchByUniqueId(key: string, value: string): Promise<E | undefined>;
  create(entity: E): Promise<E>;
}
