import joi from "joi";

const register = joi.object({
  name: joi
    .string()
    .min(3)
    .max(50)
    .regex(/^[A-Za-z '.]+$/)
    .required(),
  email: joi
    .string()
    .min(3)
    .max(50)
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "me", "net"] } })
    .required(),
  password: joi.string().min(6).max(16).required(),
  phoneNumber: joi.string().min(9).max(13).required(),
  role: joi.string().valid("user", "tenant"),
});

const login = joi.object({
  emailOrPhoneNumber: joi
    .string()
    .min(3)
    .max(50)
    .regex(/^[0-9A-Za-z@'.]+$/),
  password: joi.string().min(6).max(16).required(),
});

const otpRequest = joi.object({
  email: joi
    .string()
    .min(3)
    .max(50)
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "me", "net"] } })
    .required(),
});

const verifyEmail = joi.object({
  email: joi
    .string()
    .min(3)
    .max(50)
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "me", "net"] } })
    .required(),
  otp: joi.string().min(6).max(6).required(),
});

const updatePassword = joi.object({
  oldPassword: joi.string().min(6).max(16).required(),
  newPassword: joi
    .string()
    .min(6)
    .max(16)
    .disallow(joi.ref("oldPassword"))
    .required()
    .messages({ "any.base": "does not match" }),
  confirmPassword: joi
    .any()
    .equal(joi.ref("newPassword"))
    .required()
    .label("Confirm password")
    .options({ messages: { "any.only": "{{#label}} does not match" } }),
});

const email = joi.object({
  email: joi
    .string()
    .min(3)
    .max(50)
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "me", "net"] } })
    .required(),
});

const resetPassword = joi.object({
  newPassword: joi.string().min(6).max(16).required(),
  confirmPassword: joi
    .any()
    .equal(joi.ref("newPassword"))
    .required()
    .label("Confirm password")
    .options({ messages: { "any.only": "{{#label}} does not match" } }),
  token: joi.string().required(),
});

const updateUser = joi.object({
  name: joi
    .string()
    .min(3)
    .max(50)
    .regex(/^[A-Za-z '.]+$/)
    .allow(),
  email: joi
    .string()
    .min(3)
    .max(50)
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "me", "net"] } })
    .allow(),
  password: joi.string().min(6).max(16).allow(),
  gender: joi.string().valid("male", "female").allow(),
  birthdate: joi.number().allow(),
});

const addProperty = joi.object({
  name: joi.string().required(),
  description: joi.string().required(),
  imageUrl: joi.string().required(),
  userId: joi.number().required(),
  locationId: joi.number().required(),
  categoryId: joi.number().required(),
});

const addRoom = joi.object({
  name: joi.string().required(),
  price: joi.number().required(),
  description: joi.string().required(),
  guest: joi.number().required(),
  roomInfo: joi.string().required(),
  imageUrl: joi.string().required(),
  propertyId: joi.number().required(),
});

const bookOrder = joi.object({
  startDate: joi.number().required(),
  endDate: joi.number().required(),
  guest: joi.number().required(),
  totalPrice: joi.number().required(),
  roomId: joi.alternatives().try(joi.string(), joi.number()).required(),
});

const addReview = joi.object({
  review: joi.string().required(),
  clean: joi.number().integer().max(5).min(1).required(),
  security: joi.number().integer().max(5).min(1).required(),
  satisfied: joi.number().integer().max(5).min(1).required(),
  service: joi.number().integer().max(5).min(1).required(),
  propertyId: joi.number().required(),
  roomId: joi.number().required(),
  userId: joi.number().required(),
});

const propertyId = joi.object({
  propertyId: joi.number().required(),
});

const orderId = joi.object({
  orderId: joi.string().required(),
});

const schema = {
  register,
  login,
  otpRequest,
  verifyEmail,
  updatePassword,
  email,
  resetPassword,
  updateUser,
  addProperty,
  addRoom,
  bookOrder,
  addReview,
  propertyId,
  orderId,
};
export default schema;
