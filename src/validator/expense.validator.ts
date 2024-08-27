import Joi from "joi";
import { AuthenticatedRequestHandler } from "../interfaces";
import { description, title } from "../utils/regexPatterns";

export const createExpenseValidator: AuthenticatedRequestHandler = (req, res, next) => {
    const createExpenseValidationSchema = Joi.object({
        title: Joi.string().required().pattern(title).label('title'),
        description: Joi.string().required().pattern(description).label('description'),
        amount: Joi.number().required().min(0).max(20000000000).label('amount'),
        category: Joi.string().required().label('category'),
        spentAt: Joi.date().required().label('spentAt')
    })
    const errors = createExpenseValidationSchema.validate(req.body);
    if (errors.error) {
        console.log(errors.error)
        return res.status(400).json({ message: 'Invalid Values' })
    }
    next();
}

export const getExpensesValidator: AuthenticatedRequestHandler = (_, __, next) => {
    return next();
}