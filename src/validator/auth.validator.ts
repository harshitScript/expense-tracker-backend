import express from "express";
import joi from 'joi';
import { loginReqBody, loginResBody } from "../interfaces";
import { email, password } from "../utils/regexPatterns";


export const loginValidator: express.RequestHandler<{}, loginResBody, loginReqBody, {}> = (req, res, next) => {
    const loginValidationSchema = joi.object({
        email: joi.string().required().pattern(email).label('email'),
        password: joi.string().required().pattern(password).label('password'),
    })
    const errors = loginValidationSchema.validate(req.body);
    if (errors.error) {
        return res.status(400).json({ message: 'Invalid values' })
    }
    next();
}