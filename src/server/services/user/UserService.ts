import { User } from "@/model/user";

export interface UserService {
  fetchAll(): Promise<User[]>;
  fetchByUniqueId(key: string, value: string): Promise<User | undefined>;
  create(user: User): Promise<User>;
}
