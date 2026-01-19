import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import API from "../services/api.js";

const ComplaintPage = () => {
  const [complaints, setComplaints] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchComplaints = async () => {
    try {
      const res = await API.get("/complaints");
      setComplaints(res.data);
    } catch (err) {
      console.error("Failed to fetch complaints", err);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) {
      formData.append("image", image);
    }

    try {
      await API.post("/complaints", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Complaint Registered Successfully!");
      setTitle("");
      setDescription("");
      setImage(null);
      fetchComplaints(); // Refresh list
    } catch (err) {
      setError("Failed to register complaint. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div
        className="flex-grow-1 min-vh-100"
        style={{ marginLeft: "250px" }}
      >
        <Navbar />

        <div className="container-fluid px-4">
          <h3 className="mb-4 fw-bold">Complaint Management</h3>

          <div className="row g-4">
            {/* Create Complaint Form */}
            <div className="col-lg-4">
              <div
                className="card border-0 shadow-sm"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.85)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="card-header bg-transparent py-3">
                  <h6 className="mb-0 fw-bold">File a New Complaint</h6>
                </div>
                <div className="card-body">
                  {error && <div className="alert alert-danger">{error}</div>}
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g., Pothole on Main St"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Describe the issue in detail..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Upload Image (Optional)</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => setImage(e.target.files[0])}
                        accept="image/*"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-100"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Submit Complaint"}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* My Complaints List */}
            <div className="col-lg-8">
              <div
                className="card border-0 shadow-sm"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.85)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="card-header bg-transparent py-3">
                  <h6 className="mb-0 fw-bold">My Complaints</h6>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-hover align-middle mb-0">
                      <thead
                        className="box-shadow-none"
                        style={{ background: "rgba(255, 255, 255, 0.5)" }}
                      >
                        <tr>
                          <th className="ps-4">Title</th>
                          <th>Description</th>
                          <th>Status</th>
                          <th>Date</th>
                          <th>Image</th>
                        </tr>
                      </thead>
                      <tbody>
                        {complaints.length > 0 ? (
                          complaints.map((complaint) => (
                            <tr key={complaint._id}>
                              <td className="ps-4 fw-bold">{complaint.title}</td>
                              <td
                                style={{
                                  maxWidth: "200px",
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                {complaint.description}
                              </td>
                              <td>
                                <span
                                  className={`badge ${
                                    complaint.status === "Resolved"
                                      ? "bg-success"
                                      : complaint.status === "In Progress"
                                      ? "bg-warning text-dark"
                                      : "bg-danger"
                                  }`}
                                >
                                  {complaint.status || "Pending"}
                                </span>
                              </td>
                              <td>
                                {new Date(complaint.createdAt || Date.now()).toLocaleDateString()}
                              </td>
                              <td>
                                {complaint.image ? (
                                  <a
                                    href={`http://localhost:5000/uploads/${complaint.image}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-sm btn-outline-secondary"
                                  >
                                    View
                                  </a>
                                ) : (
                                  <span className="text-muted">-</span>
                                )}
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="5" className="text-center py-4 text-muted">
                              No complaints found. Start by filing one!
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintPage;
