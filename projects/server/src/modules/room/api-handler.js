import tryCatch from "../../utils/try-catch.js";
import QueryRoom from "./query-domain.js";
import CommandRoom from "./command-domain.js";
import schema from "../../utils/schema.js";
import utils from "../../utils/utils.js";

const query = new QueryRoom();
const command = new CommandRoom();

const getRooms = tryCatch(async (req, res) => {
  const params = req.query;
  const response = await query.getRooms(params);
  return utils.responseSuccess(res, response);
});

const getRoomById = tryCatch(async (req, res) => {
  const params = req.params.roomId;
  const response = await query.getRoomById(params);
  return utils.responseSuccess(res, response);
});

const addRoom = tryCatch(async (req, res) => {
  const payload = req.body;
  await utils.validateSchema(payload, schema.addRoom);
  const response = await command.addRoom(payload);
  return utils.responseSuccess(res, response, "Success", 201);
});

export default {
  getRooms,
  getRoomById,
  addRoom,
};
