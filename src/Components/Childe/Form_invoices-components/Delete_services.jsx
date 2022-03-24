import React, { useState, useEffect } from "react";

export default function Delete_services({
  setEditPage,
  setSections,
  services,
  user,
  active,
  setActive,
}) {
  const [message, setMessage] = useState("");
  const [id, setId] = useState({});
  const [signl, setSignl] = useState("الخدمات");

  // Function
  const handleId = (e) => {
    e.preventDefault();
    if (signl === "الخدمات") {
      setTimeout(() => {
        setMessage("الرجاء التأكد من المدخلات او من شبكة الانترنت لديك");
      }, 4000);
    } else {
      setId({ id: Number(signl) });
    }
  };
  //  useEffect
  useEffect(async () => {
    if (id.id) {
      try {
        let res = await fetch(
          "https://peaceful-depths-13311.herokuapp.com/service",
          {
            method: "DELETE",
            body: JSON.stringify(id),
            headers: {
              "Content-Type": "application/json",
              "x-access-tokens": user.token,
            },
          }
        );
        let resJson = await res.json();
        if (resJson.success === true) {
          setSignl("الخدمات");
          setMessage("تم الحذف بالنجاح");
          setActive(active + 1);
        }
      } catch (err) {
        console.log(err);
        setMessage("الرجاء التأكد من المدخلات او من شبكة الانترنت لديك");
      }
    }
  }, [id.id]);

  return (
    <div className="row mt-3 ">
      <h4>حذف الخدمة</h4>
      <div className="col">
        <select
          className="form-select col-8"
          name="edit-delete-branch"
          id="edit-delete-branch"
          onChange={(e) => {
            setSignl(e.target.value);
          }}
        >
          <option selected value={undefined}>
            الخدمات
          </option>
          {services.map((item) => {
            return (
              <option key={item.id} value={item.id}>
                {item.name} | {item.price}
              </option>
            );
          })}
        </select>
      </div>
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
        <button className="w-30 btn btn-lg primary-bg mx-2" onClick={handleId}>
          حذف
        </button>
        <button
          className="w-30 btn btn-lg primary-bg mx-2"
          onClick={(e) => {
            e.preventDefault();
            setSections("control");
            setSignl("الخدمات");
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
            setSignl("الخدمات");
          }}
        >
          انهاء
        </button>
      </div>
    </div>
  );
}
