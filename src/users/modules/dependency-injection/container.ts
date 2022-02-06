import * as Awilix from "awilix";
import { PinoLogger } from "../../business/logger";
import { config } from "../config";
import UsersGetController from "../../api/controllers/users-get-controller";
import { InMemoryUserRepository } from "../../business/user-repository";
import { UserFinder } from "../../business/user-finder";

const container = Awilix.createContainer({
  injectionMode: Awilix.InjectionMode.PROXY,
});

container.register({
  // controllers
  usersGetController: Awilix.asClass(UsersGetController),

  // services
  userRepository: Awilix.asClass(InMemoryUserRepository),
  userFinder: Awilix.asClass(UserFinder),

  // shared
  logger: Awilix.asClass(PinoLogger).inject(() => {
    return {
      level: config.get("logger.level"),
      isEnabled: config.get("logger.isEnabled"),
    };
  }),
});

export { container };
