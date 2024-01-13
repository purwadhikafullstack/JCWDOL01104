import Favorite from "../../models/favorite.js";
import User from "../../models/user.js";
import Property from "../../models/property.js";

Favorite.sync();
Favorite.belongsTo(User);
Favorite.belongsTo(Property);

export default class Favorites {
  async findAndCountAllFavorite(params) {
    const result = await Favorite.findAndCountAll(params);
    return result;
  }

  async findOneFavorite(params) {
    const result = await Favorite.findOne(params);
    return result;
  }

  async insetOneFavorite(data) {
    const result = await Favorite.create(data);
    return result;
  }

  async updateOneFavorite(data, params) {
    const result = await Favorite.update(data, params);
    return result;
  }
}
