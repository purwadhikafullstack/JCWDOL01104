import jwt from "jsonwebtoken";
import Users from "./repositories.js";
import QueryUser from "./query-domain.js";
import AppError from "./../../utils/app-error.js";
import bcrypt from "../../helpers/bcrypt.js";
import Role from "../role/repositories.js";

export default class CommandUser {
  constructor() {
    this.role = new Role();
    this.user = new Users();
    this.query = new QueryUser();
  }

  async findOrCreate(payload) {
    const { name, email, picture, email_verified } = payload._json;
    const findRole = await this.role.findOneRole({ where: { role: "user" } });
    const data = {
      name: name,
      email: email,
      image_url: picture,
      email_verified: email_verified,
      roleId: findRole.dataValues.id,
    };
    const getUser = await this.query.getUserByEmail(email);
    if (!getUser) {
      const dataUser = {
        name: name,
        image_url: picture,
        role: findRole.dataValues.role,
      };
      const token = jwt.sign(dataUser, process.env.SECRET_KEY, { expiresIn: "30d" });
      await this.user.insertOneUser(data);
      return token;
    }
    if (getUser) {
      const userData = getUser.dataValues;
      const dataUser = {
        id: userData.id,
        image_url: userData.image_url,
        role: userData.role.role,
      };
      const token = jwt.sign(dataUser, process.env.SECRET_KEY, { expiresIn: "30d" });
      const link = `${process.env.CLIENT_LINK}/auth?token=${token}`;
      // return link;
      return token;
    }
  }

  async register(payload) {
    const { name, email, password, phoneNumber, role } = payload;
    const findRole = await this.role.findOneRole({ where: { role: role } });
    const pwd = await bcrypt.generateHash(password);
    const firstName = name.split(" ")[0];
    const lastName = name.split(" ")[1];
    const avatar = lastName ? firstName + "+" + lastName : name;
    const avatarUrl = `https://ui-avatars.com/api/${avatar}`;
    const data = {
      name: name,
      email: email,
      password: pwd,
      phone_number: phoneNumber,
      image_url: avatarUrl,
      roleId: findRole.dataValues.id,
    };
    const checkUser = await this.query.getUserByEmail(email);
    if (checkUser) throw new AppError("Email sudah digunakan", 400);
    await this.user.insertOneUser(data);
  }

  async login(payload) {
    const { emailOrPhoneNumber, password } = payload;
    const getUser = await this.query.getUserByEmailOrPhoneNumber(emailOrPhoneNumber);
    if (!getUser.password) throw new AppError("Password tidak valid, silakan reset password", 400);
    const checkPwd = await bcrypt.compareHash(password, getUser.password);
    if (!checkPwd) throw new AppError("Email atau password tidak sesui", 403);
    const data = { id: getUser.id, image_url: getUser.image_url, role: getUser.role.role };
    const token = jwt.sign(data, process.env.SECRET_KEY, { expiresIn: "30d" });
    return token;
  }
}
