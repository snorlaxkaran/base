import { Router } from "express";
import { createBase } from "../controllers/createBase";

export const appsService = Router();
appsService.post("/app", createBase);
