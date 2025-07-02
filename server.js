// importing express so that we can use it in our application
//const express = require('express')
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import testRoutes from "./routes/testRoutes.js"

dotenv.config();

// conect db
connectDB();

//rest object
const app = express();

//routes
app.use("/api/v1/test",testRoutes)

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(8080, () => {
  console.log(
    `Node server running in ${process.env.DEV_MODE} mode on port ${PORT}`
  );
});
