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

const schema = { register, login, otpRequest, verifyEmail };
export default schema;
