import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

const DashboardCharts = () => {
  const [chartsData, setChartsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const COLORS = ["#dc3545", "#ffc107", "#198754"];

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/dashboard/charts")
      .then((res) => {
        setChartsData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading charts...</div>;

  return (
    <div className="row g-4 mb-4">
      {/* Bar Chart */}
      <div className="col-lg-6">
        <div className="card h-100 shadow-sm" style={{ backgroundColor: "rgba(255,255,255,0.85)", backdropFilter: "blur(10px)" }}>
          <div className="card-header bg-transparent py-3">
            <h6 className="mb-0 fw-bold">Complaints by Category</h6>
          </div>
          <div className="card-body" style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartsData.categoryData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="complaints" fill="#0d6efd" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="col-lg-6">
        <div className="card h-100 shadow-sm">
          <div className="card-header py-3">
            <h6 className="mb-0 fw-bold">Complaint Status Distribution</h6>
          </div>
          <div className="card-body" style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartsData.statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {chartsData.statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Line Chart */}
      <div className="col-12">
        <div className="card shadow-sm" style={{ backgroundColor: "rgba(255,255,255,0.85)", backdropFilter: "blur(10px)" }}>
          <div className="card-header py-3">
            <h6 className="mb-0 fw-bold">Monthly Complaint Trend</h6>
          </div>
          <div className="card-body" style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartsData.trendData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="complaints" stroke="#0d6efd" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
