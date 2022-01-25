import Edit_page from "./Edit_page";

function Form_sm({
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
    <div className="form-invoices primary-text rtl mobile">
      <h2 className="text-center mt-4 ">انشاء فاتورة</h2>
      <form action="" autocomplete="off">
        <div className="row mt-3 ">
          <div className="col">
            <label htmlFor="invoices-customer-name" className="form-label">
              اسم العميل<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="invoices-customer-name"
              placeholder="محمد عبد السميع"
            />
          </div>
        </div>
        <div className="row mt-3 ">
          <div className="col">
            <label htmlFor="invoices-customer-number" className="form-label">
              رقم الجوال<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="invoices-customer-number"
              placeholder="0513456789"
            />
          </div>
        </div>
        <div className="row mt-3 ">
          <div className="col">
            <label htmlFor="invoices-customer-email" className="form-label">
              البريد الإلكتروني<span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="invoices-customer-email"
              placeholder="sdacaw@gmail.com"
            />
          </div>
        </div>
        <div className="row mt-3 primary-text">
          <div className="col">
            <label
              htmlFor="invoices-customer-board-number"
              className="form-label"
            >
              اللوحة (ارقام)<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="invoices-customer-board-number"
              placeholder="1234"
            />
          </div>
          <div className="col">
            <label
              htmlFor="invoices-customer-board-name"
              className="form-label"
            >
              اللوحة (احرف)<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="invoices-customer-board-name"
              placeholder="ا ب ت"
            />
          </div>
        </div>
        <div className="row mt-3 primary-text">
          <div className="col">
            <label className="form-label">
              الرافعة<span className="text-danger">*</span>
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>اختار الرافعة</option>
              <option value="1">ميكانيكي</option>
              <option value="2">يدوي</option>
              <option value="3">سريع</option>
            </select>
          </div>
        </div>
        <div className="row mt-3 primary-text">
          <div className="col">
            <label className="form-label">
              المصنع<span className="text-danger">*</span>
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>اختار المصنع</option>
              <option value="1">ميكانيكي</option>
              <option value="2">يدوي</option>
              <option value="3">سريع</option>
            </select>
          </div>
        </div>
        <div className="row mt-3 primary-text">
          <div className="col">
            <label className="form-label">
              النوع<span className="text-danger">*</span>
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>اختار النوع</option>
              <option value="1">ميكانيكي</option>
              <option value="2">يدوي</option>
              <option value="3">سريع</option>
            </select>
          </div>
        </div>
        <div className="row mt-3 primary-text">
          <div className="col">
            <label htmlFor="invoices-speedometer" className="form-label">
              العدّاد<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="invoices-speedometer"
              placeholder="1 Km"
            />
          </div>
        </div>
        <div className="row mt-3 primary-text">
          <div className="col">
            <label className="form-label">
              المصدر<span className="text-danger">*</span>
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>اختار المصنع</option>
              <option value="1">ميكانيكي</option>
              <option value="2">يدوي</option>
              <option value="3">سريع</option>
            </select>
          </div>
        </div>
        <div className="row mt-3 primary-text">
          <div className="col">
            <label className="form-label">
              دقائق الحركة<span className="text-danger">*</span>
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>اختار النوع</option>
              <option value="1">ميكانيكي</option>
              <option value="2">يدوي</option>
              <option value="3">سريع</option>
            </select>
          </div>
        </div>
        <div className="row mt-3 primary-text">
          <div className="col">
            <label htmlFor="invoices_select_year" className="form-label">
              السنة<span className="text-danger">*</span>
            </label>
            <input
              type="date"
              className="form-control"
              id="invoices_select_year"
            />
          </div>
        </div>
        <div className="row mt-3 primary-text">
          <div className="col">
            <label htmlFor="invoices-VIN" className="form-label">
              #VIN<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="invoices-VIN"
              placeholder="#VIN"
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
          <div className="col-6">
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
        <div className="row mt-3 primary-text">
          <textarea
            className="form-control"
            placeholder="ملاحظات"
            id="invoices-notes"
          ></textarea>
        </div>
        <div className="d-flex justify-content-center">
          <button className="w-15 btn btn-lg primary-bg" type="submit">
            انشاء
          </button>
        </div>
      </form>
      {editPage ? (
        <Edit_page setEditPage={setEditPage} editPage={editPage} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Form_sm;
