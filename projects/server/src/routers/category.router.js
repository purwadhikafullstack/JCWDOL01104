import { Router } from "express";
import Category from "../models/category.js";
import { getPropertyCategory } from "../controllers/tenantCategoryController.js";

console.log("Category Router")
const router = Router();

router.get("/:id",getPropertyCategory)

export default router;