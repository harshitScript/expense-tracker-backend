import express from "express";
import * as AuthValidator from "../validator/auth.validator";
import * as AuthController from "../controllers/auth/auth.controllers";

const authRouter = express.Router();

//* POST auth/login
authRouter.post('/login', AuthValidator.loginValidator, AuthController.loginController);

export default authRouter;