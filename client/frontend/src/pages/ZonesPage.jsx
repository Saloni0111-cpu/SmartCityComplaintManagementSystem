import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const ZonesPage = () => {
  const zones = [
    { id: 1, name: "Zone 1 - North", wards: ["01", "02", "03", "04"], officer: "Off. Rajesh Kumar", status: "Active" },
    { id: 2, name: "Zone 2 - West", wards: ["05", "06", "07", "08"], officer: "Off. Meera Iyer", status: "Active" },
    { id: 3, name: "Zone 3 - South", wards: ["09", "10", "11", "12"], officer: "Off. John Doe", status: "Maintenance" },
    { id: 4, name: "Zone 4 - East", wards: ["13", "14", "15", "16"], officer: "Unassigned", status: "Active" },
  ];

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 min-vh-100" style={{ marginLeft: "250px" }}>
        <Navbar />
        <div className="container-fluid px-4">
          <h3 className="mb-4 fw-bold">Zones & Wards</h3>
          <div className="row g-4">
            {zones.map((zone) => (
              <div className="col-md-6" key={zone.id}>
                <div className="card border-0 shadow-sm h-100" style={{ backgroundColor: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(10px)" }}>
                    <div className="card-header bg-transparent py-3 d-flex justify-content-between align-items-center">
                        <h6 className="mb-0 fw-bold">{zone.name}</h6>
                        <span className={`badge ${zone.status === "Active" ? "bg-success" : "bg-warning text-dark"}`}>
                            {zone.status}
                        </span>
                    </div>
                  <div className="card-body">
                    <p className="mb-1 text-muted">Wards Covered:</p>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                        {zone.wards.map(ward => (
                            <span key={ward} className="badge bg-secondary">Ward {ward}</span>
                        ))}
                    </div>
                    <p className="mb-0"><strong>In-Charge:</strong> {zone.officer}</p>
                  </div>
                  <div className="card-footer bg-transparent border-0 d-flex justify-content-end">
                      <button className="btn btn-sm btn-outline-primary">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZonesPage;
