import express from "express";
import isAuthenticatedMiddleware from "../middlewares/isAuthenticated.middleware";
import * as ExpenseValidator from "../validator/expense.validator";
import * as ExpenseController from "../controllers/expense/expense.controllers";

const expenseRouter = express.Router();

expenseRouter.post('/create', isAuthenticatedMiddleware, ExpenseValidator.createExpenseValidator, ExpenseController.createExpenseController);
expenseRouter.get('/getExpenses', isAuthenticatedMiddleware, ExpenseValidator.getExpensesValidator, ExpenseController.getExpensesController);

export default expenseRouter;