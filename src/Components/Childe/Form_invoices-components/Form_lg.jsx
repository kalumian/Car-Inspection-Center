import Lable from "./Lable";
import Input_Default from "./Input_Default";
import Select from "./Select";
import { useContext, useState } from "react";

// Impoert Functions
import { getYears, GetFullDateString } from "../../../Function/Times";
import { DataContext } from "../../../DataContext";

const init = {
  invoices_customer_VIN: "",
  invoices_customer_board_letters: "",
  invoices_customer_board_number: "",
  invoices_customer_cost: "",
  invoices_customer_crane: "",
  invoices_customer_email: "",
  invoices_customer_factor: "",
  invoices_customer_factory: "",
  invoices_customer_final_cost: "0",
  invoices_customer_name: "",
  invoices_customer_number: "",
  invoices_customer_service: "فحص محركات شامل",
  invoices_customer_speedometer: "",
  notes: "",
};
function Form_lg({ setEditPage, editPage }) {
  //  Hooks
  const { handleCard, user } = useContext(DataContext);
  const [message, setMessage] = useState(false);
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  // Functions
  const onSubmit = (data) => {
    handleCard(input);
    input(init)
  };

  return (
    <form onSubmit={onSubmit} autocomplete="off">
      {/* Name & Number & Email */}
      <div className="row mt-5 ">
        <div className="col-4">
          <Lable For="invoices_customer_name" title="اسم العميل" />
          <input
            type="text"
            onChange={handleChange}
            className="form-control"
            id="invoices_customer_name"
            name="invoices_customer_name"
            autoComplete="off"
            value={input.invoices_customer_name}
          />
        </div>
        <div className="col-4">
          <Lable title="رقم الجوال" />
          <input
            type="text"
            onChange={handleChange}
            className="form-control"
            id="invoices_customer_number"
            name="invoices_customer_number"
            placeholder=""
            value={input.invoices_customer_number}
            autoComplete="off"
          />
        </div>
        <div className="col-4">
          <Lable title="البريد الإلكتروني" active={false} />
          <input
            type="email"
            className="form-control"
            id="invoices_customer_email"
            name="invoices_customer_email"
            value={input.invoices_customer_email}
            placeholder=""
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
      </div>
      {/* Board Number & Letters & Crane & Factory */}
      <div className="row mt-4 primary-text">
        <div className="col-3">
          <Lable
            For="invoices_customer_board_number"
            title="رقم اللوحة (رقم)"
          />
          <input
            type="text"
            onChange={handleChange}
            className="form-control"
            name="invoices_customer_board_number"
            value={input.invoices_customer_board_number}
            id="invoices_customer_board_number"
            placeholder=""
            autoComplete="off"
          />
        </div>
        <div className="col-3">
          <Lable
            For="invoices_customer_board_letters"
            title="رقم اللوحة (حرف)"
          />
          <input
            type="text"
            onChange={handleChange}
            name="invoices_customer_board_letters"
            className="form-control"
            value={input.invoices_customer_board_letters}
            id="invoices_customer_board_letters"
            placeholder=""
            autoComplete="off"
          />
        </div>
        <div className="col-3">
          <Lable For="invoices_customer_crane" title="الرافعة" />
          <input
            type="number"
            value={input.invoices_customer_crane}
            className="form-control"
            id="invoices_customer_crane"
            name="invoices_customer_crane"
            placeholder=""
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div className="col-3">
          <Lable For="invoices_customer_factory" title="المصنع" />
          <input
            type="text"
            onChange={handleChange}
            value={input.invoices_customer_factory}
            className="form-control"
            name="invoices_customer_factory"
            id="invoices_customer_factory"
            placeholder=""
            autoComplete="off"
          />
        </div>
      </div>
      {/* Type & speedometer & Years */}
      <div className="row mt-4 primary-text">
        <div className="col-4">
          <Lable For="invoices_customer_type" title="النوع" />
          <input
            type="text"
            onChange={handleChange}
            className="form-control"
            name="invoices_customer_factor"
            value={input.invoices_customer_factor}
            id="invoices_customer_type"
            placeholder=""
            autoComplete="off"
          />
        </div>
        <div className="col-4">
          <Lable For="invoices_customer_speedometer" title="العدّاد" />
          <input
            type="text"
            onChange={handleChange}
            className="form-control"
            id="invoices_customer_speedometer"
            value={input.invoices_customer_speedometer}
            name="invoices_customer_speedometer"
            placeholder=""
            autoComplete="off"
          />
        </div>
        <div className="col-4">
          <Lable For="invoices_customer_year" title="السنة" />
          <Select
            name="invoices_customer_year"
            value={input.invoices_customer_year}
            id="invoices_customer_year"
            select="اختيار السنة"
            options={getYears()}
            handleChange={handleChange}
          />
        </div>
      </div>
      {/* VIN & service & cost */}
      <div className="row mt-4 primary-text">
        <div className="col-4">
          <Lable For="invoices_customer_VIN" title="#VIN" />
          <input
            value={input.invoices_customer_VIN}
            type="text"
            onChange={handleChange}
            className="form-control"
            id="invoices_customer_VIN"
            placeholder=""
            autoComplete="off"
            name="invoices_customer_VIN"
          />
        </div>
        <div className="col-4">
          <Lable For="invoices_customer_service" title="النوع الخدمة" />
          <Select
            name="invoices_customer_service"
            id="invoices_customer_service"
            handleChange={handleChange}
            select="النوع الخدمة"
            options={["فحص محركات شامل", "فحص جزئي"]}
          />
        </div>
        <div className="col-4 text-center">
          <Lable For="invoices_customer_cost" title="التكلفة" />
          <input
            type="text"
            name="invoices_customer_cost"
            value={input.invoices_customer_cost}
            onChange={handleChange}
            className="form-control"
            id="invoices_customer_cost"
            placeholder=""
            autoComplete="off"
          />
        </div>
      </div>
      {/*final_cost */}
      <div className="row mt-4 primary-text">
        <div className="col-4">
          <Lable For="invoices_customer_final_cost" title="لتكلفة النهائية" />
          <input
            value={input.invoices_customer_final_cost}
            type="text"
            onChange={handleChange}
            name="invoices_customer_final_cost"
            className="form-control"
            id="invoices_customer_final_cost"
            placeholder=""
            autoComplete="off"
          />
        </div>
        <div className="col-4 mt-1">
          <button
            className="w-30 btn btn-lg primary-bg"
            onClick={(e) => {
              e.preventDefault();
              setEditPage(!editPage);
            }}
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
          value={input.invoices_notes}
          name="invoices_notes"
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="d-flex justify-content-center">
        <button className="w-30 btn btn-lg primary-bg" type="submit">
          انشاء
        </button>
      </div>
    </form>
  );
}

export default Form_lg;
