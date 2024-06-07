import { User } from "@/model/user";

export interface UserService {
  fetchAll(): Promise<User[]>;
  fetchByUniqueId(id: string): Promise<User>;
  create(user: User): Promise<User>;
}
