import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
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