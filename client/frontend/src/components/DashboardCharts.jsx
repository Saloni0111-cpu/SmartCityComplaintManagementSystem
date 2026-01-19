import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Legend,
    Line,
    LineChart,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const DashboardCharts = () => {
  const categoryData = [
    { name: "Road", complaints: 400 },
    { name: "Water", complaints: 300 },
    { name: "Electric", complaints: 300 },
    { name: "Sanitation", complaints: 200 },
    { name: "Others", complaints: 100 },
  ];

  const statusData = [
    { name: "Open", value: 145 },
    { name: "In Progress", value: 56 },
    { name: "Resolved", value: 1039 },
  ];

  const COLORS = ["#dc3545", "#ffc107", "#198754"];

  const trendData = [
    { name: "Jan", complaints: 65 },
    { name: "Feb", complaints: 59 },
    { name: "Mar", complaints: 80 },
    { name: "Apr", complaints: 81 },
    { name: "May", complaints: 56 },
    { name: "Jun", complaints: 55 },
    { name: "Jul", complaints: 40 },
  ];

  return (
    <div className="row g-4 mb-4">
      {/* Bar Chart */}
      <div className="col-lg-6">
        <div className="card border-0 shadow-sm h-100" style={{ backgroundColor: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(10px)" }}>
          <div className="card-header bg-transparent py-3">
            <h6 className="mb-0 fw-bold">Complaints by Category</h6>
          </div>
          <div className="card-body">
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <BarChart data={categoryData}>
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
      </div>

      {/* Pie Chart */}
      <div className="col-lg-6">
        <div className="card border-0 shadow-sm h-100">
            <div className="card-header bg-white py-3">
            <h6 className="mb-0 fw-bold">Complaint Status Distribution</h6>
          </div>
          <div className="card-body">
            <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                <PieChart>
                    <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    >
                    {statusData.map((entry, index) => (
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
      </div>
        
     {/* Line Chart */}
     <div className="col-12">
         <div className="card border-0 shadow-sm" style={{ backgroundColor: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(10px)" }}>
             <div className="card-header bg-transparent py-3">
                 <h6 className="mb-0 fw-bold">Monthly Complaint Trend</h6>
             </div>
             <div className="card-body">
                 <div style={{width: "100%", height: 300}}>
                 <ResponsiveContainer>
                     <LineChart data={trendData}>
                         <CartesianGrid strokeDasharray="3 3" vertical={false} />
                         <XAxis dataKey="name" />
                         <YAxis />
                         <Tooltip />
                         <Line type="monotone" dataKey="complaints" stroke="#0d6efd" strokeWidth={2} dot={{r: 4}} activeDot={{r: 8}}/>
                     </LineChart>
                 </ResponsiveContainer>
                 </div>
             </div>
         </div>
     </div>

    </div>
  );
};

export default DashboardCharts;
