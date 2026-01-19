import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import CitizensPage from "./pages/CitizensPage";
import ComplaintPage from "./pages/ComplaintPage";
import Dashboard from "./pages/Dashboard";
import DepartmentsPage from "./pages/DepartmentsPage";
import LoginPage from "./pages/LoginPage";
import OfficersPage from "./pages/OfficersPage";
import RegisterPage from "./pages/RegisterPage";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";
import ZonesPage from "./pages/ZonesPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/complaints" element={<ComplaintPage />} />
      <Route path="/departments" element={<DepartmentsPage />} />
      <Route path="/citizens" element={<CitizensPage />} />
      <Route path="/officers" element={<OfficersPage />} />
      <Route path="/zones" element={<ZonesPage />} />
      <Route path="/reports" element={<ReportsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
}

export default App;
