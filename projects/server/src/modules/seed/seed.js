import { Router } from "express";
import tryCacth from "../../utils/try-catch.js";
import Roles from "../role/repositories.js";
import Categories from "../category/repositories.js";
import utils from "../../utils/utils.js";
import AppError from "../../utils/app-error.js";

const router = Router();
const role = new Roles();
const category = new Categories();

const seed = tryCacth(async (req, res) => {
  const roleData = [{ role: "user" }, { role: "tenant" }];
  const categoryData = [{ name: "villa" }, { name: "hotel" }, { name: "apartement" }];
  const checkRole = await role.findManyRole();
  if (checkRole.length !== 0) throw new AppError("You Have Create Seed, Please Check Your Database!", 400);
  await role.insertManyRole(roleData);
  await category.insertManyCategory(categoryData);
  return utils.responseSuccess(res);
});

router.post("/", seed);
export default router;
