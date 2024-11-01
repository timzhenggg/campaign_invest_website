import Joi from "joi";

export const emailValidator = Joi.object({
  email: Joi.string().regex(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/).required().messages({
    "string.empty": "Enter your email",
    "string.pattern.base": "Invalid email",
  }),
});