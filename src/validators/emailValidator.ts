import Joi from "joi";

export const emailValidator = Joi.object({
  email: Joi.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).optional().allow("").messages({
    "string.empty": "Enter your email",
    "string.pattern.base": "Invalid email",
  }),
});