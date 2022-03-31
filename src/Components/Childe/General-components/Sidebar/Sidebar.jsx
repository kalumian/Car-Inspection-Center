// import from NPM
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

// import images
import logo from "../../../../Assets/logo-no-bg.png";

// import components
import Link_sidebar from "./Link_sidebar";
import Sidebar_button from "./Sidebar_button";

// Import DataContext
import { DataContext } from "../../../../DataContext";

// Import Function
import { WhatThisAccount } from "../../../../Function/UsersControl";
import { GetUser } from "../../../../Function/Generel";

function Sidebar() {
  // Trans State Side bar To Context Storeg
  const { stateSide, setStateSide, ClearCookies , removeCookie } = useContext(DataContext);
  const user = GetUser()
  const Type = user.type
  return (
    <div className="bg-white sidebar-wrapper">
      {/* ----------- Logo -----------*/}
      <div className={`sidebar-heading ${!stateSide ? " sidebar-active" : " "}`}>
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
        {Type === "الاستقبال" ? (
          <>
            <Link_sidebar title="الفواتير" icon="fas fa-file-invoice" link="فواتير"/>
            <Link_sidebar title="انشاء فاتورة" icon="fas fa-plus" link="انشاء/فواتير"/>
          </>
        ) : Type === "الفني" ? (
          <>
            <Link_sidebar title="قائمة الكروت" icon="far fa-credit-card" link="قائمة-الكروت" />
          </>
        ) : Type === "المشرف" ? (
          <>
            <Link_sidebar title="الرئيسية" icon="fas fa-home" link="الرئيسية" />
            <Link_sidebar title="قائمة الموظفين" icon="fas fa-user-tie" link="موظفين"/>
            <Link_sidebar title="إدارة الحسابات" icon="fas fa-users-cog" link="حسابات"/>
            <Link_sidebar title="اعدادات الموقع" icon="fas fa-sliders-h" link="اعدادات"/>
            <Link_sidebar title="استعلامات"icon="fas fa-file-invoice-dollar" link="استعلام"/>
            <Link_sidebar title="الفواتير" icon="fas fa-file-invoice" link="فواتير"/>
            <Link_sidebar title="انشاء فاتورة" icon="fas fa-plus" link="انشاء/فواتير"/>
            <Link_sidebar title="قائمة الكروت"icon="far fa-credit-card" link="قائمة-الكروت"/>
          </>
        ) : (
          <></>
        )}
        <a
          onClick={ClearCookies}
          href="/login"
          className="list-group-item list-group-item-action bg-transparent second-text fw-bold text-end text-danger"
        >
          <i className="fas fa-sign-out-alt me-2"></i>
          <span>تسجيل الخروج</span>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
