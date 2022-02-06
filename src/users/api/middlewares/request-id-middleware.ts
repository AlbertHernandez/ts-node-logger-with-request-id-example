import Koa from "koa";
import { UuidGenerator } from "../../business/uuid-generator";

export const requestIdMiddleware = async (ctx: Koa.Context, next: Koa.Next) => {
  ctx.state.requestId = UuidGenerator.generateUuid();
  ctx.set("Request-Id", ctx.state.requestId);

  await next();
};
