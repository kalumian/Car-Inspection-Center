// From Lib
import React, { useState, useEffect } from "react";

function Add_services({ setEditPage, setSections, user, setActive, active }) {
  // States
  const [checkSelect, setCheckSelect] = useState([]);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [service, setService] = useState({});
  const [activeButton, setActiveButton] = useState(true);

  // Functions
  const handleCheck = (d) => {
    setCheckSelect([...checkSelect, d.target.value]);
  };
  const handleService = (e) => {
    e.preventDefault();
    if (title.trim() === "" || price === "") {
      setMessage("الرجاء التأكد من المدخلات او من شبكة الانترنت لديك");
    } else {
      setService({
        type: title,
        price: Number(price),
      });
    }
    console.log(typeof service.price);
  };
  // useEffect
  useEffect(async () => {
    if (service.type) {
      try {
        let res = await fetch(
          "https://peaceful-depths-13311.herokuapp.com/add-service",
          {
            method: "POST",
            body: JSON.stringify(service),
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
          setTitle("");
          setPrice("");
          setMessage("تم اضافة الخدمة بنجاح");
          setTimeout(() => {
            setMessage("");
            setActiveButton(true);
          }, 4000);
          setActive(active + 1);
        }
      } catch (err) {
        setMessage("تأكد من المدخلات ومن شبكة الانترنت لديك");
      }
    }
  }, [service]);
  return (
    <div>
      <div className="row mt-3 ">
        <div className="col">
          <label htmlFor="invoices-customer-name" className="form-label">
            اضافة خدمة
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            className="form-control"
            autoComplete="off"
            id="invoices-customer-name"
          />
        </div>
        <div className="col">
          <label htmlFor="invoices-customer-name" className="form-label">
            السعر الإفتراضي
          </label>
          <input
            type="text"
            autoComplete="off"
            className="form-control"
            id="invoices-customer-name"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
      </div>
      <div className="row mt-1 ">
        <h6 className="mt-3 mb-1">انواع الفحوصات التي ستشملها:</h6>
        <div className="d-flex mt-3">
          <div className="mx-2">
            <input
              className="form-check-input"
              type="checkbox"
              value={"فحص كمبيوتر"}
              id="selectCheck"
              onChange={handleCheck}
            />
            <label className="form-check-label" htmlFor="selectCheck">
              فحص اسفل السيارة
            </label>
          </div>
          <div className="mx-2">
            <input
              className="form-check-input"
              type="checkbox"
              value={"فحص كمبيوتر"}
              id="selectCheck"
              onChange={handleCheck}
            />
            <label className="form-check-label" htmlFor="selectCheck">
              فحص كمبيوتر
            </label>
          </div>
          <div className="mx-2">
            <input
              className="form-check-input"
              type="checkbox"
              value={"فحص كمبيوتر"}
              id="selectCheck"
              onChange={handleCheck}
            />
            <label className="form-check-label" htmlFor="selectCheck">
              فحص جسم المركبة
            </label>
          </div>
          <div className="mx-2">
            <input
              className="form-check-input"
              type="checkbox"
              value={"فحص كمبيوتر"}
              id="selectCheck"
              onChange={handleCheck}
            />
            <label className="form-check-label" htmlFor="selectCheck">
              فحص ميداني
            </label>
          </div>
        </div>
      </div>
      <div
        className={`message my-3 me-3 ${
          message === "تم اضافة الخدمة بنجاح" ? "text-success" : "text-danger"
        }`}
      >
        {message}
      </div>
      <div className="d-flex justify-content-center">
        <button
          className="w-30 btn btn-lg primary-bg mx-2"
          onClick={handleService}
        >
          انشاء
        </button>
        <button
          className="w-30 btn btn-lg primary-bg mx-2"
          onClick={(e) => {
            e.preventDefault();
            setSections("control");
          }}
        >
          عودة
        </button>
        <button
          className="w-30 btn btn-lg primary-bg mx-2"
          onClick={(e) => {
            e.preventDefault();
            setSections("control");
            setEditPage(false);
          }}
        >
          انهاء
        </button>
      </div>
    </div>
  );
}

export default Add_services;
