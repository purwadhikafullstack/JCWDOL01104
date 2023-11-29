import { Router } from "express";
import { addRoomToProperty , getRoomsInProperty, updateRoomData,deleteRoomData} from "../controllers/tenantRoomController.js";

const router = Router();

console.log("Room Router")
router.post("/:id", addRoomToProperty);
router.get("/:id", getRoomsInProperty);
router.put("/:id",updateRoomData)
router.delete("/:id",deleteRoomData)

export default router;