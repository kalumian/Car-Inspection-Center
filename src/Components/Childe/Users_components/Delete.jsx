import Input_Default from "../Users_components/Input_Default";
import Lable from "../Form_invoices-components/Lable";

function Delete() {
  return (
    <>
      <div className="row">
        <div className="col-4">
          <select className="form-select" id="">
            <option selected value={undefined}>
              الحساب
            </option>
            <option>فيصل</option>
            <option>احمد</option>
            <option>سلطان</option>
          </select>
        </div>
        <div className="col-4">
          <button className="min">حذف</button>
        </div>
      </div>
    </>
  );
}

export default Delete;
