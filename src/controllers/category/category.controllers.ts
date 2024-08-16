import { AuthenticatedRequestHandler } from "../../interfaces";
import { Category } from "../../models/category.model";

export const createCategoryController: AuthenticatedRequestHandler = async (req, res, next) => {
    const { title, description } = req.body;
    try {
        const category = new Category({ title, description });
        await category.save();
        return res.status(201).json({ message: 'Category Created Successfully.' })
    } catch (error) {
        return next(error)
    }
}

export const getCategoriesController: AuthenticatedRequestHandler = async (_, res, next) => {
    try {
        const categories = await Category.find();
        return res.status(200).json({ categories })
    } catch (error) {
        next(error)
    }
} 