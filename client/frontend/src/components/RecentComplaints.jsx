import { useEffect, useState } from "react";
import axios from "axios";

const RecentComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/dashboard/recent-complaints")
      .then((res) => {
        setComplaints(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const getStatusBadge = (status) => {
    switch (status) {
      case "Pending":
        return "badge bg-danger-subtle text-danger";
      case "In Progress":
        return "badge bg-warning-subtle text-warning";
      case "Resolved":
        return "badge bg-success-subtle text-success";
      default:
        return "badge bg-secondary";
    }
  };

  if (loading) return <div>Loading recent complaints...</div>;

  return (
    <div className="card mb-4 shadow-sm" style={{ backgroundColor: "rgba(255,255,255,0.85)", backdropFilter: "blur(10px)" }}>
      <div className="card-header py-3 d-flex justify-content-between align-items-center">
        <h6 className="mb-0 fw-bold">Recent Complaints</h6>
        <button className="btn btn-sm btn-outline-primary">View All</button>
      </div>
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Category</th>
                <th>Date</th>
                <th>Officer</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((c) => (
                <tr key={c._id}>
                  <td className="fw-bold text-primary">{c._id}</td>
                  <td>{c.title}</td>
                  <td>{new Date(c.createdAt).toLocaleDateString()}</td>
                  <td>{c.officer || "Unassigned"}</td>
                  <td>
                    <span className={getStatusBadge(c.status)}>{c.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentComplaints;
