
const RecentComplaints = () => {
  const complaints = [
    {
      id: "CMP-2024-001",
      category: "Road Maintenance",
      description: "Pothole on Main Street near Hospital",
      zone: "Zone 1 - North",
      status: "Open",
      date: "2024-02-15",
      officer: "Unassigned",
    },
    {
      id: "CMP-2024-002",
      category: "Water Supply",
      description: "No water supply in Sector 4 for 2 days",
      zone: "Zone 2 - West",
      status: "In Progress",
      date: "2024-02-14",
      officer: "Ramesh Gupta",
    },
    {
      id: "CMP-2024-003",
      category: "Sanitation",
      description: "Garbage pileup at market entrance",
      zone: "Zone 1 - North",
      status: "Resolved",
      date: "2024-02-12",
      officer: "Suresh Kumar",
    },
    {
      id: "CMP-2024-004",
      category: "Electricity",
      description: "Street light flickering on 5th Avenue",
      zone: "Zone 3 - South",
      status: "Open",
      date: "2024-02-16",
      officer: "Unassigned",
    },
    {
        id: "CMP-2024-005",
        category: "Road Maintenance",
        description: "Manhole cover missing",
        zone: "Zone 2 - West",
        status: "Escalated",
        date: "2024-02-10",
        officer: "Amit Singh",
    }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "Open":
        return "badge bg-danger-subtle text-danger";
      case "In Progress":
        return "badge bg-warning-subtle text-warning";
      case "Resolved":
        return "badge bg-success-subtle text-success";
      case "Escalated":
        return "badge bg-dark-subtle text-dark border border-dark";
      default:
        return "badge bg-secondary";
    }
  };

  return (
    <div className="card border-0 shadow-sm mb-4" style={{ backgroundColor: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(10px)" }}>
      <div className="card-header bg-transparent py-3 d-flex justify-content-between align-items-center">
        <h6 className="mb-0 fw-bold">Recent Complaints</h6>
        <button className="btn btn-sm btn-outline-primary">View All</button>
      </div>
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light box-shadow-none" style={{ background: "rgba(255, 255, 255, 0.5)" }}>
              <tr>
                <th scope="col" className="ps-4">ID</th>
                <th scope="col">Category</th>
                <th scope="col">Zone</th>
                <th scope="col">Date</th>
                <th scope="col">Assigned Officer</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((complaint) => (
                <tr key={complaint.id}>
                  <td className="ps-4 fw-bold text-primary">{complaint.id}</td>
                  <td>{complaint.category}</td>
                  <td>{complaint.zone}</td>
                  <td>{complaint.date}</td>
                  <td>
                      {complaint.officer === "Unassigned" ? (
                          <span className="text-muted fst-italic">Unassigned</span>
                      ) : (
                          complaint.officer
                      )}
                  </td>
                  <td>
                    <span className={getStatusBadge(complaint.status)}>
                      {complaint.status}
                    </span>
                  </td>
                  <td>
                      <button className="btn btn-sm btn-light text-primary">
                          <i className="bi bi-eye"></i>
                      </button>
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
