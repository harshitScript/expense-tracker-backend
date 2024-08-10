import express from 'express';
import * as UserInterfaces from './users.interfaces';

export const createUserController: express.RequestHandler<{}, UserInterfaces.CreateUserResBody, UserInterfaces.CreateUserReqBody, {}> = (req, res, _) => {
    const { firstName, lastName, phone, email, password, confirmPassword } = req.body;
    return res.status(201).json({ message: 'user created successfully.' })
} 