import express from "express";

import {
    getDepartments, addDepartment, updateDepartment, deleteDepartment
 } from "../controllers/departmentController.js";


 const router = express.Router();

 router.get("/", getDepartments);
 router.post("/", getDepartments);
 router.put("/:id", getDepartments);
 router.delete("/:id", getDepartments);

 export default router;