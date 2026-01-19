import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const DepartmentsPage = () => {
  const departments = [
    { id: 1, name: "Road Maintenance", head: "Ramesh Gupta", contact: "road@smartcity.gov", staff: 45 },
    { id: 2, name: "Water Supply", head: "Suresh Kumar", contact: "water@smartcity.gov", staff: 32 },
    { id: 3, name: "Electricity", head: "Amit Singh", contact: "power@smartcity.gov", staff: 50 },
    { id: 4, name: "Sanitation", head: "Priya Sharma", contact: "sanitation@smartcity.gov", staff: 60 },
    { id: 5, name: "Health", head: "Dr. Anjali Verma", contact: "health@smartcity.gov", staff: 25 },
  ];

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 min-vh-100" style={{ marginLeft: "250px" }}>
        <Navbar />
        <div className="container-fluid px-4">
          <h3 className="mb-4 fw-bold">Departments</h3>
          <div className="card border-0 shadow-sm" style={{ backgroundColor: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(10px)" }}>
            <div className="card-header bg-transparent py-3">
              <h6 className="mb-0 fw-bold">All Departments</h6>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="box-shadow-none" style={{ background: "rgba(255, 255, 255, 0.5)" }}>
                    <tr>
                      <th className="ps-4">ID</th>
                      <th>Department Name</th>
                      <th>Head of Dept</th>
                      <th>Contact Email</th>
                      <th>Total Staff</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {departments.map((dept) => (
                      <tr key={dept.id}>
                        <td className="ps-4 fw-bold">#{dept.id}</td>
                        <td className="fw-bold text-primary">{dept.name}</td>
                        <td>{dept.head}</td>
                        <td>{dept.contact}</td>
                        <td>{dept.staff}</td>
                        <td>
                          <button className="btn btn-sm btn-outline-primary me-2">
                            <i className="bi bi-pencil"></i>
                          </button>
                          <button className="btn btn-sm btn-outline-danger">
                            <i className="bi bi-trash"></i>
                          </button>
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

export default DepartmentsPage;
