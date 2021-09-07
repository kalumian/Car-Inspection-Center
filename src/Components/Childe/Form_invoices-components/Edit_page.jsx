function Edit_page({ setEditPage, editPage }) {
  return (
    <div className={`edit-page rtl shadow-lg ${editPage ? "active" : ""}`}>
      <header>
        <span className="close" onClick={() => setEditPage(false)}>
          X
        </span>
      </header>
      <form>
        <div className="row mt-3 ">
          <div className="col">
            <label htmlFor="invoices-customer-name" className="form-label">
              اضافة خدمة
            </label>
            <input
              type="text"
              className="form-control"
              id="invoices-customer-name"
              placeholder="محمد عبد السميع"
            />
          </div>
          <div className="col">
            <label htmlFor="invoices-customer-name" className="form-label">
              السعر الإفتراضي
            </label>
            <input
              type="text"
              className="form-control"
              id="invoices-customer-name"
              placeholder="محمد عبد السميع"
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="w-30 btn btn-lg primary-bg" type="submit">
            انشاء
          </button>
        </div>
        <div className="row mt-3 ">
          <div className="col">
            <label htmlFor="invoices-customer-name" className="form-label">
              الخدمة
            </label>
            <input
              type="text"
              className="form-control"
              id="invoices-customer-name"
              placeholder="محمد عبد السميع"
            />
          </div>
          <div className="col">
            <label htmlFor="invoices-customer-name" className="form-label">
              السعر الإفتراضي
            </label>
            <input
              type="text"
              className="form-control"
              id="invoices-customer-name"
              placeholder="محمد عبد السميع"
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="w-30 btn btn-lg primary-bg mx-2" type="submit">
            تعديل
          </button>
          <button className="w-30 btn btn-lg primary-bg mx-2" type="submit">
            حذف
          </button>
          <button
            className="w-30 btn btn-lg primary-bg mx-2"
            onClick={(e) => {
              e.preventDefault();
              setEditPage(false);
            }}
          >
            انهاء
          </button>
        </div>
      </form>
    </div>
  );
}

export default Edit_page;
