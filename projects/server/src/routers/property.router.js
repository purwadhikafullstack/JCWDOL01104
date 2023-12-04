import { Router } from "express";
import Property from "../models/property.js";
import { editPropertyData, getPropertyData, postPropertyData , deletePropertyData } from "../controllers/tenantPropController.js";

const router = Router();

// router.get ("/", totalProductList);
router.get("/:id",getPropertyData);
router.post("/:id",postPropertyData);
// router.delete("/","");
router.put("/:id",editPropertyData);
router.delete("/:id",deletePropertyData);


export default router;