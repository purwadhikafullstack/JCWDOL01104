import { Op } from "sequelize";
import jwt from "jsonwebtoken";
import Users from "./repositories.js";
import QueryUser from "./query-domain.js";
import AppError from "./../../utils/app-error.js";
import bcrypt from "../../helpers/bcrypt.js";
import mailer from "../../helpers/mailer.js";
import Role from "../role/repositories.js";
import otpGenerator from "otp-generator";
import Otps from "../../modules/otp/reposotories.js";

export default class CommandUser {
  constructor() {
    this.role = new Role();
    this.otp = new Otps();
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
    if (!checkPwd) throw new AppError("Email atau password tidak sesuai", 403);
    const data = { id: getUser.id, image_url: getUser.image_url, role: getUser.role.role };
    const token = jwt.sign(data, process.env.SECRET_KEY, { expiresIn: "30d" });
    return token;
  }

  async requestOtp(payload) {
    const { email } = payload;
    const getOtp = await this.otp.findOneOtp({ where: { email: email } });
    const otp = otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });
    if (!getOtp) await this.otp.inserOnetOtp({ email: email, otp: otp });
    if (getOtp && getOtp.dataValues.otpExpired < Date.now()) {
      await this.otp.deleteOnetOtp({ where: { email: email } });
      throw new AppError("Otp tidak berlaku", 403);
    }
    if (getOtp) await this.otp.updateOnetOtp({ otp: otp }, { where: { email: email } });
    await mailer.verifyEmail(email, otp);
  }

  async verifyEmail(payload) {
    const { email, otp } = payload;
    const getOtp = await this.otp.findOneOtp({ where: { [Op.and]: [{ email: email }, { otp: otp }] } });
    if (!getOtp) throw new AppError("Otp tidak valid", 403);
    const updateData = { email_verified: true };
    await this.user.updateOneUser(updateData, { where: { email: email } });
    await this.otp.deleteOnetOtp({ where: { [Op.and]: [{ email: email }, { otp: otp }] } });
  }

  async updatePassword(payload) {
    const { oldPassword, newPassword, confirmPassword, userId } = payload;
    const getUser = await this.query.getUserById(userId);
    if (!getUser) throw new AppError("User not found", 404);
    const checkPwd = await bcrypt.compareHash(oldPassword, getUser.dataValues.password);
    if (!checkPwd) throw new AppError("Password isn't valid", 403);
    if (!newPassword || !confirmPassword) throw new AppError("Field are require");
    if (newPassword && confirmPassword) {
      if (newPassword !== confirmPassword) throw new AppError("Password must match", 403);
      const pwd = await bcrypt.generateHash(newPassword);
      const updateData = { password: pwd };
      const params = { where: { id: userId } };
      await this.user.updateOneUser(updateData, params);
    }
  }

  async resetPassword(payload) {
    const { email } = payload;
    const getUser = await this.query.getUserByEmail(email);
    if (!getUser) throw new AppError("User not found", 404);
    const token = await bcrypt.generateHash(String(getUser.dataValues.id));
    const link = `${process.env.CLIENT_LINK}/reset-password?token=${token}&userId=${getUser.dataValues.id}`;
    const username = getUser.dataValues.name;
    const contain = { link, username };
    await mailer.resetPassword(email, contain);
  }

  async updateResetPassword(payload) {
    const { newPassword, confirmPassword, token, userId } = payload;
    const getUser = await this.query.getUserById(userId);
    if (!getUser) throw new AppError("User not found", 403);
    const validToken = await bcrypt.compareHash(userId, String(token));
    if (!validToken) throw new AppError("Token invalid", 403);
    if (!newPassword || !confirmPassword) throw new AppError("Field are require");
    if (newPassword && confirmPassword) {
      if (newPassword !== confirmPassword) throw new AppError("Password must match", 403);
      const pwd = await bcrypt.generateHash(newPassword);
      const updateData = { password: pwd };
      const params = { where: { id: userId } };
      await this.user.updateOneUser(updateData, params);
    }
  }

  async updateUser(payload, userId) {
    const { name, email, gender, birthdate } = payload;
    const getUser = await this.query.getUserById(userId);
    if (!getUser) throw new AppError("User not found", 403);
    if (email) {
      const checkUser = await this.query.getUserByEmail(email);
      if (checkUser) throw new AppError("Email Telah Digunakan", 403);
    }
    const userData = getUser.dataValues;
    let updateData = {};
    if (userData && userData.name !== name) {
      updateData.name = name;
    }
    if (userData && userData.email !== email) {
      updateData.email = email;
    }
    if (userData && userData.gender !== gender) {
      updateData.gender = gender;
    }
    if (userData && userData.birthdate !== birthdate) {
      updateData.birthdate = birthdate;
    }

    await this.user.updateOneUser(updateData, { where: { id: userId } });
  }
}
