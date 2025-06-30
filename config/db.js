import mongoose from "mongoose"

const connectDB = async ()=>{
 try{
     const conn = await mongoose.connect(process.env.Mongo_Url)
     console.log(`connected to mongodb database ${mongoose.connection.host}`)

 }catch(error){
    console.log("MongoDB Error ${error} ")
 }
};

export default connectDB;