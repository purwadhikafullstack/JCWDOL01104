import Facility from "../../models/facility.js";
import FacilityList from "../../models/facility-list.js";
import Property from "../../models/property.js";

Facility.hasMany(FacilityList);
FacilityList.belongsTo(Facility);
FacilityList.belongsTo(Property);

export default class Facilities {
  async findManyFacility(params) {
    const result = await Facility.findAll(params);
    return result;
  }

  async findManyFacilityList(params) {
    const result = await FacilityList.findAll(params);
    return result;
  }

  async insetOneFacility(data) {
    const result = await Facility.create(data);
    return result;
  }

  async insertManyFacility(data) {
    const result = await Facility.bulkCreate(data);
    return result;
  }

  async insertManyFacilityList(data) {
    const result = await FacilityList.bulkCreate(data);
    return result;
  }
}
