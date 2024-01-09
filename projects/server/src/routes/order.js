import { Router } from "express";
import orderHandler from "../modules/order/api-handler.js";
import jwtAuth from "../helpers/jwt-auth.js";
import upload from "../helpers/upload.js";

const router = Router();

router.get("/", orderHandler.getOrders);
router.get("/id/:orderId", orderHandler.getOrderById);
router.get("/user/", jwtAuth, orderHandler.getOrderByUserId);
router.get("/userPastOrders/", jwtAuth, orderHandler.getOrderByUserIdPast);
router.get("/book-order", orderHandler.getBookOrder);

router.post("/book", jwtAuth, orderHandler.bookOrder);
router.post("/transaction", jwtAuth, orderHandler.transaction);

router.put("/upload-image/:orderId", jwtAuth, upload, orderHandler.uploadImageTransaction);

orderHandler.scheduler();

export default router;
