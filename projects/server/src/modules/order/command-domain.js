import fs from "fs";
import midtrans from "midtrans-client";
import Orders from "./repositories.js";
import QueryOrder from "./query-domain.js";
import AppError from "../../utils/app-error.js";
import QueryUser from "../user/query-domain.js";
import QueryRoom from "../room/query-domain.js";
import QueryProperty from "../property/query-domain.js";
import mailer from "../../helpers/mailer.js";
import { Op } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import { FormatToIDR } from "../../helpers/helpers.js";

// Order flow --> unpaid | unconfirm | success | expired | cancel | rejected

export default class CommandOrder {
  constructor() {
    this.order = new Orders();
    this.query = new QueryOrder();
    this.queryUser = new QueryUser();
    this.queryProperty = new QueryProperty();
    this.queryRoom = new QueryRoom();
  }

  async bookOrder(payload, userId) {
    const { startDate, endDate, guest, price, totalPrice, roomId } = payload;

    const oneDay = 24 * 36 * 1e5;
    const firstDate = new Date(startDate);
    const secondDate = new Date(endDate);
    const countDay = Math.round(Math.abs((firstDate - secondDate) / oneDay));

    const getRoom = await this.queryRoom.getRoomById(roomId);
    if (!getRoom) throw new AppError("Room Tidak Ditemukan", 404);
    const getUser = await this.queryUser.getUserById(userId);
    if (!getUser) throw new AppError("Property Tidak Ditemukan", 404);
    const getProperty = await this.queryProperty.getPropertyById(getRoom.propertyId);
    if (!getProperty) throw new AppError("Property Tidak Ditemukan", 404);

    const data = {
      id: uuidv4(),
      start_date: startDate,
      end_date: endDate,
      guest: guest,
      total_price: totalPrice,
      userId: userId,
      roomId: roomId,
      status: "unpaid",
    };
    const order = await this.order.insertOneOrder(data);

    const content = {
      username: getUser.dataValues.name,
      orderId: order.id,
      numberOfNight: countDay,
      guest: guest,
      propertyName: getProperty.property.name,
      propertyRoom: getRoom.dataValues.name,
      price: `${FormatToIDR(price)}`,
      totalPrice: `${FormatToIDR(totalPrice)}`,
      roomInfo: getRoom.dataValues.room_info,
      logo_link: process.env.LOGO_LINK,
    };

    mailer.invoicePdf(content);
  }

  async transaction(payload) {
    const { orderId } = payload;
    const getOrder = await this.query.getOrderById(orderId);
    if (!getOrder) throw new AppError("Order Tidak Ditemukan", 404);
    if (new Date().getTime() > getOrder.dataValues.expired) {
      await this.order.updateOneOrder({ status: "expired" }, { where: { id: orderId } });
      throw new AppError("Order Expired", 400);
    }
    const snap = new midtrans.Snap({
      isProduction: false,
      clientKey: process.env.MIDTRANS_CLIENT_KEY,
      serverKey: process.env.MIDTRANS_SERVER_KEY,
    });

    const parameter = {
      transaction_details: {
        order_id: orderId,
        gross_amount: getOrder.dataValues.total_price,
      },
      customer_details: {
        first_name: getOrder.dataValues.user.name,
      },
    };

    const imageUrl = `${process.env.SERVER_LINK}/resources/payment.png`;
    await this.order.updateOneOrder({ status: "unconfirm", image_url: imageUrl }, { where: { id: orderId } });
    return snap.createTransaction(parameter);
  }

  async expiredOrder() {
    const afterTwoHour = new Date(Date.now() - 2 * 36e5);
    const params = { where: { status: "unpaid", createdAt: { [Op.lte]: afterTwoHour } } };
    await this.order.updateOneOrder({ status: "expired" }, params);
  }

  async uploadImageTransaction(file, orderId) {
    const params = { where: { id: orderId } };
    const getOrder = await this.query.getOrderById(orderId);
    let updateData = {};
    const imageUrl = `${process.env.SERVER_LINK}/${file.filename}`;
    if (getOrder && getOrder.dataValues.image_url !== imageUrl) {
      updateData.image_url = imageUrl;
      updateData.status = "unconfirm";
    }
    if (getOrder && getOrder.dataValues.image_url) {
      const pathLength = process.env.SERVER_LINK.length;
      const path = getOrder.dataValues.image_url.substring(pathLength + 1);

      fs.unlink(join(__dirname, `../public/${path}`), (err) => {
        if (err) console.log(err);
      });
    }

    await this.order.updateOneOrder(updateData, params);
  }

  async transactionSuccess(payload) {
    const { orderId } = payload;
    const params = { where: { [Op.and]: [{ id: orderId }, { status: "unconfirm" }] } };

    const getOrder = await this.query.getOrderById(orderId);
    if (!getOrder) throw new AppError("Order Tidak Ditemukan", 404);
    const email = getOrder.dataValues.user.email;
    const content = {
      orderId: orderId,
      username: getOrder.dataValues.user.name,
      logo_link: process.env.LOGO_LINK,
    };

    mailer.invoice(email, content);
    await this.order.updateOneOrder({ status: "success" }, params);
  }

  async transactionCancel(payload) {
    const { orderId } = payload;
    const params = { where: { [Op.and]: [{ id: orderId }, { status: "unpaid" }] } };
    await this.order.updateOneOrder({ status: "cancel" }, params);
  }

  async transactionRejected(payload) {
    const { orderId } = payload;
    const params = {
      where: { [Op.and]: [{ id: orderId }, { [Op.or]: [{ status: "unconfirm" }, { status: "rejected" }] }] },
    };
    await this.order.updateOneOrder({ status: "rejected" }, params);
  }
}
