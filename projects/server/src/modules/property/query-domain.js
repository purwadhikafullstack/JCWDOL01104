import { Op, Sequelize, where } from "sequelize";
import Properties from "./repositories.js";
import Location from "../../models/location.js";
import Room from "../../models/room.js";
import FacilityList from "../../models/facility-list.js";
import Favorites from "../favorite/repositories.js";
import Locations from "../location/repositories.js";
import Favorite from "../../models/favorite.js";
import Property from "../../models/property.js";
import Facility from "../../models/facility.js";
import Facilities from "../facility/repositories.js";
import User from "../../models/user.js";
import Category from "../../models/category.js";
import redisClient from "../../helpers/redis.js";

export default class QueryProperty {
  constructor() {
    this.property = new Properties();
    this.location = new Locations();
    this.favorite = new Favorites();
    this.facility = new Facilities();
  }

  async getLocations(query) {
    const { city } = query;
    const params = { where: { city: { [Op.like]: `%${city}%` } }, limit: 10 };
    const data = await this.location.findManyLocation(params);
    return data;
  }

  async getProperties(query) {
    const { city, limit, apartement, hotel, villa, price, sort, facility } = query;
    const limitPage = Number(limit) || 4;
    const relation = [
      { model: Location, where: { city: { [Op.like]: `%${city}%` } } },
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
      order: [["id", "desc"]],
    };

    if (apartement || hotel || villa) {
      relation.push({
        model: Category,
        where: { [Op.or]: [{ category: apartement }, { category: hotel }, { category: villa }] },
      });
    }

    if (facility) {
      relation.push({
        model: FacilityList,
        include: [{ model: Facility, where: { [Op.or]: [{ facility: facility }] } }],
      });
    }

    if (sort) {
      params.order = [["name", sort]];
    }

    if (price) {
      params.include[1].order = [["price", price]];
    }

    const data = await this.property.findAndCountAllProperty(params);
    return data;
  }

  async getPropertyById(propertyId) {
    const key = `propertyById${propertyId}`;
    // const dataRedis = await redisClient.getRedis(key);
    // if (dataRedis) return dataRedis;

    const params = {
      include: [
        { model: Location },
        { model: Room },
        { model: Favorite },
        { model: User },
        { model: FacilityList, include: [{ model: Facility }] },
      ],
      where: { id: propertyId },
    };
    const paramsFacility = { include: [{ model: Facility }], where: { propertyId: propertyId } };
    const facility = await this.facility.findManyFacilityList(paramsFacility);
    const data = await this.property.findOneProperty(params);
    // if (!dataRedis) await redisClient.setExRedis(key, { property: data });
    return { property: data, facility };
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
