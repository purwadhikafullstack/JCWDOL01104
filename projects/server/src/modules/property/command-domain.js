import { Op } from "sequelize";
import Properties from "./repositories.js";
import QueryProperty from "./query-domain.js";
import Favorites from "../favorite/repositories.js";
import Property from "../../models/property.js";
import User from "../../models/user.js";
import AppError from "../../utils/app-error.js";

export default class CommandProperty {
  constructor() {
    this.property = new Properties();
    this.query = new QueryProperty();
    this.favorite = new Favorites();
  }

  async addProperty(payload) {
    const { name, description, imageUrl, locationId } = payload;
    const data = {
      name: name,
      description: description,
      image_url: imageUrl,
      locationId: locationId,
    };
    await this.property.insertOneProperty(data);
  }

  async setFavorite(payload, userId) {
    const { propertyId } = payload;
    const params = {
      include: [{ model: Property }, { model: User }],
      where: { [Op.and]: [{ userId: userId }, { propertyId: propertyId }] },
    };
    const data = { status: true, userId: userId, propertyId: propertyId };
    const getFavorite = await this.favorite.findOneFavorite(params);
    if (getFavorite) {
      const status = getFavorite.dataValues.status;
      const updateData = { status: !status };
      await this.favorite.updateOneFavorite(updateData, params);
    } else {
      await this.favorite.insetOneFavorite(data);
    }
  }
}
