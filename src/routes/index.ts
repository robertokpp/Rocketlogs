import { Router } from "express";

import { userRoutes } from "./users-routes";
import { sessionsRouter } from "./sessions-routes";

const routes = Router()
routes.use("/users", userRoutes)
routes.use("/sessions", sessionsRouter)


export { routes }