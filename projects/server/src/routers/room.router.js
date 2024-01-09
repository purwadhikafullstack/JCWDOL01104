import { Router } from "express";
import { addRoomToProperty , getRoomsInProperty, updateRoomData,deleteRoomData, getOccupancyData} from "../controllers/tenantRoomController.js";
import jwtAuth from "../helpers/jwt-auth.js";
import upload from "../helpers/upload.js";

const router = Router();

console.log("Room Router")
router.post("/:id", jwtAuth,upload,addRoomToProperty);
router.get("/:id", getRoomsInProperty);
router.put("/:id",jwtAuth, upload, updateRoomData)
router.delete("/:id",deleteRoomData)
router.get("/occupancyData/:date",jwtAuth, getOccupancyData);

export default router;