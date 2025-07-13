
import { Router } from "express";
import { getVehicles } from "../controllers/vehiclesController.js";

const routes = Router();

routes.get("/", getVehicles)



export {routes};