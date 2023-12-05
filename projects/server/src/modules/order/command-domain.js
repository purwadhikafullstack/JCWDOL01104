import fs from "fs";
import midtrans from "midtrans-client";
import Orders from "./repositories.js";
import QueryOrder from "./query-domain.js";
import AppError from "../../utils/app-error.js";
import QueryUser from "../../modules/user/query-domain.js";
import QueryRoom from "../../modules/room/query-domain.js";
import QueryProperty from "../../modules/property/query-domain.js";
import mailer from "../../helpers/mailer.js";
import { v4 as uuidv4 } from "uuid";
import { FormatToIDR } from "../../helpers/helpers.js";

// Order flow --> unpaid | unconfirm | success | cancel | rejected
export default class CommandOrder {
  constructor() {
    this.order = new Orders();
    this.query = new QueryOrder();
    this.queryUser = new QueryUser();
    this.queryProperty = new QueryProperty();
    this.queryRoom = new QueryRoom();
  }

  async bookOrder(payload) {
    const { startDate, endDate, guest, userId, roomId } = payload;

    const oneDay = 24 * 36 * 1e5;
    const firstDate = new Date(startDate);
    const secondDate = new Date(endDate);
    const countDay = Math.round(Math.abs((firstDate - secondDate) / oneDay));

    const getRoom = await this.queryRoom.getRoomById(roomId);
    if (!getRoom) throw new AppError("Room not Found", 404);
    const getUser = await this.queryUser.getUserById(userId);
    if (!getUser) throw new AppError("Property not Found", 404);
    const getProperty = await this.queryProperty.getPropertyById(getRoom.propertyId);
    if (!getProperty) throw new AppError("Property not Found", 404);

    const totalPrice = countDay * getRoom.price;

    const data = {
      id: uuidv4(),
      start_date: startDate,
      end_date: endDate,
      guest: guest,
      total_price: totalPrice,
      userId: userId,
      roomId: roomId,
      status: "unpaid",
      expired: new Date().getTime() + 2 * 36 * 1e5,
    };
    const order = await this.order.insertOneOrder(data);

    const content = {
      username: getUser.dataValues.name,
      orderId: order.id,
      numberOfNight: countDay,
      guest: guest,
      propertyName: getProperty.dataValues.name,
      propertyRoom: getRoom.dataValues.name,
      price: `${FormatToIDR(getRoom.price)}`,
      totalPrice: `${FormatToIDR(totalPrice)}`,
    };

    mailer.invoicePdf(content);
  }

  async transaction(payload) {
    const { orderId } = payload;

    const getOrder = await this.query.getOrderById(orderId);
    if (!getOrder) throw new AppError("Order not Found", 404);
    if (new Date().getTime() > getOrder.dataValues.expired) {
      await this.order.updateOneOrder({ status: "expired" }, { where: { id: orderId } });
      throw new AppError("Order Expired", 400);
    }
    const snap = new midtrans.Snap({
      isProduction: false,
      clientKey: "SB-Mid-client-ua4G3MNRZB0VnKx_",
      serverKey: "SB-Mid-server-NI6Hev6CLYDR6uF-FWQSOZ41",
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

    const email = getOrder.dataValues.user.email;
    const content = {
      orderId: orderId,
      username: getOrder.dataValues.user.name,
    };

    mailer.invoice(email, content);
    await this.order.updateOneOrder({ status: "unconfirm" }, { where: { id: orderId } });
    return snap.createTransaction(parameter);
  }

  async expiredOrder(payload) {
    const params = { where: { id: orderId } };
    const { orderId } = payload;
    const getOrder = await this.query.getOrderById(orderId);
    if (!getOrder) throw new AppError("Order not Found", 404);
    if (getOrder.dataValues.status === "unpaid") await this.order.updateOneOrder({ status: "expired" }, params);
  }

  async uploadImageTransaction(file, orderId) {
    const params = { where: { id: orderId } };
    const getOrder = await this.query.getOrderById(orderId);
    let updateData = {};
    const imageUrl = `${process.env.SERVER_LINK}/${file.filename}`;
    if (getOrder && getOrder.dataValues.image_url !== imageUrl) {
      updateData.image_url = imageUrl;
    }
    if (getOrder && getOrder.dataValues.image_url) {
      const path = getOrder.dataValues.image_url.substring(22);
      fs.unlink(`public/${path}`, (err) => {
        if (err) console.log(err);
      });
    }
    await this.order.updateOneOrder(updateData, params);
  }
}
