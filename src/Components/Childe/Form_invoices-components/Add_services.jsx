// From Lib
import React, { useState, useEffect } from "react";

function Add_services({ setEditPage, setSections }) {
  const [checkSelect, setCheckSelect] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState([]);
  const handleCheck = (d) => {
    setCheckSelect([...checkSelect, d.target.value]);
  };
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
            id="invoices-customer-name"
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
              فحص اسف السيارة
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
      <div className="d-flex justify-content-center">
        <button
          className="w-30 btn btn-lg primary-bg mx-2"
          onClick={(e) => {
            e.preventDefault();
            console.log(title, price, checkSelect);
          }}
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
