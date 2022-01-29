import Lable from "../Form_invoices-components/Lable";

function Add_branch() {
  return (
    <>
      <div className="row mt-3">
        <div className="col-4">
          <input
            type="text"
            className="form-control "
            id=""
            placeholder="اضافة فرع"
          />
        </div>
        <div className="col-4">
          <button className="min">اضافة</button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-4">
          <select className="form-select" id="">
            <option selected value={undefined}>
              الفروع
            </option>
            <option></option>
            <option></option>
            <option></option>
          </select>
        </div>
        <div className="col-4">
          <button className="min">تعديل</button>
        </div>
      </div>
    </>
  );
}

export default Add_branch;
