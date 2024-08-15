import express from 'express';
import * as UserControllers from "../controllers/users/users.controllers";
import * as UserValidators from "../validator/users.validator";
import isAuthenticatedMiddleware from '../middlewares/isAuthenticated.middleware';

const userRouter = express.Router();

userRouter.post('/sign-up', UserValidators.createUserValidator, UserControllers.createUserController);
userRouter.get('/getUserById/:userId', isAuthenticatedMiddleware, UserValidators.getUserByIdValidator, UserControllers.getUserById);

export default userRouter;