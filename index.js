const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const dotenv=require('dotenv')
dotenv.config()
const app=express()
app.use(express.json())
app.use(cors())

const authRoute=require('./routes/authRoute')
const taskRoute=require('./routes/taskRoute')

//connect to database
const connectMongoose=async()=>{
    try {
        const connect =await mongoose.connect(process.env.DB_URL);
    console.log(`database connected : ${connect.connection.host}`)
    } catch (error) {
        console.log(error);
    }
}

//routes
app.use('/auth',authRoute)
app.use('/task',taskRoute)
const port=process.env.PORT || 3000
connectMongoose()
app.listen(port,()=>{
    console.log("App started on port",port)
})