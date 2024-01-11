import User from "../../models/user.js";
import Role from "../../models/role.js";
import Property from "../../models/property.js";
import Order from "../../models/order.js";
import Favorite from "../../models/favorite.js";
import Review from "../../models/review.js";
import Property from "../../models/property.js";

User.belongsTo(Role);
User.hasMany(Property);
User.hasMany(Order);
User.hasMany(Favorite);
User.hasMany(Review);
User.hasMany(Property)

export default class Users {
  async findAllUser(params) {
    const result = await User.findAll(params);
    return result;
  }

  async findOneUser(params) {
    const result = await User.findOne(params);
    return result;
  }

  async insertOneUser(data) {
    const result = await User.create(data);
    return result;
  }

  async updateOneUser(data, params) {
    const result = await User.update(data, params);
    return result;
  }
}
