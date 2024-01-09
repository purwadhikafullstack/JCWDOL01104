import fs from "fs";
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
      const user = await this.user.insertOneUser(data);
      const dataUser = {
        id: user.dataValues.id,
        role: findRole.dataValues.role,
      };
      const token = jwt.sign(dataUser, process.env.SECRET_KEY, { expiresIn: "30d" });
      return token;
    }
    if (getUser) {
      const userData = getUser.dataValues;
      const dataUser = {
        id: userData.id,
        role: userData.role.role,
      };
      const token = jwt.sign(dataUser, process.env.SECRET_KEY, { expiresIn: "30d" });
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
    const params = { where: { [Op.and]: [{ email: email, email_verified: false }] } };
    const otp = otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });
    const afterOneDay = new Date(Date.now() + 24 * 36e5).setHours(0, 0, 0, 0);

    const getUser = await this.query.getUserByEmail(email);
    if (!getUser) throw new AppError("User not Found");
    if (getUser.dataValues.email_verified === true) throw new AppError("Email has been Verified", 400);

    const getOtp = await this.otp.findOneOtp(params);
    if (!getOtp) await this.otp.inserOnetOtp({ email: email, otp: otp });
    if (getOtp && getOtp.dataValues.max_request >= 5) throw new AppError("Maksimal 5 Request Per Hari", 400);

    const updateOtp = { otp: otp, max_request: getOtp.dataValues.max_request + 1, refresh_otp: afterOneDay };
    const content = { otp: otp, username: getUser.dataValues.name };
    if (getOtp) await this.otp.updateOnetOtp(updateOtp, params);
    await mailer.verifyEmail(email, content);
  }

  async refreshOtp() {
    const params = { where: { email_verified: false, refresh_otp: { [Op.lte]: Date.now() } } };
    await this.order.updateOneOrder({ max_request: 0 }, params);
  }

  async verifyEmail(payload) {
    const { email, otp } = payload;
    const getOtp = await this.otp.findOneOtp({ where: { [Op.and]: [{ email: email }, { otp: otp }] } });
    if (!getOtp) throw new AppError("Otp tidak valid", 403);
    if (Date.now() > getOtp.dataValues.refresh_otp) throw new AppError("Otp tidak berlaku", 400);
    const updateData = { email_verified: true };
    await this.user.updateOneUser(updateData, { where: { email: email } });
    await this.otp.deleteOnetOtp({ where: { [Op.and]: [{ email: email }, { otp: otp }] } });
  }

  async updatePassword(payload, userId) {
    const { oldPassword, newPassword, confirmPassword } = payload;
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
    if (!getUser.dataValues.password) throw new AppError("Tidak bisa reset password", 400);
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
      updateData.email_verified = false;
    }
    if (userData && userData.gender !== gender) {
      updateData.gender = gender;
    }
    if (userData && userData.birthdate !== birthdate) {
      updateData.birthdate = birthdate;
    }

    await this.user.updateOneUser(updateData, { where: { id: userId } });
  }

  async uploadImage(file, userId) {
    const params = { where: { id: userId } };
    const getUser = await this.query.getUserById(userId);
    let updateData = {};
    const imageUrl = `${process.env.SERVER_LINK}/${file.filename}`;
    if (getUser && getUser.dataValues.image_url !== imageUrl) {
      updateData.image_url = imageUrl;
    }
    const path = getUser.dataValues.image_url.substring(22);
    fs.unlink(`public/${path}`, (err) => {
      if (err) console.log(err);
    });
    await this.user.updateOneUser(updateData, params);
  }
}
