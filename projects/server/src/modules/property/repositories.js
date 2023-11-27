import Property from "../../models/property.js";
import Location from "../../models/location.js";

Property.belongsTo(Location);
export default class Properties {
  async findAllProperty(params) {
    const result = await Property.findAll(params);
    return result;
  }

  async findOneProperty(params) {
    const result = await Property.findOne(params);
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
