import Edit_page from "./Edit_page";

function Form_lg({
  handleInput,
  handleSelect,
  submit,
  input,
  select,
  message,
  setEditPage,
  editPage,
}) {
  const OpenPage = (e) => {
    e.preventDefault();
    setEditPage(true);
  };
  return (
    <div className="form-invoices primary-text rtl labtop">
      <h2 className="text-center mt-4 ">انشاء فاتورة</h2>
      <form>
        <div className="row mt-5 ">
          <div className="col-4">
            <label htmlFor="invoices_customer_name" className="form-label">
              اسم العميل<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="invoices_customer_name"
              className="form-control"
              id="invoices_customer_name"
              onChange={handleInput}
              value={input.invoices_customer_name}
              key="1"
              placeholder="محمد عبد السميع"
            />
          </div>
          <div className="col-4">
            <label htmlFor="invoices_customer_number" className="form-label">
              رقم الجوال<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="invoices_customer_number"
              onChange={handleInput}
              value={input.invoices_customer_number}
              placeholder="0513456789"
            />
          </div>
          <div className="col-4">
            <label htmlFor="invoices_customer_email" className="form-label">
              البريد الإلكتروني<span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="invoices_customer_email"
              onChange={handleInput}
              value={input.invoices_customer_email}
              placeholder="sdacaw@gmail.com"
            />
          </div>
        </div>
        <div className="row mt-4 primary-text">
          <div className="col-4">
            <label
              htmlFor="invoices_customer_board_number"
              className="form-label"
            >
              اللوحة (ارقام)<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="invoices_customer_board_number"
              onChange={handleInput}
              value={input.invoices_customer_board_number}
              placeholder="1234"
            />
          </div>
          <div className="col-4">
            <label
              htmlFor="invoices_customer_board_name"
              className="form-label"
            >
              اللوحة (حروف)<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="invoices_customer_board_name"
              onChange={handleInput}
              value={input.invoices_customer_board_name}
              placeholder="أ ب ت ث"
            />
          </div>
          <div className="col-4">
            <label className="form-label">
              الرافعة<span className="text-danger">*</span>
            </label>
            <select
              className="form-select"
              id="selcet_crane"
              onChange={handleSelect}
              value={select.selcet_crane}
              aria-label="Default select example"
            >
              <option selected>اختار الرافعة</option>
              <option value="1">ميكانيكي</option>
              <option value="2">يدوي</option>
              <option value="3">سريع</option>
            </select>
          </div>
        </div>
        <div className="row mt-4 primary-text">
          <div className="col-6">
            <label className="form-label">
              المصنع<span className="text-danger">*</span>
            </label>
            <select
              id="select_factory"
              className="form-select"
              aria-label="Default select example"
              onChange={handleSelect}
              value={select.select_factory}
            >
              <option selected>اختار المصنع</option>
              <option value="1">ميكانيكي</option>
              <option value="2">يدوي</option>
              <option value="3">سريع</option>
            </select>
          </div>
          <div className="col-6">
            <label className="form-label">
              النوع<span className="text-danger">*</span>
            </label>
            <select
              className="form-select"
              id="select_type"
              aria-label="Default select example"
              onChange={handleSelect}
              value={select.select_type}
            >
              <option selected>اختار النوع</option>
              <option value="1">ميكانيكي</option>
              <option value="2">يدوي</option>
              <option value="3">سريع</option>
            </select>
          </div>
        </div>
        <div className="row mt-4 primary-text">
          <div className="col-4">
            <label htmlFor="invoices-speedometer" className="form-label">
              العدّاد<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="invoices_speedometer"
              placeholder="1 Km"
              onChange={handleInput}
              value={input.invoices_speedometer}
            />
          </div>
          <div className="col-4">
            <label className="form-label">
              المصدر<span className="text-danger">*</span>
            </label>
            <select
              className="form-select"
              id="select_source"
              onChange={handleSelect}
              value={select.select_source}
              aria-label="Default select example"
            >
              <option selected>اختار المصنع</option>
              <option value="1">ميكانيكي</option>
              <option value="2">يدوي</option>
              <option value="3">سريع</option>
            </select>
          </div>
          <div className="col-4">
            <label className="form-label">
              دقائق الحركة<span className="text-danger">*</span>
            </label>
            <select
              className="form-select"
              id="motion_minutes"
              aria-label="Default select example"
              onChange={handleSelect}
              value={select.motion_minutes}
            >
              <option selected>اختار النوع</option>
              <option value="1">ميكانيكي</option>
              <option value="2">يدوي</option>
              <option value="3">سريع</option>
            </select>
          </div>
        </div>
        <div className="row mt-4 primary-text">
          <div className="col-6">
            <label htmlFor="invoices_select_year" className="form-label">
              السنة<span className="text-danger">*</span>
            </label>
            <select
              className="form-select"
              id="motion_minutes"
              aria-label="Default select example"
              onChange={handleSelect}
              value={select.motion_minutes}
            >
              <option selected>اختيار السنة</option>
              <option value="1">2021</option>
              <option value="2">2020</option>
              <option value="3">2019</option>
              <option value="3">2018</option>
              <option value="3">2017</option>
            </select>
          </div>
          <div className="col-6">
            <label htmlFor="invoices_VIN" className="form-label">
              #VIN<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="invoices_VIN"
              placeholder="#VIN"
              onChange={handleInput}
              value={input.invoices_VIN}
            />
          </div>
        </div>
        <div className="row mt-4 primary-text">
          <div className="col-8">
            <label htmlFor="invoices_select_year" className="form-label">
              نوع الخدمة<span className="text-danger">*</span>
            </label>
            <select
              className="form-select"
              id="motion_minutes"
              aria-label="Default select example"
              onChange={handleSelect}
              value={select.motion_minutes}
            >
              <option selected>اختار نوع الخدمة</option>
              <option value="1">ميكانيكي</option>
              <option value="2">يدوي</option>
              <option value="3">سريع</option>
            </select>
          </div>
          <div className="col-4 text-center">
            <label htmlFor="invoices_select_year" className="form-label ">
              التكلفة
            </label>
            <input
              type="text"
              className="form-control"
              id="invoices_select_year"
              onChange={handleInput}
              value={input.invoices_select_year}
            />
          </div>
        </div>
        <div className="row mt-4 primary-text">
          <div className="col-4">
            <label htmlFor="invoices_select_year" className="form-label">
              التكلفة النهائية<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="invoices_select_year"
              onChange={handleInput}
              value={input.invoices_select_year}
            />
          </div>
          <div className="col-4 mt-1">
            <button
              className="w-30 btn btn-lg primary-bg"
              id="invoices_select_year"
              onClick={OpenPage}
            >
              تعديل
            </button>
          </div>
        </div>
        <div className="row mt-4 primary-text">
          <textarea
            className="form-control"
            placeholder="ملاحظات"
            id="invoices_notes"
            onChange={handleInput}
            value={input.invoices_notes}
          ></textarea>
        </div>
        {message === "error" ? (
          <p className="text-danger text-center mt-3">
            يجب ملئ جميع الحقول المطلوبة (*) لإنشاء الفاتورة
          </p>
        ) : message === "message" ? (
          <p className="text-success text-center mt-3">
            تم انشاء الفاتورة بنجاح !
          </p>
        ) : (
          <></>
        )}
        <div className="d-flex justify-content-center">
          <button
            onClick={submit}
            className="w-30 btn btn-lg primary-bg"
            type="submit"
          >
            انشاء
          </button>
        </div>
      </form>
    <Edit_page setEditPage={setEditPage} editPage={editPage} />
    </div>
  );
}

export default Form_lg;
