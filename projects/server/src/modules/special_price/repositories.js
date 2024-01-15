import SpecialPrice from "../../models/special-price.js";
import Property from "../../models/property.js";

SpecialPrice.sync();
SpecialPrice.belongsTo(Property);

export default class SpecialPrices {
  async findManySpecialPrice() {
    const result = await SpecialPrice.findAll();
    return result;
  }

  async findOneSpecialPrice(params) {
    const result = await SpecialPrice.findOne(params);
    return result;
  }

  async insertManySpecialPrice(data) {
    const result = await SpecialPrice.bulkCreate(data);
    return result;
  }
}
