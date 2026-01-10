import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();

import connectDb from './config/db.js';
import authRoutes from "./routes/authRoutes.js"

connectDb();

const app = express();


app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
    res.send("Backend Running");
})

app.listen(process.env.PORT, () =>
console.log(`Server running at port ${process.env.PORT}`)
);

