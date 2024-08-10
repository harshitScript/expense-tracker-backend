import express from 'express';
import * as UserControllers from "../controllers/users/users.controllers";
import * as UserValidators from "../middlewares/validator/users.validator";

const userRouter = express.Router();

//* POST user/create
userRouter.post('/sign-up', UserValidators.createUserValidator, UserControllers.createUserController);

export default userRouter;