import { Router } from "express";
import { appsService } from "./baseService";

export const routes = Router();
routes.use("/app", appsService);
