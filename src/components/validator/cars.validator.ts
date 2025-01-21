import Joi from 'joi';

export const carValidator = Joi.object({
    brand: Joi.string()
        .min(1)
        .max(20)
        .pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]+$/)
        .required()
        .messages({
            "string.base": "Brand must be a string",
            "string.min": "Brand must be at least 3 characters long",
            "string.max": "Brand must be less than or equal to 20 characters",
            "string.pattern.base": "Brand must contain only letters",
            "any.required": "Brand is required",
        }),

    price: Joi.number()
        .min(0)
        .max(1000000)
        .required()
        .messages({
            "number.base": "Price must be a number",
            "number.min": "Price must be greater than or equal to 0",
            "number.max": "Price must be less than or equal to 1,000,000",
            "any.required": "Price is required",
        }),

    year: Joi.number()
        .min(1990)
        .max(2024)
        .required()
        .messages({
            "number.base": "Year must be a number",
            "number.min": "Year must be greater than or equal to 1990",
            "number.max": "Year must be less than or equal to the current year 2024",
            "any.required": "Year is required",
        }),
});