import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const CitizensPage = () => {
  const citizens = [
    { id: 1, name: "Rahul Sharma", email: "rahul@example.com", phone: "9876543210", address: "123, MG Road", joined: "2024-01-10" },
    { id: 2, name: "Sneha Patel", email: "sneha@example.com", phone: "8765432109", address: "45, Gandhi Nagar", joined: "2024-01-12" },
    { id: 3, name: "Vikram Singh", email: "vikram@example.com", phone: "7654321098", address: "78, Civil Lines", joined: "2024-01-15" },
    { id: 4, name: "Ananya Das", email: "ananya@example.com", phone: "6543210987", address: "12, Park Street", joined: "2024-02-01" },
  ];

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 min-vh-100" style={{ marginLeft: "250px" }}>
        <Navbar />
        <div className="container-fluid px-4">
          <h3 className="mb-4 fw-bold">Citizens</h3>
          <div className="card border-0 shadow-sm" style={{ backgroundColor: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(10px)" }}>
            <div className="card-header bg-transparent py-3">
              <h6 className="mb-0 fw-bold">Registered Citizens</h6>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="box-shadow-none" style={{ background: "rgba(255, 255, 255, 0.5)" }}>
                    <tr>
                      <th className="ps-4">ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>Joined Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {citizens.map((citizen) => (
                      <tr key={citizen.id}>
                        <td className="ps-4 fw-bold">#{citizen.id}</td>
                        <td className="fw-bold">{citizen.name}</td>
                        <td>{citizen.email}</td>
                        <td>{citizen.phone}</td>
                        <td>{citizen.address}</td>
                        <td>{citizen.joined}</td>
                        <td>
                          <button className="btn btn-sm btn-light text-danger">
                             Block
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

export default CitizensPage;
