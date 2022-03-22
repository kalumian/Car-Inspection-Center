import React, { useState, useEffect } from "react";

function Edit_services({
  setEditPage,
  setSections,
  services,
  user,
  active,
  setActive,
}) {
  // states
  const [message, setMessage] = useState("");
  const [stateEdit, setStateEdit] = useState(true);
  const [checkSelect, setCheckSelect] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState(undefined);
  const [newServices, setNewServices] = useState({});

  // Functions
  const handleCheck = (d) => {
    setCheckSelect([...checkSelect, d.target.value]);
  };

  const handleSetNewServices = (e) => {
    e.preventDefault();
    if (!(id === undefined) && !(price === "") && !(title.trim() === "")) {
      setNewServices({
        id,
        type: title,
        price,
      });
    } else {
      setMessage("الرجاء التأكد من المدخلات او من شبكة الانترنت لديك");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };
  // useEffect
  useEffect(async () => {
    if (newServices.type) {
      try {
        let res = await fetch(
          "https://peaceful-depths-13311.herokuapp.com/edit-service",
          {
            method: "PATCH",
            body: JSON.stringify(newServices),
            headers: {
              "Content-Type": "application/json",
              "x-access-tokens": user.token,
            },
          }
        );
        let resJson = await res.json();
        console.log(resJson);
        if (resJson.success === true) {
          setTitle("");
          setPrice("");
          setMessage("تم تعديل الخدمة بنجاح");
          setStateEdit(true);
          setActive(active + 1);
        }
      } catch (err) {
        console.log(err);
        setMessage("الرجاء التأكد من المدخلات او من شبكة الانترنت لديك");
      }
    }
  }, [newServices]);

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
                setId(e.target.value);
              }}
            >
              <option selected value={undefined}>
                الخدمات
              </option>
              {services.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.type}
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
      <div
        className={`message my-3 me-2 ${
          message === "الرجاء التأكد من المدخلات او من شبكة الانترنت لديك"
            ? "text-danger"
            : "text-success"
        }`}
      >
        {message}
      </div>
      <div className="d-flex justify-content-center">
        {stateEdit ? (
          <button
            className="w-30 btn btn-lg primary-bg mx-2"
            onClick={(e) => {
              e.preventDefault();
              setStateEdit(false);
            }}
          >
            تعديل
          </button>
        ) : (
          <button
            className="w-30 btn btn-lg primary-bg mx-2"
            onClick={handleSetNewServices}
          >
            حفظ التعديلات
          </button>
        )}
        <button
          className="w-30 btn btn-lg primary-bg mx-2"
          onClick={(e) => {
            e.preventDefault();
            setId(undefined);
            setSections("control");
            setStateEdit(true);
          }}
        >
          الغاء
        </button>
        <button
          className="w-30 btn btn-lg primary-bg mx-2"
          onClick={(e) => {
            e.preventDefault();
            setSections("control");
            setEditPage(false);
            setId(undefined);
          }}
        >
          انهاء
        </button>
      </div>
    </>
  );
}

export default Edit_services;
