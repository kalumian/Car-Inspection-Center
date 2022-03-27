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
  const [id, setId] = useState(undefined);
  const [message, setMessage] = useState("");
  const [stateEdit, setStateEdit] = useState(true);
  const [comp, setComp] = useState(false);
  const [body, setBody] = useState(false);
  const [drive, setDrive] = useState(false);
  const [down, setDown] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [newServices, setNewServices] = useState({});

  const handleSetNewServices = (e) => {
    e.preventDefault();
    if (
      !(price === "") ||
      !(title.trim() === "") ||
      body ||
      drive ||
      comp ||
      down
    ) {
      const item = services.filter((i) => {
        return i.id === Number(id);
      })[0];
      setNewServices({
        id,
        price: price === "" ? item.Price : price,
        name: title === "" ? item.name : title,
        type:["فحص اسفل السيارة"],
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
          setBody(false);
          setDrive(false);
          setDown(false);
          setComp(false);
          setTimeout(() => {
            setMessage("");
          }, 3000);
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
                  value={"اسفل-السيارة"}
                  id="selectCheck"
                  onChange={() => setDown(!down)}
                />
                <label className="form-check-label" htmlFor="selectCheck">
                  فحص اسفل السيارة
                </label>
              </div>
              <div className="mx-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={"كمبيوتر"}
                  id="selectCheck"
                  onChange={() => setComp(!comp)}
                />
                <label className="form-check-label" htmlFor="selectCheck">
                  فحص كمبيوتر
                </label>
              </div>
              <div className="mx-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={"جسم-المركبة"}
                  id="selectCheck"
                  onChange={() => setBody(!body)}
                />
                <label className="form-check-label" htmlFor="selectCheck">
                  فحص جسم المركبة
                </label>
              </div>
              <div className="mx-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={"ميداني"}
                  id="selectCheck"
                  onChange={() => setDrive(!drive)}
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
