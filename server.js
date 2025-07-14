// importing express so that we can use it in our application
//const express = require('express')
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import morgan from "morgan";
import "express-async-errors"
import testRoutes from "./routes/testRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import errorMiddleware from "./middelwares/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import jobsRoutes from "./routes/jobsRoute.js"
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";



//security packages

import helmet from "helmet"
import xss from 'xss-clean'
import mongoSanitize from 'express-mongo-sanitize'



 

dotenv.config();

// conect db
connectDB();


const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Job Portal Application",
      description: "Node Expressjs Job Portal Application",
    },
    servers: [
      {
//         url: "https://neeljobportalproject.netlify.app/",
            url: "https://nodejs-job-portal-app.onrender.com"
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const spec = swaggerJSDoc(options);

//rest object
const app = express();

// middlewares
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use('/api/v1/job',jobsRoutes)

//routes
app.use("/api/v1/test/",testRoutes)
app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/user",userRoutes)

//homeroute root
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(spec));

// validation middleware
app.use(errorMiddleware)

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(8080, () => {
  console.log(
    `Node server running in ${process.env.DEV_MODE} mode on port ${PORT}`
  );
});
