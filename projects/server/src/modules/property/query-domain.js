import { Op } from "sequelize";
import Property from "./repositories.js";
import Location from "../../models/location.js";
import Room from "../../models/room.js";
import Locations from "../location/repositories.js";

export default class QueryProperty {
  constructor() {
    this.property = new Property();
    this.location = new Locations();
  }

  async getLocations(query) {
    const { city } = query;
    const params = { where: { city: { [Op.like]: `%${city}%` } }, limit: 10 };
    const data = await this.location.findManyLocation(params);
    return data;
  }

  async getProperties(query) {
    const { city, limit } = query;
    let params = { include: [{ model: Location }], limit: Number(limit) || 8 };
    if (city) {
      params = {
        include: [{ model: Location }],
        where: { "$location.city$": { [Op.like]: `%${city}%` } },
        limit: Number(limit),
      };
    }
    const data = await this.property.findAllProperty(params);
    return data;
  }

  async getPropertyById(propertyId) {
    const params = { include: [{ model: Location }, { model: Room }], where: { id: propertyId } };
    const data = await this.property.findOneProperty(params);
    return data;
  }
}
