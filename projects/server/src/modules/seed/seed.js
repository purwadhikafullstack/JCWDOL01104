import { Router } from "express";
import tryCacth from "../../utils/try-catch.js";
import utils from "../../utils/utils.js";
import AppError from "../../utils/app-error.js";
import Roles from "../role/repositories.js";
import Categories from "../category/repositories.js";
import Locations from "../../modules/location/repositories.js";
import Properties from "../../modules/property/repositories.js";
import Rooms from "../../modules/room/repositories.js";
import Facilities from "../../modules/facility/repositories.js";
import Data from "../../../data/data.js";

const router = Router();
const role = new Roles();
const category = new Categories();
const facility = new Facilities();
const location = new Locations();
const property = new Properties();
const room = new Rooms();

const seed = tryCacth(async (req, res) => {
  const checkRole = await role.findManyRole();
  if (checkRole && checkRole.length !== 0) throw new AppError("Database Sudah Dibuat ✋", 400);
  await role.insertManyRole(Data.role);
  await category.insertManyCategory(Data.category);
  await facility.insertManyFacility(Data.facility);
  await location.insertManyLocation(Data.location);
  // await property.insertManyProperty(Data.property);
  // await room.insertManyRoom(Data.room);
  return utils.responseSuccess(res);
});

router.get("/", seed);
export default router;
