import Sidebar from "../../Childe/General-components/Sidebar/Sidebar";
import Error_Page from "../Error_Page/Error_Page";
import Header from "../../Childe/General-components/Header/Header";
import Form from "../../Childe/Form_invoices-components/Forms";

import { useState } from "react";

function Form_invoices({user}) {
  // Variables
  const [editPage, setEditPage] = useState(false);

  // Content
  return (
    <div className="d-flex wrapper flex-row-reverse">
      <Sidebar user={user} />
      <div className="container-fluid px-4">
        <Header user={user} />
        {user.type === "الاستقبال" || user.type === "المشرف" ? (
          <>
            <Form setEditPage={setEditPage} editPage={editPage} />
          </>
        ) : (
          <Error_Page kind={400} />
        )}
      </div>
    </div>
  );
}

export default Form_invoices;
