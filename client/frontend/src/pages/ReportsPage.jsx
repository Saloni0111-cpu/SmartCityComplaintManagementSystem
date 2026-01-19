import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis, YAxis
} from "recharts";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const ReportsPage = () => {
  const data = [
    { name: "Zone 1", issues: 40 },
    { name: "Zone 2", issues: 30 },
    { name: "Zone 3", issues: 20 },
    { name: "Zone 4", issues: 27 },
  ];

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 min-vh-100" style={{ marginLeft: "250px" }}>
        <Navbar />
        <div className="container-fluid px-4">
          <h3 className="mb-4 fw-bold">Reports & Analytics</h3>
          
          <div className="row g-4 mb-4">
            <div className="col-md-3">
                <div className="card border-0 shadow-sm p-3 text-center" style={{ backgroundColor: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(10px)" }}>
                    <h5 className="text-secondary">Avg Resolution Time</h5>
                    <h2 className="fw-bold">2.5 Days</h2>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card border-0 shadow-sm p-3 text-center" style={{ backgroundColor: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(10px)" }}>
                    <h5 className="text-secondary">Satisfaction Rate</h5>
                    <h2 className="fw-bold text-success">88%</h2>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card border-0 shadow-sm p-3 text-center" style={{ backgroundColor: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(10px)" }}>
                    <h5 className="text-secondary">Active Officers</h5>
                    <h2 className="fw-bold text-primary">34</h2>
                </div>
            </div>
             <div className="col-md-3">
                <div className="card border-0 shadow-sm p-3 text-center" style={{ backgroundColor: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(10px)" }}>
                    <h5 className="text-secondary">Critical Issues</h5>
                    <h2 className="fw-bold text-danger">5</h2>
                </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm" style={{ backgroundColor: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(10px)" }}>
             <div className="card-header bg-transparent py-3">
                  <h6 className="mb-0 fw-bold">Issues Per Zone</h6>
             </div>
             <div className="card-body">
                <div style={{ width: "100%", height: 400 }}>
                    <ResponsiveContainer>
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="issues" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
