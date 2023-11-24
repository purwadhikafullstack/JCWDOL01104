import { Router } from "express";
import userHandler from "../modules/user/api-handler.js";
import setRateLimiter from "express-rate-limit";
import jwtAuth from "../helpers/jwt-auth.js";

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
router.post("/verify-email", jwtAuth, userHandler.verifyEmail);

router.post("/update-password", jwtAuth, userHandler.updatePassword);
router.post("/reset-password/request", userHandler.resetPassword);
router.post("/reset-password", userHandler.updateResetPassword);

router.put("/:userId", jwtAuth, userHandler.updateUser);

export default router;
