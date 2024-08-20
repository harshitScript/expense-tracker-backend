import mongoose, { model } from 'mongoose';
import { CategoryType } from '../interfaces';

const categorySchema = new mongoose.Schema<CategoryType>({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
}, { timestamps: true });

export const Category = model('Category', categorySchema);