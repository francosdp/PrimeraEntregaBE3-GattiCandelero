import { ObjectId } from "bson";
import { Schema, model } from "mongoose";

const userSchema = new Schema({
    password: { type: String, required: true },
    role: { type: String, required: true },
})
const userModel = model("users", userSchema)

export default userModel