import { Router } from "express";
import {
  editPropertyData,
  getPropertyData,
  postPropertyData,
  deletePropertyData,
} from "../controllers/tenantPropController.js";
import upload from "../helpers/upload.js";
import jwtAuth from "../helpers/jwt-auth.js";

const router = Router();

// router.get ("/", totalProductList);
router.get("/", jwtAuth, getPropertyData);
router.post("/", jwtAuth, upload, postPropertyData);
// router.delete("/","");
router.put("/:id", jwtAuth, editPropertyData);
router.delete("/:id", jwtAuth, deletePropertyData);

export default router;
