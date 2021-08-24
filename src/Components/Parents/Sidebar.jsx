// import from NPM
import { useState } from "react";

// import images
import { Link } from "react-router-dom";
import logo from "../../Assets/logo-no-bg.png";
import Sidebar_button from "../Childe/Sidebar-components/Sidebar_button";

// import components
import Link_sidebar from "../Childe/Sidebar-components/Link_sidebar";

function Sidebar() {
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
        <Link to="/">
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
        <Link_sidebar title="الفواتير" icon="fas fa-file-invoice" />
        <Link_sidebar title="استعلام" icon="fas fa-search" />
        <Link_sidebar title="قائمة الكروت" icon="far fa-list-alt" />
        <Link_sidebar title="الإعدادات" icon="fas fa-cogs" />
      </div>
    </div>
  );
}

export default Sidebar;
