import { User } from "@/model/user";
import { DataAccessService } from "@/server/services/data-access/DataAccessService";

export interface UserService extends DataAccessService<User> {}
