import Category from "../../models/category.js";

export default class Categories {
  async insertManyCategory(data) {
    const result = await Category.bulkCreate(data);
    return result;
  }
}
