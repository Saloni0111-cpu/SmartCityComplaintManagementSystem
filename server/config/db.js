import mongoose from 'mongoose';

const connectDb = async() => {
    try{
        await mongoose.connect(process.env.Mongo_URI)
        console.log("MongoDB Connected");
    }
    catch(error){
        console.log("Error occured");
        
    }
};

export default connectDb;