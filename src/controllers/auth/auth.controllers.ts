import express from "express";
import { User } from "../../models/users.model";
import { compareHash } from "../../utils/hashOps";
import { generateJWT } from "../../utils/jwtOps";
import { loginResBody } from "../../interfaces";

export const loginController: express.RequestHandler<{}, loginResBody, any, {}> = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const query = { email }
        const user = await User.findOne(query);
        if (!user) {
            return res.status(400).json({ message: 'User not exist with this email id.' });
        }
        const isValidPassword = compareHash(password, user.password);
        if (!isValidPassword) {
            return res.status(400).json({ message: 'Password verification failed.' });
        }
        const authTokenExpiry = new Date().setDate(new Date().getDate() + 2)
        const authToken = generateJWT({ userId: `${user._id}` }, { expiresIn: authTokenExpiry });
        res.cookie('authToken', authToken, { httpOnly: true, secure: process.env.STATE === 'PROD', maxAge: authTokenExpiry });
        return res.status(200).json({ message: 'Login Successful.', userId: `${user._id}`, authToken, authTokenExpiry });
    } catch (error) {
        return next(error);
    }
}
