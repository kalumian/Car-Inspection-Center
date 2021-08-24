// import from NPM
import { useState } from "react";
import { Link } from "react-router-dom";

// import images
import logo from "../../../../Assets/logo-no-bg.png";

// import components
import Link_sidebar from "./Link_sidebar";
import Sidebar_button from "./Sidebar_button";

function Sidebar({ user }) {
  // State
  const [stateSidebar, setSidebarState] = useState(true);
  //  Function
  const handleState = () => {
    setSidebarState(!stateSidebar);
  };
  return (
    <div className="bg-white sidebar-wrapper">
      {/* ----------- Logo -----------*/}
      <div
        className={`sidebar-heading ${!stateSidebar ? " sidebar-active" : " "}`}
      >
        <Link to="/dashboard">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <Sidebar_button handleState={handleState} />
      </div>
      {/* ----------- Links -----------*/}
      <div
        className={`list-group list-group-flush my-3 ${
          !stateSidebar ? " sidebar-active" : " "
        }`}
      >
        {user === "الاستقبال" ? (
          <>
            <Link_sidebar title="الفواتير" icon="fas fa-file-invoice" />
          </>
        ) : user === "الفني" ? (
          <>
            <Link_sidebar title="الكروت" icon="fas fa-file-invoice" />
          </>
        ) : user === "المشرف" ? (
          <>
            <Link_sidebar title="الموظفين" icon="fas fa-file-invoice" />
          </>
        ) : (
          <></>
        )}
        <Link
          to="/login"
          className="list-group-item list-group-item-action bg-transparent second-text fw-bold text-end text-danger"
        >
          <i className="fas fa-sign-out-alt me-2"></i>
          <span>تسجيل الخروج</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
