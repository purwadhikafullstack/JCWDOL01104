import Category from "../../models/category.js";
import Property from "../../models/property.js";

Category.hasMany(Property);
export default class Categories {
  async insertManyCategory(data) {
    const result = await Category.bulkCreate(data);
    return result;
  }
}
