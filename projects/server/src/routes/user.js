import { Router } from "express";
import userHandler from "../modules/user/api-handler.js";

const router = Router();

router.get("/", userHandler.getUsers);
router.get("/:email", userHandler.getUserByEmail);

router.post("/register", userHandler.register);

export default router;
