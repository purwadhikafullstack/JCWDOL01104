import { Router } from "express";
import propertyHandler from "../modules/property/api-handler.js";
import jwtAuth from "../helpers/jwt-auth.js";

const router = Router();

router.get("/location", propertyHandler.getLocations);
router.get("/favorite", jwtAuth, propertyHandler.getPropertyFavorite);
router.get("/", propertyHandler.getProperties);
router.get("/id/:propertyId", propertyHandler.getPropertyById);
router.get("/special-price", propertyHandler.getSpecialPrice);

router.post("/", jwtAuth, propertyHandler.addProperty);
router.post("/favorite", jwtAuth, propertyHandler.setFavorite);

export default router;
