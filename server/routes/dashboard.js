import express from "express";

import {
    getStats,
    getCharts,
    getRecentComplaints
} from "../controllers/dashboardController.js";

const router = express.Router();

router.get("/stats", getStats);
router.get("/charts", getCharts);
router.get("/recent-complaints", getRecentComplaints);

export default router;