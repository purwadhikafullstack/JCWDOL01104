import Properties from "./repositories.js";
import QueryProperty from "./query-domain.js";
import AppError from "../../utils/app-error.js";

export default class CommandProperty {
  constructor() {
    this.property = new Properties();
    this.query = new QueryProperty();
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
}
