import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const SettingsPage = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 min-vh-100" style={{ marginLeft: "250px" }}>
        <Navbar />
        <div className="container-fluid px-4">
          <h3 className="mb-4 fw-bold">Settings</h3>
          
          <div className="row g-4">
              <div className="col-md-6">
                <div className="card border-0 shadow-sm" style={{ backgroundColor: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(10px)" }}>
                    <div className="card-header bg-transparent py-3">
                        <h6 className="mb-0 fw-bold">Profile Settings</h6>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input type="text" className="form-control" defaultValue="Admin User" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email Address</label>
                                <input type="email" className="form-control" defaultValue="admin@smartcity.gov" />
                            </div>
                             <div className="mb-3">
                                <label className="form-label">Phone</label>
                                <input type="text" className="form-control" defaultValue="+91 98765 43210" />
                            </div>
                            <button className="btn btn-primary">Update Profile</button>
                        </form>
                    </div>
                </div>
              </div>

               <div className="col-md-6">
                <div className="card border-0 shadow-sm" style={{ backgroundColor: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(10px)" }}>
                    <div className="card-header bg-transparent py-3">
                        <h6 className="mb-0 fw-bold">Security</h6>
                    </div>
                    <div className="card-body">
                         <form>
                            <div className="mb-3">
                                <label className="form-label">Current Password</label>
                                <input type="password" class="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">New Password</label>
                                <input type="password" class="form-control" />
                            </div>
                             <div className="mb-3">
                                <label className="form-label">Confirm New Password</label>
                                <input type="password" class="form-control" />
                            </div>
                            <button className="btn btn-danger">Change Password</button>
                        </form>
                    </div>
                </div>
              </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
