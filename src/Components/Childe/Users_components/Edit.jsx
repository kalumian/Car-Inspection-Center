import Input_Default from "../Users_components/Input_Default";
import Lable from "../Form_invoices-components/Lable";
import { useState } from "react/cjs/react.development";

function Edit() {
  const [editState, setEditState] = useState(false);
  return (
    <>
      <div className="row">
        {editState ? (
          <>
            <div className="col-4">
              <Lable
                active={false}
                For="invoices_customer_name"
                title="الاسم"
              />
              <Input_Default name="name_customer" id="invoices_customer_name" />
            </div>
            <div className="col-4">
              <Lable
                active={false}
                For="invoices_customer_name"
                title="رقم الجوال"
              />
              <Input_Default name="name_customer" id="invoices_customer_name" />
            </div>
            <div className="col-4">
              <Lable
                active={false}
                For="invoices_customer_name"
                title="الرقم الوظيفي"
              />
              <Input_Default name="name_customer" id="invoices_customer_name" />
            </div>
            <div className="row mt-3">
              <div className="col-4">
                <select className="form-select" id="">
                  <option selected value={undefined}>
                    الوظيفة
                  </option>
                  <option></option>
                  <option></option>
                  <option></option>
                </select>
              </div>
              <div className="col-4">
                <button
                  className="min mx-1"
                  onClick={() => {
                    setEditState(!editState);
                  }}
                >
                  حفظ
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="col-4">
              <select className="form-select" id="">
                <option selected value={undefined}>
                  الموظف
                </option>
                <option></option>
                <option></option>
                <option></option>
              </select>
            </div>
            <div className="col-2">
              <button
                className="min mx-1"
                onClick={() => {
                  setEditState(!editState);
                }}
              >
                تعديل
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Edit;
