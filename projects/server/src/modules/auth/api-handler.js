import AppError from "../../utils/app-error.js";
import tryCatch from "../../utils/try-catch.js";
import utils from "../../utils/utils.js";

const loginSuccess = tryCatch(async (req, res) => {
  const response = req.session.passport.user;
  if (!req.session.passport.user) throw new AppError("Unauthorized", 403);
  return await utils.responseSuccess(res, response);
});

const loginFail = tryCatch(async (req, res) => {
  res.status(401).json({
    error: true,
    message: "Log in failure",
  });
});

const logout = tryCatch(async (req, res) => {
  req.session.destroy();
  res.redirect(process.env.CLIENT_LINK);
});

export default { loginSuccess, loginFail, logout };
