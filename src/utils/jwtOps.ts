import jwt from "jsonwebtoken";

interface JWTBody {
    userId: string
}
interface JWTOptions {
    expiresIn: string | number
}

export function generateJWT(body: JWTBody, options: JWTOptions): string | undefined {
    try {
        const token = jwt.sign(body, <string>process.env.JWT_SECRET, options);
        return token
    } catch {
        return undefined
    }
}