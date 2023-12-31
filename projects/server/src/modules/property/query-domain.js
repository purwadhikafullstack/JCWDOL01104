import { Op, Sequelize } from "sequelize";
import Properties from "./repositories.js";
import Location from "../../models/location.js";
import Room from "../../models/room.js";
import Favorites from "../favorite/repositories.js";
import Locations from "../location/repositories.js";
import Favorite from "../../models/favorite.js";
import Property from "../../models/property.js";

export default class QueryProperty {
  constructor() {
    this.property = new Properties();
    this.location = new Locations();
    this.favorite = new Favorites();
  }

  async getLocations(query) {
    const { city } = query;
    const params = { where: { city: { [Op.like]: `%${city}%` } }, limit: 10 };
    const data = await this.location.findManyLocation(params);
    return data;
  }

  async getProperties(query) {
    const { city, limit, apartement, hotel, villa, price, sort } = query;
    const limitPage = Number(limit) || 4;
    const relation = [
      { model: Location },
      {
        model: Room,
        separate: true,
        order: [["price", "asc"]],
      },
      { model: Favorite },
    ];

    let params = {};

    params = {
      include: relation,
      limit: limitPage,
      order: [["name", sort]],
    };

    if (city) {
      params = {
        include: relation,
        order: [["name", sort]],
        where: { "$location.city$": { [Op.like]: `%${city}%` } },
      };
    }

    const data = await this.property.findAndCountAllProperty(params);
    return data;
  }

  async getPropertyById(propertyId) {
    const params = {
      include: [{ model: Location }, { model: Room }, { model: Favorite }],
      where: { id: propertyId },
    };
    const data = await this.property.findOneProperty(params);
    return data;
  }

  async getPropertyFavorite(userId) {
    const params = {
      include: [{ model: Property, include: [{ model: Location }, { model: Room }] }],
      where: { [Op.and]: [{ userId: userId, status: true }] },
    };
    const data = await this.favorite.findAndCountAllFavorite(params);
    return data;
  }
}
