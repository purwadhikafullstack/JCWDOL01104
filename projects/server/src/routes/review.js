import { Router } from "express";
import reviewHandler from "../modules/review/api-handler.js";
import jwtAuth from "../helpers/jwt-auth.js";
import {getReviewByOrderId} from "../controllers/userReviewController.js"

const router = Router();

router.get("/", reviewHandler.getReviews);
router.get("/property", reviewHandler.getReviewByPropertyId);
router.get("/room", reviewHandler.getReviewByRoomId);
router.get("/order/:orderId", getReviewByOrderId)

router.post("/", jwtAuth, reviewHandler.addReview);

export default router;
