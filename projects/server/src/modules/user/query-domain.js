import User from "./repositories.js";
import Role from "../../models/role.js";

export default class QueryUser {
  constructor() {
    this.user = new User();
  }
  async getUsers(query) {
    // const params = { include: [{ model: Role }] };
    const params = {};
    const data = await this.user.findAllUser(params);
    return data;
  }

  async getUserById(userId) {
    const params = { id: userId };
    const data = await this.user.findOneUser(params);
    return data;
  }

  async getUserByEmail(email) {
    const params = { where: { email: email } };
    const data = await this.user.findOneUser(params);
    return data;
  }
}
