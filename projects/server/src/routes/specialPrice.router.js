import { Router } from "express";
import { addSpecialPrice, getSpecialPriceData } from "../controllers/tenantSpecialPrice.js";
import jwtAuth from "../helpers/jwt-auth.js";

const router = Router();

router.post("/:id", jwtAuth, addSpecialPrice);
router.get("/:date",jwtAuth,getSpecialPriceData)

export default router;
