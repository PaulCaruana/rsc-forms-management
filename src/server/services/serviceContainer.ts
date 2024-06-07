import { createContainer, asClass, asValue, InjectionMode } from "awilix";
import { db, DB } from "@/server/db/drizzleOrm";
import { UserServiceDrizzle } from "@/server/services/user/UserServiceDrizzle";
import { UserService } from "@/server/services/user/UserService";

export type ServiceContainerCradle = {
  db: DB;
  userService: UserService;
};

const serviceContainer = createContainer<ServiceContainerCradle>({
  injectionMode: InjectionMode.PROXY,
});

serviceContainer.register({
  userService: asClass(UserServiceDrizzle).singleton(),
  db: asValue(db),
});

const userService = serviceContainer.cradle.userService;

export { userService };
