import { Router } from "express";

import { userRoutes } from "./users-routes";
import { sessionsRouter } from "./sessions-routes";
import { deliveriesRoutes } from "./deliveries-routes";

const routes = Router()
routes.use("/users", userRoutes)
routes.use("/sessions", sessionsRouter)
routes.use("/deliveries", deliveriesRoutes)

export { routes }