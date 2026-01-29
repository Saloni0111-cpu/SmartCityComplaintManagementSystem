import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
    name: {
        type:String,
        require: true,
        unique: true,
    },

    head: {
        type: String,
        required: true
    },

    contact: {
        type: String,
        required:true
    },

    staff: {
        type: Number,
        default: 0
    }
},
    { timestamps: true }
);

export default mongoose.model("Department", departmentSchema)