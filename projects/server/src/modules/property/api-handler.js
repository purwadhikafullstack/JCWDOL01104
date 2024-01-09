import tryCatch from "../../utils/try-catch.js";
import QueryProperty from "./query-domain.js";
import CommandProperty from "./command-domain.js";
import schema from "../../utils/schema.js";
import utils from "../../utils/utils.js";

const query = new QueryProperty();
const command = new CommandProperty();

const getLocations = tryCatch(async (req, res) => {
  const params = req.query;
  const response = await query.getLocations(params);
  return utils.responseSuccess(res, response);
});

const getProperties = tryCatch(async (req, res) => {
  const params = req.query;
  const response = await query.getProperties(params);
  return utils.responseSuccess(res, response);
});

const getPropertyById = tryCatch(async (req, res) => {
  const params = req.params.propertyId;
  const response = await query.getPropertyById(params);
  return utils.responseSuccess(res, response);
});

const getPropertyFavorite = tryCatch(async (req, res) => {
  const userId = req.user;
  const response = await query.getPropertyFavorite(userId);
  return utils.responseSuccess(res, response);
});

const addProperty = tryCatch(async (req, res) => {
  const payload = req.body;
  await utils.validateSchema(payload, schema.addProperty);
  const response = await command.addProperty(payload);
  return utils.responseSuccess(res, response, "Success", 201);
});

const setFavorite = tryCatch(async (req, res) => {
  const payload = req.body;
  await utils.validateSchema(payload, schema.propertyId);
  const userId = req.user;
  const response = await command.setFavorite(payload, userId);
  return utils.responseSuccess(res, response);
});

export default { getLocations, getProperties, getPropertyById, getPropertyFavorite, addProperty, setFavorite };
