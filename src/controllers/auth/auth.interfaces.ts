export interface loginReqBody {
    email: string,
    password: string
}

export interface loginResBody {
    message: string,
    userId?: string,
    authToken?: string
}