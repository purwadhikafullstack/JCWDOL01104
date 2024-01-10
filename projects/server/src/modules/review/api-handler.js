import tryCatch from "../../utils/try-catch.js";
import QueryReview from "./query-domain.js";
import CommandReview from "./command-domain.js";
import schema from "../../utils/schema.js";
import utils from "../../utils/utils.js";

const query = new QueryReview();
const command = new CommandReview();

const getReviews = tryCatch(async (req, res) => {
  const params = req.query;
  const response = await query.getReviews(params);
  return utils.responseSuccess(res, response);
});

const getReviewByPropertyId = tryCatch(async (req, res) => {
  const params = req.query;
  const response = await query.getReviewByPropertyId(params);
  return utils.responseSuccess(res, response);
});

const getReviewByRoomId = tryCatch(async (req, res) => {
  const params = req.query;
  const response = await query.getReviewByRoomId(params);
  return utils.responseSuccess(res, response);
});

const addReview = tryCatch(async (req, res) => {
  const payload = req.body;
  const userId = req.user;
  await utils.validateSchema(payload, schema.addReview);
  const response = await command.addReview(payload, userId);
  return utils.responseSuccess(res, response);
});

export default { getReviews, getReviewByPropertyId, getReviewByRoomId, addReview };
