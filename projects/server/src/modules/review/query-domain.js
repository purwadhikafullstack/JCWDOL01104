import Reviews from "./repositories.js";
import Property from "../../models/property.js";
import Room from "../../models/room.js";
import User from "../../models/user.js";

export default class QueryReview {
  constructor() {
    this.review = new Reviews();
  }

  async getReviews(payload) {
    const params = {};
    const data = await this.review.findManyReview(params);
    return data;
  }

  async getReviewByPropertyId(query) {
    const { propertyId, roomId } = query;
    const paramsScore = {
      where: { propertyId: propertyId },
    };

    const paramsReview = {
      include: [{ model: Room }, { model: User }],
      where: { propertyId: propertyId },
      limit: 4,
      order: [["createdAt", "desc"]],
    };

    const data = await this.review.findAndCountAllReview(paramsScore);
    const reviews = await this.review.findAndCountAllReview(paramsReview);

    const clean = (
      data.rows.length > 0
        ? data.rows.reduce((a, b) => {
            return a + b["clean"];
          }, 0) / data.count
        : 0
    ).toFixed(1);
    const security = (
      data.rows.length > 0
        ? data.rows.reduce((a, b) => {
            return a + b["security"];
          }, 0) / data.count
        : 0
    ).toFixed(1);
    const service = (
      data.rows.length > 0
        ? data.rows.reduce((a, b) => {
            return a + b["service"];
          }, 0) / data.count
        : 0
    ).toFixed(1);
    const satisfied = (
      data.rows.length > 0
        ? data.rows.reduce((a, b) => {
            return a + b["satisfied"];
          }, 0) / data.count
        : 0
    ).toFixed(1);

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
    const clean = (
      data.rows.length > 0
        ? data.rows.reduce((a, b) => {
            return a + b["clean"];
          }, 0) / data.count
        : 0
    ).toFixed(1);
    const security = (
      data.rows.length > 0
        ? data.rows.reduce((a, b) => {
            return a + b["security"];
          }, 0) / data.count
        : 0
    ).toFixed(1);
    const service = (
      data.rows.length > 0
        ? data.rows.reduce((a, b) => {
            return a + b["service"];
          }, 0) / data.count
        : 0
    ).toFixed(1);
    const satisfied = (
      data.rows.length > 0
        ? data.rows.reduce((a, b) => {
            return a + b["satisfied"];
          }, 0) / data.count
        : 0
    ).toFixed(1);

    const rating = ((Number(clean) + Number(security) + Number(service) + Number(satisfied)) / 4).toFixed(1);
    const totalReview = data.count;

    return { rating, totalReview };
  }
}
