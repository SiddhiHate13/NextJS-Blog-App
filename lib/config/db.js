import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://siddhihaate:Sidi1319@cluster0.t2byjcz.mongodb.net/blog-app');
    console.log("DB Connected");
}