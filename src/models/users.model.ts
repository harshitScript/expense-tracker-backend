import { model, Schema } from "mongoose";
import { UserType } from "../interfaces";

const userSchema = new Schema<UserType>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

export const User = model('User', userSchema)