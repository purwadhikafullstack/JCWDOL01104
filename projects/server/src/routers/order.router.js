import { Router } from "express";
import { getAllOrders, updateStatus, getChartData } from "../controllers/tenantOrdersController.js";
import jwtAuth from "../helpers/jwt-auth.js";

console.log("Order Router")
const router = Router();
router.get("/",jwtAuth,getAllOrders)
router.get("/chartData",jwtAuth,getChartData)
router.put("/status/:orderId",updateStatus)

export default router;