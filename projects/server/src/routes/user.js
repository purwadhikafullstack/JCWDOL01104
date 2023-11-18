import { Router } from "express";
import userHandler from "../modules/user/api-handler.js";

const router = Router();

router.get("/", userHandler.getUsers);
router.get("/:email", userHandler.getUserByEmail);
router.get("/:emailOrPhoneNumber", userHandler.getUserByEmailOrPhoneNumber);

router.post("/register", userHandler.register);
router.post("/login", userHandler.login);

export default router;
