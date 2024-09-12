import mongoose from "mongoose";

export const dbConnection =() =>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName: "Job_Seeking"
    }).then(() =>{
        console.log("DataBase connected Successfully")
    }).catch((err)=>{
        console.log(`Some error occured: ${err}`);
    });
}