// Impoert Compoentns
import Edit_page from "./Edit_page";
import Form_lg from "./Form_lg";
import Form_s from "./Form_s";

// Impoert From Library
import {useState } from "react";

function Forms() {

  const [editPage, setEditPage] = useState(false);

  return (
    <>
      {/* For Large Screen */}
      <div className="form-invoices primary-text rtl labtop">
        <h2 className="text-center mt-4 ">انشاء فاتورة</h2>
        <Form_lg setEditPage={setEditPage} editPage={editPage} />
        <Edit_page setEditPage={setEditPage} editPage={editPage} />
      </div>
      {/* For Large Screen */}
      {/* For Small Screen */}
      <div className="form-invoices primary-text rtl mobile">
        <h2 className="text-center mt-4 ">انشاء فاتورة</h2>
        <Form_s />
        <Edit_page setEditPage={setEditPage} editPage={editPage} />
      </div>
      {/* For Small Screen */}
    </>
  );
}

export default Forms;
