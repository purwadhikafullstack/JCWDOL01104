import Review from "../models/review.js";

export const getReviewByOrderId = async (req, res) => {
  try {
    const orderId = req.params.orderId;

    const data = await Review.findOne({ where: { orderId: orderId } });
    if (data) {
      return res.status(221).send({
        message: "Review by Order Retrieved",
        data: true,
      });
    } else if (!data) {
      return res.status(222).send({
        message: "Review by Order Retrieved",
        data: false,
      });
    }
  } catch (err) {
    return res.send({
      message: err.message,
    });
  }
};
