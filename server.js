// importing express so that we can use it in our application
//const express = require('express')
import express from 'express';
import dotenv from "dotenv";

dotenv.config();


//rest object
const app =express()


//routes
app.get('/',(req,res)=> {
    res.send("<h1> welcome to my  job portal</h1>")

});

//port
const PORT =process.env.PORT || 8080


//listen
app.listen(8080,()=>{
    console.log(`Node server running in ${process.env.DEV_MODE} mode on port ${PORT}`);
})