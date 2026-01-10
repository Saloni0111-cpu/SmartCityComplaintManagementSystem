// All Mongoose models follow this pattern:
// 1. import mongoose
// 2. create schema
// 3. export model


import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema({
    //define structure
    title: String,
    description: String,
    image: String,
    status: {type: String, default: "Pending"},
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
});

export default mongoose.model("complaint", complaintSchema);