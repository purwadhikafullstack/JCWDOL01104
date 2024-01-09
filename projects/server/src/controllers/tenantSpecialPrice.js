import Property from "../models/property.js";
import SpecialPrice from "../models/special-price.js";

// Property.hasMany(SpecialPrice, {
//   foreignKey: "property_id",
//   sourceKey: "id",
//   as: "special_price",
//   hooks: true,
//   onDelete: "CASCADE",
// });

// SpecialPrice.belongsTo(Property, {
//   foreignKey: "property_id",
//   as: "property",
//   hooks: true,
//   onDelete: "CASCADE",
// });

SpecialPrice.sync();
Property.sync();

export const addSpecialPrice = async (req, res) => {
  try {
    const propId = req.params.id;
    console.log(propId);
    console.log(req.body);
    const { date } = req.body;
    const dateBigInt = Date.parse(date); // converting value to big int miliseconds
    // console.log(from);
    // console.log(to);

    // const fromReparsed = new Date();
    // const toReparsed = new Date();

    // fromReparsed.setTime(Number(from))
    // toReparsed.setTime(Number(to))

    // console.log(fromReparsed.toString());
    // console.log(toReparsed.toString());

    const special = await SpecialPrice.create({
      percentage: req.body?.percentage,
      price: req.body?.price,
      date: dateBigInt,
      property_id: propId,
    });

    return res.status(210).send({
      message: "Special Price added to property successfully",
      data: special,
    });
  } catch (err) {
    return res.send({
      message: err.message,
    });
  }
};
