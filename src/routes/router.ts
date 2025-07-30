import { Router } from "express";
import { getVehicles } from "../controllers/vehiclesController";

const router = Router();

router.get("/vehicles", getVehicles);

export default router;
