import joi from "joi";

const register = joi.object({
  name: joi.string().min(3).max(50).required(),
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

const schema = { register };
export default schema;
