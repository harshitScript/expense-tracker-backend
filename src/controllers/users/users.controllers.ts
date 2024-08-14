import express from 'express';
import * as UserInterfaces from './users.interfaces';
import { User } from '../../models/users.model';
import { generateHash } from '../../utils/hashOps';

export const createUserController: express.RequestHandler<{}, UserInterfaces.CreateUserResBody, UserInterfaces.CreateUserReqBody, {}> = async (req, res, next) => {
    try {
        const userValues = req.body;
        const passwordHash = generateHash(userValues.password, 10);
        if (passwordHash) {
            userValues.password = passwordHash;
            delete userValues.confirmPassword;
        } else {
            console.log(`Failed to create the user.`)
            res.status(500).json({ message: 'Error generating password hash.' });
            return 0
        }
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ message: 'user created successfully.' })
        return 1
    } catch (error) {
        next(error)
        return 0
    }
} 