import Sidebar from "../../Childe/General-components/Sidebar/Sidebar";
import Error_Page from "../Error_Page/Error_Page";
import Header from "../../Childe/General-components/Header/Header";
import Section from "../../Childe/Users_components/Section";
import Add from "../../Childe/Users_components/Add";
import Delete from "../../Childe/Users_components/Delete";
import Edit from "../../Childe/Users_components/Edit";

import { useState } from "react";

function Users({ user }) {
  // Content
  return (
    <div className="d-flex wrapper flex-row-reverse">
      <Sidebar user={user} />
      <div className="container-fluid px-4 ">
        <Header user={user} />
        {user === "المشرف" ? (
          <div className="users rtl">
            <Section Component={Add} title="اضافة حساب جديد" />
            <Section Component={Edit} title="تعديل حساب" />
            <Section Component={Delete} title="حذف حساب" />
          </div>
        ) : (
          <Error_Page kind={400} />
        )}
      </div>
    </div>
  );
}

export default Users;
