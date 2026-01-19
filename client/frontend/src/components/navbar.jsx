
const Navbar = () => {
  return (
    <nav 
        className="navbar navbar-expand-lg navbar-light shadow-sm px-4 mb-4" 
        style={{
            marginLeft: "250px", 
            backgroundColor: "rgba(255, 255, 255, 0.85)", 
            backdropFilter: "blur(10px)"
        }}
    >
      <div className="container-fluid">
        <span className="navbar-brand fw-bold">Dashboard Overview</span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex ms-auto me-4">
            <div className="input-group">
                <span className="input-group-text bg-light border-0">
                    <i className="bi bi-search text-muted"></i>
                </span>
                <input
                className="form-control bg-light border-0"
                type="search"
                placeholder="Search complaints..."
                aria-label="Search"
                />
            </div>
          </form>

          <div className="d-flex align-items-center">
            <div className="position-relative me-4" style={{cursor: 'pointer'}}>
              <i className="bi bi-bell fs-5 text-secondary"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3
                <span className="visually-hidden">unread messages</span>
              </span>
            </div>

            <div className="d-flex align-items-center gap-2">
                <div className="rounded-circle bg-secondary d-flex justify-content-center align-items-center text-white fw-bold" style={{width: "40px", height: "40px"}}>
                    AD
                </div>
                <div>
                     <span className="d-block fw-bold" style={{fontSize: '14px'}}>Admin User</span>
                     <span className="d-block text-muted" style={{fontSize: '12px'}}>Super Admin</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
