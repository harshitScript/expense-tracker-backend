import { NextFunction, Request, Response } from "express";

export interface UserType {
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    password: string,
    isAdmin: boolean
}

export interface CategoryType {
    title: string;
    description: string;
}
export interface AuthenticatedRequest extends Request {
    userId?: string; // userId is optional as it will be set later
}
export interface loginReqBody {
    email: string,
    password: string
}
export interface loginResBody {
    message: string,
    userId?: string,
    authToken?: string,
    authTokenExpiry?: number
}
export interface CreateUserReqBody {
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    password: string,
    confirmPassword?: string
}
export interface CreateUserResBody {
    message: string
}
export interface GetUserByIdParams {
    userId: string
}
export interface GetUserByIdResBody {
    message: string,
    user?: UserType
}
export interface AuthenticatedRequestHandler {
    (req: AuthenticatedRequest, res: Response, next: NextFunction): void;
}