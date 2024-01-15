import { Router } from "express";
import { getDisabledDates, postDisabledRoomData } from "../controllers/tenantUnavailableController.js";
import jwtAuth from "../helpers/jwt-auth.js";

const router = Router();

router.post("/:id", postDisabledRoomData);
router.get("/:id", getDisabledDates);

export default router;
