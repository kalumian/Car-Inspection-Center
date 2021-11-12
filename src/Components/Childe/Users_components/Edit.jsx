import Input_Default from "../Users_components/Input_Default";
import Lable from "../Form_invoices-components/Lable";

function Edit() {
  return (
    <>
      <div className="row">
        <div className="col-4">
          <Lable active={false} For="invoices_customer_name" title="الاسم" />
          <Input_Default name="name_customer" id="invoices_customer_name" />
        </div>
        <div className="col-4">
          <Lable active={false} For="invoices_customer_name" title="رقم الجوال" />
          <Input_Default name="name_customer" id="invoices_customer_name" />
        </div>
        <div className="col-4">
          <Lable active={false} For="invoices_customer_name" title="الرقم الوظيفي" />
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
            <button className="add">تحديد</button>
            <button className="add">تعديل</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edit;
