// import components
import Lable from "./Lable";
import Select from "./Select";
import Branch_section from "./Branch_section";
import { useEffect, useContext, useState } from "react";

// Impoert Functions
import { getYears, GetFullDateString } from "../../../Function/Times";
import { DataContext } from "../../../DataContext";

// Import Json
import { factory } from "../../../Json/factory.json";
import { types } from "../../../Json/type.json";
import Services_section from "./Services_section";

const init = {
  invoices_customer_VIN: "",
  invoices_customer_board_letters: "",
  invoices_customer_board_number: "",
  invoices_customer_branch: "الفرع",
  invoices_customer_cost: "",
  invoices_customer_crane: "",
  invoices_customer_email: "",
  invoices_customer_factory: "",
  invoices_customer_year: "",
  invoices_customer_final_cost: "",
  invoices_customer_name: "",
  invoices_customer_number: "",
  invoices_customer_type: "",
  invoices_customer_service: "تحديد نوع الخدمة",
  invoices_customer_speedometer: "",
  invoices_notes: "",
};
function Form_lg({ setEditPage, editPage }) {
  //  Hooks
  const [card, setCard] = useState({});
  const [message, setMessage] = useState("");
  const { user } = useContext(DataContext);
  const [input, setInput] = useState(init);
  const [activeButton, setActiveButton] = useState(true);
  const [cost , setCost] = useState()
  // useEffect
  useEffect(async () => {
    if (card.name) {
      try {
        let res = await fetch(
          "https://peaceful-depths-13311.herokuapp.com/add-bill",
          {
            method: "POST",
            body: JSON.stringify(card),
            headers: {
              "Content-Type": "application/json",
              "x-access-tokens": user.token,
            },
          }
        );
        let resJson = await res.json();
        console.log(resJson);
        if (resJson.success === true) {
          setActiveButton(false);
          setMessage("تم اضافة الفاتورة بنجاح.");
          setCard(init);
          setInput(init);
          setTimeout(() => {
            setActiveButton(true);
          }, 4000);
        }
      } catch (err) {
        setMessage("تأكد من المدخلات ومن شبكة الانترنت لديك");
      }
    }
  }, [card.name]);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  // Functions
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      !(input.invoices_customer_VIN === "") &&
      !(input.invoices_customer_board_letters === "") &&
      !(input.invoices_customer_board_number === "") &&
      !(input.invoices_customer_branch === "الفرع") &&
      !(input.invoices_customer_cost === "") &&
      !(input.invoices_customer_crane === "") &&
      !(input.invoices_customer_email === "") &&
      !(input.invoices_customer_factory === "") &&
      !(input.invoices_customer_year === "") &&
      !(input.invoices_customer_final_cost === "0") &&
      !(input.invoices_customer_name === "") &&
      !(input.invoices_customer_number === "") &&
      !(input.invoices_customer_type === "") &&
      !(input.invoices_customer_service === "تحديد نوع الخدمة") &&
      !(input.invoices_customer_speedometer === "") &&
      !(input.invoices_notes === "")
    ) {
    setCard({
      name: input.invoices_customer_name,
      email: input.invoices_customer_email,
      phoneNum: input.invoices_customer_number,
      numOfLicense: `${input.invoices_customer_board_number} - ${input.invoices_customer_cost}`,
      numCrane: input.invoices_customer_crane,
      vactor: input.invoices_customer_factory,
      type: input.invoices_customer_type,
      numaCounter: input.invoices_customer_speedometer,
      year: input.invoices_customer_year,
      numVin: input.invoices_customer_VIN,
      typeService: Number(input.invoices_customer_service),
      cost,
      by: user.name,
      totalCost:input.invoices_customer_final_cost,
      StartDate: GetFullDateString(),
      endDate: " -- ",
      BillState: "UnderConstruction",
      note: input.invoices_notes,
      branch_id: Number(input.invoices_customer_branch),
    });
    } else {
      setMessage("تأكد من المدخلات ومن شبكة الانترنت لديك");
    }
  };

  return (
    <form
      onSubmit={activeButton ? onSubmit : (e) => e.preventDefault()}
      autocomplete="off"
    >
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
          <Select
            name="invoices_customer_factory"
            value={input.invoices_customer_factory}
            id="invoices_customer_factory"
            select="المصنع"
            options={factory}
            handleChange={handleChange}
          />
        </div>
      </div>
      {/* Type & speedometer & Years */}
      <div className="row mt-4 primary-text">
        <div className="col-4">
          <Lable For="invoices_customer_type" title="النوع" />
          <Select
            name="invoices_customer_type"
            value={input.invoices_customer_type}
            id="invoices_customer_type"
            select="النوع"
            options={
              Boolean(
                types.filter(
                  (i) => i.factory === input.invoices_customer_factory
                )[0]
              )
                ? types.filter(
                    (i) => i.factory === input.invoices_customer_factory
                  )[0].types
                : []
            }
            handleChange={handleChange}
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
        <Services_section handleChange={handleChange} user={user} serviceID={input.invoices_customer_service} setCost={setCost} cost={cost}/>
      </div>
      {/*final_cost & bransh */}
      <div className="row mt-4 primary-text">
        <div className="col-4">
          <Lable For="invoices_customer_final_cost" title="لتكلفة النهائية" />
          <input
            type="text"
            onChange={handleChange}
            name="invoices_customer_final_cost"
            className="form-control"
            id="invoices_customer_final_cost"
            placeholder={`${cost}`}
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
        <Branch_section handleChange={handleChange} user={user} />
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
      <div
        className={`message my-3 me-2 ${
          message === "تأكد من المدخلات ومن شبكة الانترنت لديك"
            ? "text-danger"
            : "text-success"
        }`}
      >
        {message}
      </div>
    </form>
  );
}

export default Form_lg;
