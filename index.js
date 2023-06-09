import  express from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import authRoute from './routes/auth.js'
import userRoute from './routes/user.js'
import patientRoute from './routes/patient.js'
import cors from "cors"

const app=express();
dotenv.config()

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB");
      } catch (error) {
        throw error
    }
}

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected");
})

//middlewares
app.use(cookieParser())
app.use(express.json()) 
app.use(bodyParser.json())
app.use(cors())

app.use("/api/auth",authRoute)
app.use("/api/user",userRoute)
app.use("/api/patient",patientRoute)


app.use((err,req,res,next)=>{
    const errorStatus= err.status ||500
    const errorMessage=err.message||"something went wrong"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    })
})

app.listen(5000,()=>{
    connect() 
    console.log("Connected to backend !");
})