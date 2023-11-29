import Location from "../../models/location.js";
import Property from "../../models/property.js";

Location.hasMany(Property);
export default class Locations {
  async findManyLocation(params) {
    const result = await Location.findAll(params);
    return result;
  }

  async insertOneLocation(data) {
    const result = await Location.create(data);
    return result;
  }
}
