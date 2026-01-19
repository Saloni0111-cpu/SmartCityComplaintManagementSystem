import Complaint from "../models/complaint.js"; // your existing model

// GET /api/dashboard/stats
export const getStats = async (req, res) => {
  try {
    const totalComplaints = await Complaint.countDocuments();
    const pending = await Complaint.countDocuments({ status: "Pending" });
    const inProgress = await Complaint.countDocuments({ status: "In Progress" });
    const resolved = await Complaint.countDocuments({ status: "Resolved" });

    res.json({
      totalComplaints,
      pending,
      inProgress,
      resolved,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// GET /api/dashboard/charts
export const getCharts = async (req, res) => {
  try {
    // Complaints by category (assuming 'title' or 'category' field)
    const categoryData = await Complaint.aggregate([
      { $group: { _id: "$title", complaints: { $sum: 1 } } }, // you can replace $title with $category if exists
      { $project: { name: "$_id", complaints: 1, _id: 0 } },
    ]);

    // Complaints by status
    const statusData = await Complaint.aggregate([
      { $group: { _id: "$status", value: { $sum: 1 } } },
      { $project: { name: "$_id", value: 1, _id: 0 } },
    ]);

    // Monthly trend (last 12 months)
    const trendData = await Complaint.aggregate([
      {
        $group: {
          _id: { month: { $month: "$createdAt" }, year: { $year: "$createdAt" } },
          complaints: { $sum: 1 },
        },
      },
      {
        $project: {
          name: { $concat: [{ $toString: "$_id.month" }, "-", { $toString: "$_id.year" }] },
          complaints: 1,
          _id: 0,
        },
      },
      { $sort: { name: 1 } },
    ]);

    res.json({ categoryData, statusData, trendData });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// GET /api/dashboard/recent-complaints
export const getRecentComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find()
      .populate("user", "name email") // include user info if needed
      .sort({ createdAt: -1 })
      .limit(5);

    res.json(complaints);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};
