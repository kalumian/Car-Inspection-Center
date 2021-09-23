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
  const [stateSidebar, setSidebarState] = useState(false);
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
            <Link_sidebar
              title="الفواتير"
              icon="fas fa-file-invoice"
              link="فواتير"
            />
            <Link_sidebar
              title="انشاء فاتورة"
              icon="fas fa-plus"
              link="انشاء/فواتير"
            />
          </>
        ) : user === "الفني" ? (
          <>
            <Link_sidebar
              title="قائمة الكروت"
              icon="fas fa-file-invoice"
              link="الكروت"
            />
          </>
        ) : user === "المشرف" ? (
          <>
            <Link_sidebar
              title="قائمة الموظفين"
              icon="fas fa-file-invoice"
              link="موظفين"
            />
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
      <div className={`add-button  ${!stateSidebar ? " sidebar-active" : " "}`}>
      </div>
    </div>
  );
}

export default Sidebar;
