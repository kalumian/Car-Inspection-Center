// import images
import logo from "../../Assets/logo-no-bg.png";

// import components
import Link_sidebar from "../Childe/Sidebar-components/Link_sidebar";

function Sidebar() {
  return (
    <div className="bg-white sidebar-wrapper">
      {/* ----------- Logo -----------*/}
      <div className="sidebar-heading">
        <a>
          <img src={logo} alt="logo" className="logo" />
        </a>
      </div>
      {/* ----------- Links -----------*/}
      <div className="list-group list-group-flush my-3">
        <a
          href="#"
          className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
        >
          <i className="fas fa-tachometer-alt me-2"></i>Dashboard
        </a>
        <Link_sidebar />
        <a
          href="#"
          className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
        >
          <i className="fas fa-project-diagram me-2"></i>Projects
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
        >
          <i className="fas fa-chart-line me-2"></i>Analytics
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
        >
          <i className="fas fa-paperclip me-2"></i>Reports
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
        >
          <i className="fas fa-shopping-cart me-2"></i>Store Mng
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
        >
          <i className="fas fa-gift me-2"></i>Products
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
        >
          <i className="fas fa-comment-dots me-2"></i>Chat
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
        >
          <i className="fas fa-map-marker-alt me-2"></i>Outlet
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
        >
          <i className="fas fa-power-off me-2"></i>Logout
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
