import Reviews from "./repositories.js";

export default class CommandProperty {
  constructor() {
    this.review = new Reviews();
  }
  
  async addReview(payload,userId) {

    const { review, clean, security, satisfied, service, propertyId, roomId, orderId} = payload;
    const data = {
      review: review,
      clean: clean,
      security: security,
      satisfied: satisfied,
      service: service,
      userId: userId,
      roomId: roomId,
      propertyId: propertyId,
      orderId:orderId
    };
    await this.review.insertOneReview(data);
  }
}
