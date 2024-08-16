import express from "express";
import isAuthenticatedMiddleware from "../middlewares/isAuthenticated.middleware";
import * as CategoryValidator from "../validator/category.validator"
import * as CategoryController from "../controllers/category/category.controllers"

const categoryRouter = express.Router();

categoryRouter.post('/create', isAuthenticatedMiddleware, CategoryValidator.createCategoryValidator, CategoryController.createCategoryController);
categoryRouter.get('/getCategories', isAuthenticatedMiddleware, CategoryValidator.getCategoriesValidator, CategoryController.getCategoriesController)

export default categoryRouter;