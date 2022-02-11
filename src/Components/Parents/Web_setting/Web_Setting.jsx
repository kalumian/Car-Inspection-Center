import Sidebar from "../../Childe/General-components/Sidebar/Sidebar";
import Error_Page from "../Error_Page/Error_Page";
import Header from "../../Childe/General-components/Header/Header";
import Section from "../../Childe/Web_setting_components/Section";
import Branch from "../../Childe/Web_setting_components/Branch";
import { useState } from "react";

function Web_Setting({ user }) {
  // Content
  return (
    <div className="d-flex wrapper flex-row-reverse">
      <Sidebar user={user} />
      <div className="container-fluid px-4">
        <Header user={user} />
        {user.type === "المشرف" ? (
          <div className="rtl">
            <Section user={user} Components={Branch} title="اعدادت فروع المركز"/>
          </div>
        ) : (
          <Error_Page kind={400} />
        )}
      </div>
    </div>
  );
}

export default Web_Setting;
