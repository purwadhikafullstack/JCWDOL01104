import User from "./repositories.js";
import Role from "../../models/role.js";
import AppError from "../../utils/app-error.js";

export default class QueryUser {
  constructor() {
    this.user = new User();
  }
  async getUsers(query) {
    const params = { include: [{ model: Role }] };
    const data = await this.user.findAllUser(params);
    return data;
  }

  async getUserById(userId) {
    const params = { where: { id: userId } };
    const data = await this.user.findOneUser(params);
    return data;
  }

  async getUserByEmail(email) {
    const params = { include: [{ model: Role }], where: { email: email } };
    const data = await this.user.findOneUser(params);
    return data;
  }

  async getUserByPhoneNumber(phone) {
    const params = { include: [{ model: Role }], where: { phone_number: phone } };
    const data = await this.user.findOneUser(params);
    return data;
  }

  async getUserByEmailOrPhoneNumber(emailOrPhoneNumber) {
    const chekEmail = await this.getUserByEmail(emailOrPhoneNumber);
    const chekPhone = await this.getUserByPhoneNumber(emailOrPhoneNumber);
    if (!chekEmail && !chekPhone) throw new AppError("Email / No. HP Atau Password Tidak Sesuai", 403);
    const data = chekEmail ? chekEmail.dataValues : chekPhone.dataValues;
    return data;
  }
}
