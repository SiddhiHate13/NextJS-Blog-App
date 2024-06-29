import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://{database user}:{password}@cluster0.t2byjcz.mongodb.net/blog-app');
    console.log("DB Connected");
}