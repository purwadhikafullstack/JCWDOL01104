import { Router } from "express";
import orderHandler from "../modules/order/api-handler.js";
import jwtAuth from "../helpers/jwt-auth.js";

const router = Router();

router.get("/", orderHandler.getOrders);
router.get("/id/:orderId", orderHandler.getOrderById);
router.get("/user/:userId", orderHandler.getOrderByUserId);
router.get("/book-order/:roomId", orderHandler.getBookOrder);

router.post("/book", orderHandler.bookOrder);
router.post("/transaction", orderHandler.transaction);
router.post("/expired", orderHandler.expiredOrder);

export default router;
