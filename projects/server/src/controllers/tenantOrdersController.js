import Order from "../models/order.js";
import User from "../models/user.js";
import Property from "../models/property.js";
import Room from "../models/room.js";

const attributesChosen = ["id", "status", "start_date", "end_date", "total_price", "guest", "image_url"];

export const getAllOrders = async (req, res) => {
  try {
    const userId = req.user;

    //   const result = await Order.findAll({
    //     attributes: attributesChosen, where :{}
    //   });
    const result = await User.findByPk(userId, {
      include: [
        {
          model: Property,
          as: "properties",
          include: [
            {
              model: Room,
              as: "rooms",
              include: [{ model: Order, as: "orders" }],
            },
          ],
        },
      ],
    });

    const propertiesOwned = result.properties;
    // Use flatMap to retrieve orders for multiple rooms across all properties
    const allOrders = propertiesOwned.flatMap((property) => {
      // Access rooms associated with the property
      const rooms = property.rooms;
      // Use flatMap to retrieve orders for multiple rooms within a property
      return rooms.flatMap((room) => {
        // Access orders associated with the room
        const orders = room.dataValues.orders;

        // Return an array of orders for the current room
        return orders.map((order) => {
          // Access order fields as needed
          return {
            id: order.dataValues.id,
            status: order.dataValues.status,
            start_date: order.dataValues.start_date,
            end_date: order.dataValues.end_date,
            total_price: order.dataValues.total_price,
            guest: order.dataValues.guest,
            image_url: order.dataValues.image_url,
            // Add other fields as needed
          };
        });
      });
    });

    //   const dataValuesArray = result.map((result) => result.dataValues);

    return res.status(213).send({
      message: "Order Data Succesfully Retrieved",
      data: allOrders,
    });
  } catch (err) {
    return res.send({
      message: err.message,
    });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { orderId } = req.params;

    const { status } = req.body;

    Order.update({ status: status }, { where: { id: orderId } });

    return res.status(214).send({
      message: "Status of Order Succesfully Updated",
    });
  } catch (err) {
    return res.send({
      message: err.message,
    });
  }
};

export const getChartData = async (req, res) => {
  try {
    const userId = req.user;

    //   const result = await Order.findAll({
    //     attributes: attributesChosen, where :{}
    //   });
    const result = await User.findByPk(userId, {
      include: [
        {
          model: Property,
          as: "properties",
          include: [
            {
              model: Room,
              as: "rooms",
              include: [{ model: Order, as: "orders" }],
            },
          ],
        },
      ],
    });

    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const propertiesOwned = result.properties;

    // Use flatMap to retrieve orders for multiple rooms across all properties
    const allOrders = propertiesOwned.flatMap((property) => {
      // Access rooms associated with the property
      const rooms = property.rooms;

      // Use flatMap to retrieve orders for multiple rooms within a property
      return rooms.flatMap((room) => {
        // Access orders associated with the room
        const orders = room.dataValues.orders;

        // Return an array of orders for the current room
        return orders
          .filter((order) => order.status === "success")
          .map((order) => {
            // Access order fields as needed
            return {
              year: new Date(order.start_date).getFullYear(),
              month: month[new Date(order.start_date).getMonth()],
              total_price: order.total_price,
            };
          });
      });
    });

    // Create an object to store the data
    const chartData = {};

    // Loop through the orders and populate the chartData object
    allOrders.forEach((order) => {
      const year = order.year;
      const monthName = order.month;
      const total = order.total_price;

      // If the year is not present in chartData, initialize it with an array
      if (!chartData[year]) {
        chartData[year] = {
          months: Array.from({ length: 12 }, (_, i) => ({
            month: month[i],
            total: 0,
          })),
          totalRevenue: 0,
          totalOrders: 0,
        };
      }

      // Find the index of the month in the month array
      const monthIndex = month.findIndex((m) => m === monthName);

      // Update the total for the corresponding month
      chartData[year].months[monthIndex].month = monthName;
      chartData[year].months[monthIndex].total += total;
      // Update total revenue and total orders for the year
      chartData[year].totalRevenue += total;
      chartData[year].totalOrders++;
    });

    return res.status(215).send({
      message: "Chart Data Succesfully Retrieved",
      data: chartData,
    });
  } catch (err) {
    return res.send({
      message: err.message,
    });
  }
};
