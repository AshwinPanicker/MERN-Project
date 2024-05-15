import mongoose from "mongoose"

 export const connectDb = async() =>{
   await mongoose.connect(process.env.Mongo_uri).then(()=>console.log("DB connected"))
}

