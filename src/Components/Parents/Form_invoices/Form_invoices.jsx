import Sidebar from "../../Childe/General-components/Sidebar/Sidebar";
import Error_Page from "../Error_Page/Error_Page";
import Header from "../../Childe/General-components/Header/Header";
function Form_invoices({ user }) {
  const Content = () => {
    return (
      <div className="form-invoices primary-text rtl">
        <h2 className="text-center mt-4 ">انشاء فاتورة</h2>
        <form action="">
          <div className="row mt-5 ">
            <div className="col-4">
              <label for="customer-name" className="form-label">
                اسم العميل<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="customer-name"
                placeholder="محمد عبد السميع"
              />
            </div>
            <div className="col-4">
              <label for="customer-number" className="form-label">
                رقم الجوال<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="customer-number"
                placeholder="0513456789"
              />
            </div>
            <div className="col-4">
              <label for="customer-number" className="form-label">
                البريد الإلكتروني<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="customer-number"
                placeholder="0513456789"
              />
            </div>
          </div>
          <div className="row mt-4 primary-text">
            <div className="col-4">
              <label for="customer-name" className="form-label">
                اللوحة (ارقام)<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="customer-name"
                placeholder="1234"
              />
            </div>
            <div className="col-4">
              <label for="customer-name" className="form-label">
                اللوحة (حروف)<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="customer-name"
                placeholder="أ ب ت ث"
              />
            </div>
            <div className="col-4">
              <label for="customer-name" className="form-label">
                الرافعة<span className="text-danger">*</span>
              </label>
              <select
                className="form-select"
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
              <label for="customer-name" className="form-label">
                المصنع<span className="text-danger">*</span>
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>اختار المصنع</option>
                <option value="1">ميكانيكي</option>
                <option value="2">يدوي</option>
                <option value="3">سريع</option>
              </select>
            </div>
            <div className="col-6">
              <label for="customer-name" className="form-label">
                النوع<span className="text-danger">*</span>
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
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
              <label for="customer-name" className="form-label">
                العدّاد<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="customer-name"
                placeholder="1 Km"
              />
            </div>
            <div className="col-4">
              <label for="customer-name" className="form-label">
                المصدر<span className="text-danger">*</span>
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>اختار المصنع</option>
                <option value="1">ميكانيكي</option>
                <option value="2">يدوي</option>
                <option value="3">سريع</option>
              </select>
            </div>
            <div className="col-4">
              <label for="customer-name" className="form-label">
                دقائق الحركة<span className="text-danger">*</span>
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
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
              <label for="customer-name" className="form-label">
                السنة<span className="text-danger">*</span>
              </label>
              <input
                type="date"
                className="form-control"
                id="customer-name"
                placeholder="1 Km"
              />
            </div>
            <div className="col-6">
              <label for="customer-name" className="form-label">
                #VIN<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="customer-name"
                placeholder="#VIN"
              />
            </div>
          </div>
          <div className="row mt-4 primary-text"></div>
        </form>
      </div>
    );
  };

  return (
    <div className="d-flex wrapper flex-row-reverse">
      <Sidebar user={user} />
      <div className="container-fluid px-4">
        <Header user={user} />
        {user === "الاستقبال" ? <Content /> : <Error_Page kind={400} />}
      </div>
    </div>
  );
}

export default Form_invoices;
