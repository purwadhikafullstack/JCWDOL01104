import { Router } from "express";
import authHandler from "../modules/auth/api-handler.js";
import passport from "passport";

const router = Router();

//////google
router.get("/login/success", authHandler.loginSuccess);
router.get("/login/failed", authHandler.loginFail);
router.get("/google", passport.authenticate("google", { scope: ["pofile", "email"] }));
router.get(
  "/google/oauth",
  passport.authenticate("google", {
    successRedirect: `${process.env.CLIENT_LINK}/login-auth-success`,
    failureRedirect: `${process.env.CLIENT_LINK}/login-auth-failed`,
  })
);
router.get("/logout", authHandler.logout);

//////facebook
router.get("/login/success", authHandler.loginSuccess);
router.get("/login/failed", authHandler.loginFail);
router.get("/facebook", passport.authenticate("facebook", { scope: ["pofile", "email"] }));
router.get(
  "/facebook/oauth",
  passport.authenticate("facebook", {
    successRedirect: process.env.CLIENT_LINK,
    failureRedirect: "/login/failed",
  })
);
router.get("/logout", authHandler.logout);

export default router;
