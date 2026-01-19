import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';
import dashboardRoutes from "./routes/dashboard.js";

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
app.use("/api/dashboard", dashboardRoutes)
app.get("/", (req, res) => {
    res.send("Backend Running");
})

app.listen(process.env.PORT, () =>
console.log(`Server running at port ${process.env.PORT}`)
);

