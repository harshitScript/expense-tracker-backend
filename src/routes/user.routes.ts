import express from 'express';
import * as UserControllers from "../controllers/users/users.controllers";
const userRouter = express.Router();

//* POST user/create
userRouter.post('/create', UserControllers.createUserController)

export default userRouter;