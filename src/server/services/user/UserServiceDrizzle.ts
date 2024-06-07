import { UserService } from "@/server/services/user/UserService";
import {
  user as userSchema,
  UserSchema,
} from "@/server/db/drizzleOrm/sqliteSchemas";
import { User } from "@/model/user";
import { ServiceContainerCradle } from "@/server/services/serviceContainer";
import { DataAccessServiceDrizzle } from "@/server/services/data-access/DataAccessServiceDrizzle";

type Dependencies = Pick<ServiceContainerCradle, "db">;

export class UserServiceDrizzle
  extends DataAccessServiceDrizzle<User, UserSchema>
  implements UserService
{
  constructor(dependencies: Dependencies) {
    super(dependencies.db, userSchema);
  }
}
