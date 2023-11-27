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
  userId: joi.string().required(),
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
  userId: joi.string().required(),
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
  gender: joi.string().valid("male", "female").allow(),
  birthdate: joi.number().allow(),
});

const schema = { register, login, otpRequest, verifyEmail, updatePassword, email, resetPassword, updateUser };
export default schema;
