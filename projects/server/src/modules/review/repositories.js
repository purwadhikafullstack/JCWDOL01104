import Review from "../../models/review.js";
import User from "../../models/user.js";
import Room from "../../models/room.js";
import Property from "../../models/property.js";

Review.sync();
Review.belongsTo(User);
Review.belongsTo(Room);
Review.belongsTo(Property);

export default class Reviews {
  async findManyReview(params) {
    const result = await Review.findAll(params);
    return result;
  }

  async findAndCountAllReview(params) {
    const result = await Review.findAndCountAll(params);
    return result;
  }

  async findOneReview(params) {
    const result = await Review.findOne(params);
    return result;
  }

  async insertOneReview(data) {
    const result = await Review.create(data);
    return result;
  }
}
