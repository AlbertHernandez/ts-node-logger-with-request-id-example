import Koa from "koa";
import * as Awilix from "awilix";
import { Controller } from "../controllers";

export const handleRequest =
  (controllerInstanceName: string) => async (ctx: Koa.Context) => {
    const scopedContainer: Awilix.AwilixContainer = ctx.state.container;
    const instance = scopedContainer.resolve<Controller>(
      controllerInstanceName
    );
    await instance.run(ctx);
  };
