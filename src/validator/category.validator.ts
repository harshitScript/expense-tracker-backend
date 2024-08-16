import joi from "joi";
import { AuthenticatedRequestHandler } from "../interfaces";
import { description, title } from "../utils/regexPatterns";

export const createCategoryValidator: AuthenticatedRequestHandler = (req, res, next) => {
    const createCategoryValidationSchema = joi.object({
        title: joi.string().required().pattern(title).label('title'),
        description: joi.string().required().pattern(description).label('description'),
    })
    const errors = createCategoryValidationSchema.validate(req.body);
    if (errors.error) {
        return res.status(400).json({ message: 'Invalid Values' })
    }
    next();
}

export const getCategoriesValidator: AuthenticatedRequestHandler = (_, __, next) => {
    next();
}