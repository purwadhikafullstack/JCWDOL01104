import Otp from "../../models/otp.js";

export default class Otps {
  async findOneOtp(params) {
    const result = await Otp.findOne(params);
    return result;
  }

  async inserOnetOtp(params) {
    const result = await Otp.create(params);
    return result;
  }

  async updateOnetOtp(data, params) {
    const result = await Otp.update(data, params);
    return result;
  }

  async deleteOnetOtp(params) {
    const result = await Otp.destroy(params);
    return result;
  }
}
