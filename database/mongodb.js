import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js"

if(!DB_URI) {
    throw new Error("Please define the Database Url [DB_URI] in .env.<development/production>.local")
}

const connectToDatabse = async () => {
    try{
        await mongoose.connect(DB_URI);

        console.log(`connected to Database in ${NODE_ENV} mode`)
    } catch(error){
        console.log("Encountered error while connecting to Database: ", error);
        process.exit(1);
    }
}

export default connectToDatabse;