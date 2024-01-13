import { Router } from "express";
import { addSpecialPrice } from "../controllers/tenantSpecialPrice.js";
import jwtAuth from "../helpers/jwt-auth.js";

const router = Router();

router.post("/:id", jwtAuth, addSpecialPrice);

export default router;
