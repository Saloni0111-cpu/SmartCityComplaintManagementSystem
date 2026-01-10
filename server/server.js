import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';


import connectDb from './config/db.js';
import authRoutes from "./routes/authRoutes.js"
import complaintRoutes from "./routes/complaintRoutes.js";

dotenv.config();
connectDb();

const app = express();


app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));
app.use("/api/auth", authRoutes);
app.use("/api/complaints", complaintRoutes);
app.get("/", (req, res) => {
    res.send("Backend Running");
})

app.listen(process.env.PORT, () =>
console.log(`Server running at port ${process.env.PORT}`)
);

