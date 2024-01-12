import Reviews from "./repositories.js";
import Room from "../../models/room.js";
import User from "../../models/user.js";

export default class QueryReview {
  constructor() {
    this.review = new Reviews();
  }

  async getReviews() {
    const params = {};
    const data = await this.review.findManyReview(params);
    return data;
  }

  async getReviewByPropertyId(query) {
    const { propertyId } = query;
    const paramsScore = {
      where: { propertyId: propertyId },
    };

    const paramsReview = {
      include: [{ model: Room }, { model: User }],
      where: { propertyId: propertyId },
      // limit: 4,
      order: [["createdAt", "desc"]],
    };

    const data = await this.review.findAndCountAllReview(paramsScore);
    const reviews = await this.review.findAndCountAllReview(paramsReview);

    const countScore = (table) => {
      return (
        data.rows.length > 0
          ? data.rows.reduce((a, b) => {
              return a + b[table];
            }, 0) / data.count
          : 0
      ).toFixed(1);
    };

    const clean = countScore("clean");
    const security = countScore("security");
    const service = countScore("service");
    const satisfied = countScore("satisfied");
    const rating = ((Number(clean) + Number(security) + Number(service) + Number(satisfied)) / 4).toFixed(1);
    const score = { rating, clean, security, service, satisfied };

    return { reviews, score };
  }

  async getReviewByRoomId(query) {
    const roomId = query;
    const params = {
      where: roomId,
    };

    const data = await this.review.findAndCountAllReview(params);
    const countScore = (table) => {
      return (
        data.rows.length > 0
          ? data.rows.reduce((a, b) => {
              return a + b[table];
            }, 0) / data.count
          : 0
      ).toFixed(1);
    };

    const clean = countScore("clean");
    const security = countScore("security");
    const service = countScore("service");
    const satisfied = countScore("satisfied");
    const rating = ((Number(clean) + Number(security) + Number(service) + Number(satisfied)) / 4).toFixed(1);
    const totalReview = data.count;

    return { rating, totalReview };
  }

  async getReviewByOrderId(query) {
    const orderId = query;
    const params = {
      where: {orderId:orderId},
    };
    const data = await this.review.findOneReview(params);
    if (data){return true}
    else if (!data){return false}
  }
}
