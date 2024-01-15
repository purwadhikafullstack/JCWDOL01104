import Role from "../../models/role.js";
import User from "../../models/user.js";

Role.sync();
Role.hasMany(User);

export default class Roles {
  async findManyRole() {
    const result = await Role.findAll();
    return result;
  }

  async findOneRole(params) {
    const result = await Role.findOne(params);
    return result;
  }

  async insertManyRole(data) {
    const result = await Role.bulkCreate(data);
    return result;
  }
}
