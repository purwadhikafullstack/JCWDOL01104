import { Router } from "express";
import userHandler from "../modules/user/api-handler.js";
import setRateLimiter from "express-rate-limit";
import jwtAuth from "../helpers/jwt-auth.js";
import upload from "../helpers/upload.js";

const rateLimit = setRateLimiter({
  windowMs: 24 * 36 * 1e5,
  limit: 5,
  statusCode: 429,
  message: { statusCode: 429, message: "Maksimal 5 request per hari" },
});

const router = Router();

router.get("/", userHandler.getUsers);
router.get("/id", jwtAuth, userHandler.getUserById);
router.get("/email/:email", userHandler.getUserByEmail);
router.get("/phone/:emailOrPhoneNumber", userHandler.getUserByEmailOrPhoneNumber);

router.post("/register", userHandler.register);
router.post("/login", userHandler.login);
router.post("/otp/request", jwtAuth, rateLimit, userHandler.requestOtp);
router.post("/verify-email", jwtAuth, userHandler.verifyEmail);

router.post("/update-password", jwtAuth, userHandler.updatePassword);
router.post("/reset-password/request", jwtAuth, userHandler.resetPassword);
router.post("/reset-password", jwtAuth, userHandler.updateResetPassword);

router.put("/update", jwtAuth, userHandler.updateUser);
router.put("/upload-image", jwtAuth, upload, userHandler.uploadImage);

userHandler.scheduler();

export default router;
