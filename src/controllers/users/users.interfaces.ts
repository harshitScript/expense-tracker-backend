export interface CreateUserReqBody {
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    password: string,
    confirmPassword: string
}
export interface CreateUserResBody {
    message: string
}
