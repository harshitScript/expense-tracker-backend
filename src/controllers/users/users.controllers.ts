import express from 'express';
import * as UserInterfaces from './users.interfaces';
import { User } from '../../models/users.model';

export const createUserController: express.RequestHandler<{}, UserInterfaces.CreateUserResBody, UserInterfaces.CreateUserReqBody, {}> = async (req, res, next) => {
    //? generate the password hash
    try {
        const user = new User(req.body);
        return res.status(201).json({ message: 'user created successfully.' })
    } catch (error) {
        next(error)
    }
} 