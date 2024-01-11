import tryCatch from "../../utils/try-catch.js";
import QueryOrder from "./query-domain.js";
import CommandOrder from "./command-domain.js";
import schema from "../../utils/schema.js";
import utils from "../../utils/utils.js";
import cron from "node-cron";

const query = new QueryOrder();
const command = new CommandOrder();

const getOrders = tryCatch(async (req, res) => {
  const response = await query.getOrders();
  return utils.responseSuccess(res, response);
});

const getOrderById = tryCatch(async (req, res) => {
  const params = req.params.orderId;
  const response = await query.getOrderById(params);
  return utils.responseSuccess(res, response);
});

const getOrderByUserId = tryCatch(async (req, res) => {
  const userId = req.user;
  const response = await query.getOrderByUserId(userId);
  return utils.responseSuccess(res, response);
});

const getOrderByUserIdPast = tryCatch(async (req, res) => {
  const userId = req.user;
  const response = await query.getOrderByUserIdPast(userId);
  return utils.responseSuccess(res, response);
});

const getBookOrder = tryCatch(async (req, res) => {
  const params = req.query;
  const response = await query.getBookOrder(params);
  return utils.responseSuccess(res, response);
});

const bookOrder = tryCatch(async (req, res) => {
  const payload = req.body;
  const userId = req.user;
  await utils.validateSchema(payload, schema.bookOrder);
  const response = await command.bookOrder(payload, userId);
  return utils.responseSuccess(res, response);
});

const transaction = tryCatch(async (req, res) => {
  const payload = req.body;
  await utils.validateSchema(payload, schema.orderId);
  const response = await command.transaction(payload);
  return utils.responseSuccess(res, response);
});

const uploadImageTransaction = tryCatch(async (req, res) => {
  const params = req.params.orderId;
  const file = req.file;
  const response = await command.uploadImageTransaction(file, params);
  return utils.responseSuccess(res, response);
});

const transactionSuccess = tryCatch(async (req, res) => {
  const payload = req.body;
  await utils.validateSchema(payload, schema.orderId);
  const response = await command.transactionSuccess(payload);
  return utils.responseSuccess(res, response);
});

const transactionCancel = tryCatch(async (req, res) => {
  const payload = req.body;
  await utils.validateSchema(payload, schema.orderId);
  const response = await command.transactionCancel(payload);
  return utils.responseSuccess(res, response);
});

const transactionRejected = tryCatch(async (req, res) => {
  const payload = req.body;
  await utils.validateSchema(payload, schema.orderId);
  const response = await command.transactionRejected(payload);
  return utils.responseSuccess(res, response);
});

const scheduler = async () => {
  cron.schedule("* * * * *", async () => {
    await command.expiredOrder();
  });
};

export default {
  getOrders,
  getOrderById,
  getOrderByUserId,
  getBookOrder,
  bookOrder,
  transaction,
  uploadImageTransaction,
  transactionSuccess,
  transactionCancel,
  transactionRejected,
  scheduler,
  getOrderByUserIdPast
};
