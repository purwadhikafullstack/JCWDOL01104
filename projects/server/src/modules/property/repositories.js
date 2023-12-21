import Property from "../../models/property.js";
import Location from "../../models/location.js";
import Room from "../../models/room.js";
import Favorite from "../../models/favorite.js";
import Review from "../../models/review.js";

Property.belongsTo(Location);
Property.hasMany(Room);
Property.hasMany(Favorite);
Property.hasMany(Review);

export default class Properties {
  async findAndCountAllProperty(params) {
    const result = await Property.findAndCountAll(params);
    return result;
  }

  async findOneProperty(params) {
    const result = await Property.findOne(params);
    return result;
  }

  async insertManyProperty(data) {
    const result = await Property.bulkCreate(data);
    return result;
  }

  async insertOneProperty(data) {
    const result = await Property.create(data);
    return result;
  }

  async updateOneProperty(data, params) {
    const result = await Property.update(data, params);
    return result;
  }
}
