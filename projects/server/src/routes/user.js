import { Router } from "express";
import userHandler from "../modules/user/api-handler.js";
import setRateLimiter from "express-rate-limit";

const rateLimit = setRateLimiter({
  windowMs: 24 * 36 * 1e5,
  limit: 5,
  statusCode: 200,
  message: { statusCode: 429, message: "Maksimal 5 request per hari" },
});

const router = Router();

router.get("/", userHandler.getUsers);
router.get("/id/:userId", userHandler.getUserById);
router.get("/email/:email", userHandler.getUserByEmail);
router.get("/phone/:emailOrPhoneNumber", userHandler.getUserByEmailOrPhoneNumber);

router.post("/register", userHandler.register);
router.post("/login", userHandler.login);
router.post("/otp/request", rateLimit, userHandler.requestOtp);
router.post("/verify-email/", userHandler.verifyEmail);

export default router;
