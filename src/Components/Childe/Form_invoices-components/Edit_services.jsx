import React, { useState, useEffect } from "react";

function Edit_services({ setEditPage, setSections }) {
  const [message, setMessage] = useState("");
  const [stateEdit, setStateEdit] = useState(false);
  const [checkSelect, setCheckSelect] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState([]);
  const handleCheck = (d) => {
    setCheckSelect([...checkSelect, d.target.value]);
  };
  return (
    <>
      {stateEdit ? (
        <div className="row mt-3 ">
          <h4>تعديل على الخدمة</h4>
          <div className="col">
            <select
              className="form-select col-8"
              name="edit-delete-branch"
              id="edit-delete-branch"
              onChange={(e) => {
                // setId(e.target.value);
                // console.log(id);
              }}
            >
              <option selected value={undefined}>
                الخدمات
              </option>
              {[].map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      ) : (
        <>
          <div className="row mt-3 ">
            <div className="col">
              <label htmlFor="invoices-customer-name" className="form-label">
                 اضافة الخدمة الجديدة
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
                السعر الافتراضي الجديد
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
            <h6 className="mt-3 mb-1">التعديل على انواع الفحوصات المشمولة:</h6>
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
        </>
      )}

      <div className="row mt-3 ">{message}</div>
      <div className="d-flex justify-content-center">
        {stateEdit ? (
          <button
            className="w-30 btn btn-lg primary-bg mx-2"
            onClick={(e) => {
              e.preventDefault();
              setStateEdit(true);
            }}
          >
            تعديل
          </button>
        ) : (
          <button
            className="w-30 btn btn-lg primary-bg mx-2"
            onClick={(e) => {
              e.preventDefault();
              setStateEdit(false);
            }}
          >
            حفظ
          </button>
        )}
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
    </>
  );
}

export default Edit_services;
