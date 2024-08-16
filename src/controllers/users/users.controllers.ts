import express from 'express';
import { User } from '../../models/users.model';
import { generateHash } from '../../utils/hashOps';
import { AuthenticatedRequestHandler, CreateUserReqBody, CreateUserResBody } from '../../interfaces';

export const createUserController: express.RequestHandler<{}, CreateUserResBody, CreateUserReqBody, {}> = async (req, res, next) => {
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

export const getUserById: AuthenticatedRequestHandler = async (req, res, next) => {
    const { userId } = req.params;
    try {
        const user = await User.findById(userId, { firstName: 1, lastName: 1, email: 1, phone: 1, isAdmin: 1 });
        if (!user) {
            return res.status(400).json({ message: 'User not Found.' })
        }
        return res.status(200).json({ message: 'User Found', user })
    } catch (error) {
        return next(error);
    }
}
