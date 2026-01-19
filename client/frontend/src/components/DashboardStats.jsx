
const DashboardStats = () => {
  const stats = [
    {
      title: "Total Complaints",
      value: "1,240",
      icon: "bi-folder",
      color: "primary",
      bg: "bg-primary-subtle",
    },
    {
      title: "Open Complaints",
      value: "145",
      icon: "bi-exclamation-circle",
      color: "danger",
      bg: "bg-danger-subtle",
    },
    {
      title: "In Progress",
      value: "56",
      icon: "bi-hourglass-split",
      color: "warning",
      bg: "bg-warning-subtle",
    },
    {
      title: "Resolved",
      value: "1,039",
      icon: "bi-check-circle",
      color: "success",
      bg: "bg-success-subtle",
    },
  ];

  return (
    <div className="row g-4 mb-4">
      {stats.map((stat, index) => (
        <div className="col-md-3" key={index}>
          <div className="card border-0 shadow-sm h-100" style={{ backgroundColor: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(10px)" }}>
            <div className="card-body d-flex align-items-center justify-content-between">
              <div>
                <h6 className="text-muted fw-normal mb-1">{stat.title}</h6>
                <h3 className="mb-0 fw-bold">{stat.value}</h3>
              </div>
              <div
                className={`rounded-circle d-flex align-items-center justify-content-center ${stat.bg} text-${stat.color}`}
                style={{ width: "50px", height: "50px" }}
              >
                <i className={`bi ${stat.icon} fs-4`}></i>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
