//Routes are the traffic controller of my backend, which decides who can go where and what happens first

//What routes Does: It connects URL -> SECURITY -> FILE UPLOADS -> LOGIC

//Request comes -> user is checked -> file is saved -> data is stored


import express from "express";
import upload from "../middlewares/uploadMiddleware.js";
import auth from "../middlewares/authMiddleware.js";;
import { createComplaint, getComplaints } from "../controllers/complaintController.js";



const router = express.Router();

router.post("/", auth, upload.single("image"), createComplaint);
router.get("/", auth, getComplaints);

export default router;