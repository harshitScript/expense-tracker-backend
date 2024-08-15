import express, { NextFunction, Response } from "express";
import joi from 'joi';
import { AuthenticatedRequestHandler, CreateUserReqBody, CreateUserResBody } from "../interfaces";
import { email, name, password, phone } from "../utils/regexPatterns";

export const createUserValidator: express.RequestHandler<{}, CreateUserResBody, CreateUserReqBody, {}> = (req, res, next) => {
    const createUserValidationSchema = joi.object({
        firstName: joi.string().required().pattern(name).label('firstName'),
        lastName: joi.string().required().pattern(name).label('lastName'),
        phone: joi.string().required().pattern(phone).label('phone'),
        email: joi.string().required().pattern(email).label('email'),
        password: joi.string().required().pattern(password).label('password'),
        confirmPassword: joi.string().required().pattern(password).label('confirmPassword')
    })
    const errors = createUserValidationSchema.validate(req.body);
    if (errors.error) {
        return res.status(400).json({ message: 'Invalid values' })
    }
    next();
}

export const getUserByIdValidator: AuthenticatedRequestHandler = (req, res, next) => {
    const getUserIdValidationSChema = joi.object({
        userId: joi.string().required().label('userId'),
    })

    const errors = getUserIdValidationSChema.validate(req.params);
    if (errors.error) {
        return res.status(400).json({ message: 'Invalid values' })
    }
    next();
}