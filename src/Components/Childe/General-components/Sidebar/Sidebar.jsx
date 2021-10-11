// import from NPM
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

// import images
import logo from "../../../../Assets/logo-no-bg.png";

// import components
import Link_sidebar from "./Link_sidebar";
import Sidebar_button from "./Sidebar_button";
import { DataContext } from "../../../../DataContext";

function Sidebar({ user }) {
  // Trans State Side bar To Context Storeg
  const { stateSide, setStateSide } = useContext(DataContext);
  return (
    <div className="bg-white sidebar-wrapper">
      {/* ----------- Logo -----------*/}
      <div
        className={`sidebar-heading ${!stateSide ? " sidebar-active" : " "}`}
      >
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <Sidebar_button setStateSide={setStateSide} stateSide={stateSide} />
      </div>
      {/* ----------- Links -----------*/}
      <div
        className={`list-group list-group-flush my-3 ${
          !stateSide ? " sidebar-active" : " "
        }`}
      >
        {/* Link Bar With Kind Auth */}
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
              icon="far fa-credit-card"
              link="قائمة-الكروت"
            />
          </>
        ) : user === "المشرف" ? (
          <>
            <Link_sidebar title="الرئيسية" icon="fas fa-home" link="" />
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
    </div>
  );
}

export default Sidebar;
