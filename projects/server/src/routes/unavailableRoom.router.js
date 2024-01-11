import { Router } from "express";
import { getDisabledDates, postDisabledRoomData } from "../controllers/tenantUnavailableController.js";
import jwtAuth from "../helpers/jwt-auth.js";

const router = Router();

console.log("Disable Room Router")
router.post("/:id", postDisabledRoomData);
router.get("/:id", getDisabledDates);


export default router;