// Package imports
import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import bodyParser from "body-parser";

import postRoutes from "./routes/posts.js";

// Initializing the App
const app = express();

// Body Parser contraints
app.use(bodyParser.json({
    limit: "30mb",
    extended: true
}));
app.use(bodyParser.urlencoded({
    limit: "30mb",
    extended: true
}));
app.use(cors());

// Middleware & establishing Routes
app.use('/posts', postRoutes);

// DB URL
const mongo_url = `mongodb+srv://avinash_resturant_management:1234567890@cluster0.fweajok.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 8080;

// DB Connection
mongoose.connect(mongo_url)
.then(()=> app.listen(PORT, ()=>{
    console.log(`PORT LISTENING ON ${PORT}...`)
}))
.catch((error)=> console.log(error.message));




app.get("/", (req, res)=>{
    res.send("Backend is running on 8080");
});




