import Property from "./repositories.js";
import Location from "../../models/location.js";

export default class QueryProperty {
  constructor() {
    this.property = new Property();
  }

  async getProperties(query) {
    const params = { include: [{ model: Location }] };
    const data = await this.property.findAllProperty(params);
    return data;
  }

  async getPropertyById(propertyId) {
    const params = { include: [{ model: Location }], where: { id: propertyId } };
    const data = await this.property.findOneProperty(params);
    return data;
  }
}
