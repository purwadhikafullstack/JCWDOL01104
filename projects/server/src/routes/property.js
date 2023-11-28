import { Router } from "express";
import propertyHandler from "../modules/property/api-handler.js";
import jwtAuth from "../helpers/jwt-auth.js";

const router = Router();

router.get("/", propertyHandler.getProperties);
router.get("/:propertyId", propertyHandler.getPropertyById);

router.post("/", propertyHandler.addProperty);

export default router;
