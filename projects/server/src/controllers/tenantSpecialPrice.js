import Property from "../models/property.js";
import SpecialPrice from "../models/special-price.js";
import { Op } from "sequelize";

Property.hasMany(SpecialPrice)
SpecialPrice.belongsTo(Property)

SpecialPrice.sync();
Property.sync();

export const addSpecialPrice = async (req, res) => {
  try {
    const propId = req.params.id;
    const { date } = req.body;
    const dateBigInt = Date.parse(date); // converting value to big int miliseconds
    const dateUpdate = new Date(dateBigInt).setHours(14, 0, 0, 0);
    const special = await SpecialPrice.create({
      percentage: req.body?.percentage,
      price: req.body?.price,
      date: dateUpdate,
      propertyId: propId,
    });

    return res.status(210).send({
      message: "Special Price added to property successfully",
      data: special,
    });
  } catch (err) {
    return res.status(500).send({
      message: err.message,
    });
  }
};

export const getSpecialPriceData = async (req, res) => {
  try {
    const date = BigInt(req.params.date);
    const dateInMilis = Number(date);
    const startOfDay = new Date(dateInMilis).setHours(0, 0, 0, 0);
    const endOfDay = new Date(dateInMilis).setHours(23, 59, 59, 999);

    const special = await SpecialPrice.findOne({
      where: {
        date: { [Op.between]: [startOfDay, endOfDay] },
      },
    });
    return res.status(210).send({
      message: "Special Price at date acquired successfully",
      data: special,
    });
  } catch (err) {
    return res.status(500).send({
      message: err.message,
    });
  }
};
