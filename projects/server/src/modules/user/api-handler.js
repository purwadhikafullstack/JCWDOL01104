import tryCatch from "../../utils/try-catch.js";
import QueryUser from "./query-domain.js";
import CommandUser from "./command-domain.js";
import schema from "../../utils/schema.js";
import utils from "../../utils/utils.js";
import cron from "node-cron";

const query = new QueryUser();
const command = new CommandUser();

const getUsers = tryCatch(async (req, res) => {
  const response = await query.getUsers();
  return utils.responseSuccess(res, response);
});

const getUserById = tryCatch(async (req, res) => {
  const userId = req.user;
  const response = await query.getUserById(userId);
  return utils.responseSuccess(res, response);
});

const getUserByEmail = tryCatch(async (req, res) => {
  const params = req.params.email;
  const response = await query.getUserByEmail(params);
  return utils.responseSuccess(res, response);
});

const getUserByEmailOrPhoneNumber = tryCatch(async (req, res) => {
  const params = req.params.emailOrPhoneNumber;
  const response = await query.getUserByEmailOrPhoneNumber(params);
  return utils.responseSuccess(res, response);
});

const register = tryCatch(async (req, res) => {
  const payload = req.body;
  await utils.validateSchema(payload, schema.register);
  const response = await command.register(payload);
  return utils.responseSuccess(res, response, "Success Register", 201);
});

const login = tryCatch(async (req, res) => {
  const payload = req.body;
  await utils.validateSchema(payload, schema.login);
  const response = await command.login(payload);
  return utils.responseSuccess(res, response, "Success Login");
});

const requestOtp = tryCatch(async (req, res) => {
  const payload = req.body;
  await utils.validateSchema(payload, schema.otpRequest);
  const response = await command.requestOtp(payload);
  return utils.responseSuccess(res, response);
});

const verifyEmail = tryCatch(async (req, res) => {
  const payload = req.body;
  await utils.validateSchema(payload, schema.verifyEmail);
  const response = await command.verifyEmail(payload);
  return utils.responseSuccess(res, response);
});

const updatePassword = tryCatch(async (req, res) => {
  const userId = req.user;
  const payload = req.body;
  await utils.validateSchema(payload, schema.updatePassword);
  const response = await command.updatePassword(payload, userId);
  return utils.responseSuccess(res, response);
});

const resetPassword = tryCatch(async (req, res) => {
  const payload = req.body;
  await utils.validateSchema(payload, schema.email);
  const response = await command.resetPassword(payload);
  return utils.responseSuccess(res, response);
});

const updateResetPassword = tryCatch(async (req, res) => {
  const payload = req.body;
  await utils.validateSchema(payload, schema.resetPassword);
  const response = await command.updateResetPassword(payload);
  return utils.responseSuccess(res, response);
});

const updateUser = tryCatch(async (req, res) => {
  const userId = req.user;
  const payload = req.body;
  await utils.validateSchema(payload, schema.updateUser);
  const response = await command.updateUser(payload, userId);
  return utils.responseSuccess(res, response);
});

const uploadImage = tryCatch(async (req, res) => {
  const userId = req.user;
  const file = req.file;
  const response = await command.uploadImage(file, userId);
  return utils.responseSuccess(res, response);
});

const scheduler = async () => {
  cron.schedule("* * * * *", async () => {
    await command.refreshOtp();
  });
};

export default {
  getUsers,
  getUserById,
  getUserByEmail,
  getUserByEmailOrPhoneNumber,
  register,
  login,
  requestOtp,
  verifyEmail,
  updatePassword,
  resetPassword,
  updateResetPassword,
  updateUser,
  uploadImage,
  scheduler,
};
