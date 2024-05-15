import mongoose from "mongoose"

 export const connectDb = async() =>{
   await mongoose.connect(process.env.Mongo_URL).then(()=>console.log("DB connected"))
}