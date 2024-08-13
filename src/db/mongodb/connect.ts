import mongoose from "mongoose";

let db: typeof mongoose;

const connect = async () => {
    try {
        db = await mongoose.connect(<string>process.env.MONGO_URI);
    } catch (error) {
        throw error
    }
}


export function getDb(): typeof mongoose | null {
    if (db) return db
    return null;
}

export default connect;