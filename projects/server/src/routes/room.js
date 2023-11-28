import { Router } from "express";
import roomHandler from "../modules/room/api-handler.js";
import jwtAuth from "../helpers/jwt-auth.js";

const router = Router();

router.get("/", roomHandler.getRooms);
router.get("/:roomId", roomHandler.getRoomById);

router.post("/", roomHandler.addRoom);

export default router;
