import mongoose from "mongoose";
import { ExpenseType } from "../interfaces";

const expenseSchema = new mongoose.Schema<ExpenseType>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    spentAt: { type: Date, required: true }
}, {
    timestamps: true, timeseries: {
        timeField: 'spentAt',
        granularity: 'minutes',
        metaField: 'category'
    }
})

export const Expense = mongoose.model("Expense", expenseSchema);