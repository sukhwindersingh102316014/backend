// require("dotenv").config({path:"./.env"});

import dotenv from "dotenv";
dotenv.config({path:"./.env"}); 

import connectDB from "./db/index.js";


connectDB();







// import express from "express";

// const app = express();

// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.mongodb_url}/${DB_name}`);
//         app.on("error",(error)=>{
//             console.log("Error while connecting to the server",error);
//             throw error;
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`Server is running on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.log("Error while connecting to mongoDB", error);
//         throw error;
//     }
// })();
