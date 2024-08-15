import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AuthenticatedRequest } from '../interfaces';

const isAuthenticatedMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const authToken = req.cookies?.authToken; // Use optional chaining

    if (!authToken) {
        return res.status(401).json({ error: "Authorization token is missing." }); // Send a response with status code 401
    }

    try {
        const decodedToken = jwt.verify(authToken, process.env.JWT_SECRET as string);

        if (!decodedToken || typeof decodedToken === 'string') {
            return res.status(401).json({ error: "Authorization token is invalid or expired." });
        }

        const { userId } = decodedToken as { userId: string };
        req.userId = userId;

        next();
    } catch (error) {
        next(error)
    }
};

export default isAuthenticatedMiddleware;
