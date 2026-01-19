import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: "bi-speedometer2" },
    { name: "Complaints", path: "/complaints", icon: "bi-card-list" },
    { name: "Departments", path: "/departments", icon: "bi-building" },
    { name: "Citizens", path: "/citizens", icon: "bi-people" },
    { name: "Officers", path: "/officers", icon: "bi-person-badge" },
    { name: "Zones / Wards", path: "/zones", icon: "bi-geo-alt" },
    { name: "Reports", path: "/reports", icon: "bi-file-earmark-bar-graph" },
    { name: "Settings", path: "/settings", icon: "bi-gear" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 shadow vh-100"
      style={{ 
        width: "250px", 
        position: "fixed", 
        left: 0, 
        top: 0, 
        zIndex: 1000, 
        backgroundColor: "rgba(255, 255, 255, 0.85)", 
        backdropFilter: "blur(10px)" 
      }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
      >
        <span className="fs-4 fw-bold text-primary">Smart City Portal</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {menuItems.map((item) => (
          <li className="nav-item" key={item.name}>
            <a
              href="#"
              className={`nav-link ${
                location.pathname === item.path ? "active" : "link-dark"
              }`}
              onClick={(e) => {
                e.preventDefault();
                navigate(item.path);
              }}
            >
              <i className={`bi ${item.icon} me-2`}></i>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <hr />
      <div className="dropdown">
          <button
            className="btn btn-danger w-100 d-flex align-items-center justify-content-center"
             onClick={handleLogout}
          >
             <i className="bi bi-box-arrow-right me-2"></i>
            Logout
          </button>
      </div>
    </div>
  );
};

export default Sidebar;
