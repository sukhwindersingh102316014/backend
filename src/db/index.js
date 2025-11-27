import mongoose from "mongoose";
import { DB_name } from "../constants.js";

const connectDB=async()=>{
    try {
       const connectioninstance = await mongoose.connect(`${process.env.mongodb_url}/${DB_name}`)
       console.log(`MongoDB connected: ${connectioninstance.connection.host}`);
    } catch (error) {
        console.log("Error while connecting to mongoDB", error);
        process.exit(1);
    }
}
console.log("MONGO URL =>", process.env.mongodb_url);

export default connectDB;