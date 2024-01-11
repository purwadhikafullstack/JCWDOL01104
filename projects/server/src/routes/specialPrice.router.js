import { Router } from "express";
import { addSpecialPrice } from "../controllers/tenantSpecialPrice.js";
import jwtAuth from "../helpers/jwt-auth.js";

const router = Router();

console.log("Special Price Router")
router.post("/:id", jwtAuth, addSpecialPrice);


export default router;