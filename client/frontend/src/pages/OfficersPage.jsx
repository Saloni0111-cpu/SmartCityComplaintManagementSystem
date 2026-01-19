import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const OfficersPage = () => {
  const officers = [
    { id: 1, name: "Off. Rajesh Kumar", department: "Road Maintenance", zone: "Zone 1", email: "rajesh@smartcity.gov", status: "Active" },
    { id: 2, name: "Off. Meera Iyer", department: "Water Supply", zone: "Zone 2", email: "meera@smartcity.gov", status: "On Leave" },
    { id: 3, name: "Off. Abdul Khan", department: "Sanitation", zone: "Zone 1", email: "abdul@smartcity.gov", status: "Active" },
    { id: 4, name: "Off. John Doe", department: "Electricity", zone: "Zone 3", email: "john@smartcity.gov", status: "Active" },
  ];

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 min-vh-100" style={{ marginLeft: "250px" }}>
        <Navbar />
        <div className="container-fluid px-4">
          <h3 className="mb-4 fw-bold">Officers</h3>
          <div className="card border-0 shadow-sm" style={{ backgroundColor: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(10px)" }}>
            <div className="card-header bg-transparent py-3 d-flex justify-content-between align-items-center">
              <h6 className="mb-0 fw-bold">Department Officers</h6>
              <button className="btn btn-primary btn-sm">+ Add Officer</button>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="box-shadow-none" style={{ background: "rgba(255, 255, 255, 0.5)" }}>
                    <tr>
                      <th className="ps-4">ID</th>
                      <th>Officer Name</th>
                      <th>Department</th>
                      <th>Zone</th>
                      <th>Email</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {officers.map((officer) => (
                      <tr key={officer.id}>
                        <td className="ps-4 fw-bold">#{officer.id}</td>
                        <td className="fw-bold">{officer.name}</td>
                        <td>{officer.department}</td>
                        <td>{officer.zone}</td>
                        <td>{officer.email}</td>
                        <td>
                          <span className={`badge ${officer.status === "Active" ? "bg-success" : "bg-warning text-dark"}`}>
                            {officer.status}
                          </span>
                        </td>
                        <td>
                          <button className="btn btn-sm btn-outline-primary me-2">Edit</button>
                          <button className="btn btn-sm btn-outline-danger">Remove</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficersPage;
