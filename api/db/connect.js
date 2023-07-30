const mongoose=require("mongoose")
require("dotenv").config();

async function connectDb(){

    try {
        const conn=await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("mongodb connected");
        return conn;
        
    } catch (error) {
        console.error("mongodb not connected",error);
        throw error;
    }
}

module.exports=connectDb;