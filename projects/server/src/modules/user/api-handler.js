import tryCatch from "../../utils/try-catch.js";
import QueryUser from "./query-domain.js";
import CommandUser from "./command-domain.js";
import schema from "../../utils/schema.js";
import utils from "../../utils/utils.js";

const query = new QueryUser();
const command = new CommandUser();

const getUsers = tryCatch(async (req, res) => {
  const response = await query.getUsers();
  return utils.responseSuccess(res, response);
});

const getUserById = tryCatch(async (req, res) => {
  const params = req.params.userId;
  const response = await query.getUserById(params);
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
  const payload = req.body;
  await utils.validateSchema(payload, schema.updatePassword);
  const response = await command.updatePassword(payload);
  return utils.responseSuccess(res, response);
});

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
};
