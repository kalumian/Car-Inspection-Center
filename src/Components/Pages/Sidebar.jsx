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
        <Link_sidebar title="الفواتير" icon="fas fa-file-invoice" />
        <Link_sidebar title="استعلام" icon="fas fa-search" />
        <Link_sidebar title="قائمة الكروت" icon="far fa-list-alt" />
        <Link_sidebar title="الإعدادات" icon="fas fa-cogs" />
      </div>
    </div>
  );
}

export default Sidebar;
