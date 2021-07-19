import { Router } from "express";

/** controllers */
import ClientController from "./app/controllers/ClientController";

const routes = new Router();

routes.get("/", ClientController.index);

export default routes;
