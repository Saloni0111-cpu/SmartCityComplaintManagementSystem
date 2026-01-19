import DashboardCharts from "../components/DashboardCharts";
import DashboardStats from "../components/DashboardStats";
import Navbar from "../components/Navbar";
import RecentComplaints from "../components/RecentComplaints";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div
        className="flex-grow-1 min-vh-100"
        style={{ marginLeft: "250px" }}
      >
        <Navbar />

        <div className="container-fluid px-4">
            
            <DashboardStats />
            
            <DashboardCharts />
            
            <RecentComplaints />

        </div>
      </div>
    </div>
  );
};

export default Dashboard;