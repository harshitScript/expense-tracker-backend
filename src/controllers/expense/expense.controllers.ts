import { AuthenticatedRequestHandler } from "../../interfaces";
import { Expense } from "../../models/expense.model";

export const createExpenseController: AuthenticatedRequestHandler = async (req, res, next) => {
    const { title, description, amount, category, spentAt } = req.body;
    try {
        const expense = new Expense({ title, description, amount, category, spentAt });
        await expense.save();
        return res.status(201).json({ message: 'Expense created successfully.' });
    } catch (error) {
        return next(error)
    }
}

export const getExpensesController: AuthenticatedRequestHandler = async (_, res, next) => {
    try {
        const expenses = await Expense.find();
        return res.status(200).json({ message: 'Expenses fetched successfully.', expenses });
    } catch (error) {
        return next(error)
    }
}